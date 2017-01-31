# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
import pymongo

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

# 保存提交的店铺信息
def save_store_info(storName, storePosition, storeType, storeDesc, storeImg):
    db = get_mongodb_instance()
    db.store_info.insert({
        'storeName': storName,
        'storePosition': storePosition,
        'storeType': storeType,
        'storeDesc': storeDesc,
        })

# 获取商店类型信息  
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

# 获取商店申请信息
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
        store_list.append(store)
    return store_list

# 申请信息通过
def pass_store(store_name):
    db = get_mongodb_instance()
    db.store_info.update({'storeName':store_name}, {'$set':{'status':'pass'}})

# 申请信息不通过
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
    print get_store_info()
