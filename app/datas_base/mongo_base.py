# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
import pymongo


# 判断数据库是否有数据
def is_exist(mongo_data):
    for data in mongo_data:
        if data:
            return True
        else:
            return False


# 获取mongodb 数据库实例
def get_mongodb_instance(db='test'):
    """
    :param db:数据库名称
    :return: 该数据库实例
    """
    from settings import MONGO_HOST, MONGO_PORT
    client = pymongo.MongoClient(MONGO_HOST, MONGO_PORT)
    # the default data_base name is shops
    return client.shops

class Shops:
    # 获取主页数据
    @staticmethod
    def get_index_info():
        """
        :return: 返回 店铺分类信息 和 热门商家的 tuple
        """
        db = get_mongodb_instance()

        # 获取商品分类信息
        store_type_list = []
        for type in Shops.get_store_type():
            list1 = {}
            # 获取商品点名信息
            list1['title'] = type['type_name']
            store_list = []
            for temp in db.store_info.find({'storeType':type['type_id']}):
                store_list.append(temp['storeName'])
            list1['subTitle'] = store_list
            store_type_list.append(list1)

        # 获取热门店铺
        popular_stores_list = []
        for popular_store in db.popular_stores.find():
            popular_stores_list.append(popular_store['store_name'])

        return (store_type_list, popular_stores_list)

    # 保存提交的店铺信息
    @staticmethod
    def save_store_info(storName, storePosition, storeType, storeDesc, storeImg):
        db = get_mongodb_instance()
        db.store_info.insert({
            'storeName': storName,
            'storePosition': storePosition,
            'storeType': storeType,
            'storeDesc': storeDesc,
            })

    # 获取商店类型信息
    @staticmethod
    def get_store_type():
        db = get_mongodb_instance()
        store_types = db.store_type.find()
        result = []
        for store_type in store_types:
            temp = {}
            temp['type_name'] = store_type['type_name']
            temp['type_id'] = store_type['type_id']
            result.append(temp)
        return result

    # 获取商店列表信息
    @staticmethod
    def get_stores_list(type_name):
        stores_list = []
        db = get_mongodb_instance()
        # 获取类型编号
        type_id = None
        for temp in db.store_type.find({'type_name': type_name}):
            type_id = temp['type_id']
        # 获取店铺列表信息
        for store in db.store_info.find({'storeType': type_id, 'status': 'pass'}):
            temp_list = []
            temp_list.append({'name':store['storeName']})
            temp_list.append({'address':store['storePosition']})
            temp_list.append({'openTime':store['open_time']})
            temp_list.append({'picture': store['picture']})
            stores_list.append(temp_list)

        return stores_list

    # 获取评论信息
    @staticmethod
    def get_comments_info(store_name, mac):
        comments_list = []
        db = get_mongodb_instance()
        for comments in db.store_comments.find({'store_name': store_name,  'status': 'pass'}):
            for comment in comments['comments']:
                comment_info = []
                comment_info.append({'store_name': store_name})
                comment_info.append({'id': comment['comment_id']})
                comment_info.append({'value': comment['content']})
                comment_info.append({'date': comment['date']})
                comment_info.append({'like': comment['like']})
                comment_info.append({'dislike': comment['dislike']})
                # 判断mac地址是否已经操作过
                flag = True
                for macs in comment['operation_mac']:
                    mac_info = macs.split(',')
                    if mac_info[0] == mac:
                        flag = False
                        if mac_info[1] == 'true':
                            comment_info.append({'liked': True})
                        else:
                            comment_info.append({'liked': False})
                        if mac_info[2] == 'true':
                            comment_info.append({'disliked': True})
                        else:
                            comment_info.append({'disliked': False})
                if flag:
                    #comment_info.append({'is_operation': False})
                    comment_info.append({'liked': False})
                    comment_info.append({'disliked': False})
                comments_list.append(comment_info)

        return comments_list

    # 获取评论信息
    @staticmethod
    def add_comment_info(store_name, mac, content, tags, mark):
        db = get_mongodb_instance()
        # 判断是否有数据
        if  is_exist(db.store_comments.find({'store_name':store_name})):
            # 判断是否已经评论过
            if is_exist(db.store_comments.find({'store_name': store_name, 'comments.mac':mac})):
                return {'error':'commented'}
            else:
                # 更新数据,加入新的评论
                try:
                    db.store_comments.update({'store_name':store_name}, {'$push':{'comments':
                        {'mac':mac,'content':content, 'like':0, 'dislike':0, 'operation_mac':[]}}})
                    return {'error': ''}
                except:
                    return {'error':'commented'}
        else:
            # 插入新的数据
            try:
                db.store_comments.insert({'store_name': store_name, 'comments': [{'mac':mac,'content':content,
                                                'like':0, 'dislike':0, 'operation_mac':[]}], 'status': 'pass'})
                return {'error': ''}
            except:
                return {'error': 'commented'}



class BackstageShops:
    # 获取商店申请信息
    @staticmethod
    def get_store_info():
        db = get_mongodb_instance()
        store_infos = db.store_info.find({'status': 'waiting'})
        store_list = []
        for store_info in store_infos:
            store = []
            store.append(store_info['storeName'])
            store.append(store_info['storeDesc'])
            store.append(store_info['storePosition'])
            store.append(store_info['storeType'])
            store.append(store_info['time'])
            store.append(store_info['picture'])
            store_list.append(store)
        return store_list

    # 申请信息通过
    @staticmethod
    def pass_store(store_name):
        db = get_mongodb_instance()
        db.store_info.update({'storeName':store_name}, {'$set':{'status':'pass'}})

    # 申请信息不通过
    @staticmethod
    def against_store(store_name):
        db = get_mongodb_instance()
        db.store_info.update({'storeName':store_name}, {'$set':{'status':'fail'}})

if __name__ == "__main__":
    # db = get_mongodb_instance()
    """
    db.store_type.insert({
        'type_id': '001',
        'type_name': '咖啡厅',
        })
    """
    # print get_store_type()
    #print get_store_info()
    #print Shops.get_index_info()[1][0]
    #print Shops.get_stores_list('书店')
    #print Shops.get_comments_info('store2', '23477')
    #print Shops.get_comments_info('store2', '224335')
    print Shops.add_comment_info('store3', '32436', 'not good place!')
