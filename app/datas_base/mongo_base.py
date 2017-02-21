# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
import pymongo
import time


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
            """
            store_list = []
            for temp in db.store_info.find({'storeType':type['type_id']}):
                store_list.append(temp['storeName'])
            list1['subTitle'] = store_list
            """
            list1['subTitle'] = type['sub_type']
            store_type_list.append(list1)
        # 获取热门店铺
        popular_stores_list = []
        for popular_store in db.popular_stores.find():
            popular_stores_list.append(popular_store['store_name'])

        return (store_type_list, popular_stores_list)

    # 判断店铺名称是否存在
    @staticmethod
    def is_exist_store(store_name):
        db = get_mongodb_instance()
        found = False
        for store in db.store_info.find({'store_name': store_name}):
            if store:
                found = True
        return found

    # 保存提交的店铺信息
    @staticmethod
    def save_store_info(store_name, store_position, store_type, store_desc, store_img):
        db = get_mongodb_instance()
        db.store_info.insert({
            'store_name': store_name,
            'store_position': store_position,
            'store_type': store_type,
            'store_desc': store_desc,
            'picture': store_img,
            'time': time.time(),
            'status': 'waiting',
            'score': 0,
            'tags':[]
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
            temp['sub_type'] = store_type['sub_type']
            result.append(temp)
        return result

    # 获取商店列表信息
    @staticmethod
    def get_stores_list(type_name):
        stores_list = []
        db = get_mongodb_instance()
        # 获取店铺列表信息
        for store in db.store_info.find({'store_type': type_name, 'status': 'pass'}):
            temp_list = {}
            temp_list['id'] = store['store_name']
            temp_list['name'] = store['store_name']
            #temp_list.append({'address':store['storePosition']})
            temp_list['address'] = store['store_position']
            temp_list['openTime'] = store['open_time']
            temp_list['score'] = store['score']
            temp_list['overall'] = 8.4
            #temp_list['picURLs'] = ['store_images/' + store['picture']]
            temp_list['picURLs'] = [store['picture']]
            temp_list['tags'] = store['tags']
            stores_list.append(temp_list)
        return stores_list

    @staticmethod
    def store_list_search_data(keyword):
        stores_list = []
        db = get_mongodb_instance()
        # 获取店铺列表信息
        import re
        rule = re.compile(keyword)
        for store in db.store_info.find({'store_name': {'$regex':rule}, 'status': 'pass'}):
            temp_list = {}
            temp_list['id'] = store['store_name']
            temp_list['name'] = store['store_name']
            #temp_list.append({'address':store['storePosition']})
            temp_list['address'] = store['store_position']
            temp_list['openTime'] = store['open_time']
            temp_list['score'] = store['score']
            temp_list['overall'] = 8.4
            #temp_list['picURLs'] = ['store_images/' + store['picture']]
            temp_list['picURLs'] = [store['picture']]
            temp_list['tags'] = store['tags']
            stores_list.append(temp_list)
        return stores_list

    # 获取商店详情信息
    @staticmethod
    def get_store_detail(name):
        db = get_mongodb_instance()
        temp_list = {}

        for store in db.store_info.find({'store_name':name, 'status': 'pass'}):
            #temp_list['id'] = store['storeName']
            temp_list['name'] = store['store_name']
            temp_list['address'] = store['store_position']
            temp_list['openTime'] = store['open_time']
            temp_list['score'] = store['score']
            #temp_list['picURLs'] = ['store_images/' + store['picture']]
            temp_list['picURLs'] = [store['picture']]
            #temp_list['tags'] = [["环境好"], ["good drink"]]
            temp_list['tags'] = store['tags']
        return temp_list

    # 获取评论信息
    @staticmethod
    def get_comments_info(store_name, mac):
        comments_list = []
        db = get_mongodb_instance()
        for comments in db.store_comments.find({'store_name': store_name,  'status': 'pass'}):
            for comment in comments['comments']:
                comment_info = {}
                #comment_info.append({'store_name': store_name})
                comment_info['id'] = comment['comment_id']
                comment_info['value'] = comment['content']
                comment_info['date'] = comment['date']
                comment_info['like'] = comment['like']
                comment_info['dislike'] = comment['dislike']
                # 判断mac地址是否已经操作过
                flag = True
                for macs in comment['operation_mac']:
                    mac_info = macs.split(',')
                    if mac_info[0] == mac:
                        flag = False
                        if mac_info[1] == 'true':
                            comment_info['liked'] = True
                        else:
                            comment_info['liked'] = False
                        if mac_info[2] == 'true':
                            comment_info['disliked'] = True
                        else:
                            comment_info['disliked'] = False
                if flag:
                    #comment_info.append({'is_operation': False})
                    comment_info['liked'] = False
                    comment_info['disliked'] = False
                comments_list.append(comment_info)

        return comments_list

    # 增加评论信息
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

    # 修改评论状态
    @staticmethod
    def change_like_status(comment_id, mac, liked, disliked):
        db = get_mongodb_instance()
        # 插入评论状态数据
        data = mac + ',' + liked + ',' + disliked
        #db.store_comments.update({'comments.comment_id':comment_id}, {'$push':{'comments.$.operation_mac': data}})
        #db.store_comments.update({'comments.comment_id': comment_id}, {'$pull': {'comments.$.operation_mac': data}})
        flag = False
        import re
        rule = re.compile(r'^'+mac)
        for comment in db.store_comments.find({'comments.operation_mac':{'$regex':rule}}):
            flag = True
        if flag:
            if liked == 'true':
                db.store_comments.update({'comments.comment_id':comment_id},
                                         {'$pull': {'comments.$.operation_mac': {'$regex':rule}},
                                          '$inc':{'comments.$.like':1}})
                db.store_comments.update({'comments.comment_id': comment_id},
                                         {'$push': {'comments.$.operation_mac': data},
                                          '$inc': {'comments.$.dislike': -1}})
            else:
                db.store_comments.update({'comments.comment_id': comment_id},
                                         {'$pull': {'comments.$.operation_mac': {'$regex': rule}},
                                          '$inc': {'comments.$.like': -1}})
                db.store_comments.update({'comments.comment_id': comment_id},
                                         {'$push': {'comments.$.operation_mac': data},
                                          '$inc': {'comments.$.dislike': 1}})
        else:
            if liked == 'true':
                db.store_comments.update({'comments.comment_id': comment_id},
                                         {'$push': {'comments.$.operation_mac': data},
                                          '$inc': {'comments.$.like':1}})
            else:
                db.store_comments.update({'comments.comment_id': comment_id},
                                         {'$push': {'comments.$.operation_mac': data},
                                          '$inc': {'comments.$.dislike': 1}})
        return []

class BackstageShops:
    # 获取商店申请信息
    @staticmethod
    def get_store_info(status='waiting'):
        db = get_mongodb_instance()
        store_infos = db.store_info.find({'status': status})
        store_list = []
        for store_info in store_infos:
            store = []
            store.append(store_info['store_name'])
            store.append(store_info['store_desc'])
            store.append(store_info['store_position'])
            store.append(store_info['store_type'])
            store.append(store_info['time'])
            store.append(store_info['picture'])
            store_list.append(store)
        return store_list

    # 申请信息通过
    @staticmethod
    def pass_store(store_name):
        db = get_mongodb_instance()
        db.store_info.update({'store_name':store_name}, {'$set':{'status':'pass'}})

    # 申请信息不通过
    @staticmethod
    def against_store(store_name):
        db = get_mongodb_instance()
        db.store_info.update({'store_name':store_name}, {'$set':{'status':'unpass'}})

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
    #print Shops.get_index_info()[0]
    #print Shops.get_stores_list('coffee')
    #print Shops.get_comments_info('store2', '23477')
    #print Shops.get_comments_info('store2', '224335')
    #print Shops.add_comment_info('store3', '32436', 'not good place!')
    #print Shops.get_store_detail('store2')
    #print Shops.change_like_status('1230545', '1234:1234:1234:1234', 'false', 'true')
    