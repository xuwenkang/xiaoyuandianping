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
def save_store_info():
    db = get_mongodb_instance('test')


if __name__ == "__main__":
    db = get_mongodb_instance('test')
    print db
    for temp in db.test_table.find():
        print temp['hello']
