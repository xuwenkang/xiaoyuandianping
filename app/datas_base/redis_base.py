# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
import redis

from settings import REDIS_HOST, REDIS_PORT


class RedisDb:
    # 获取redis 数据库实例
    def get_db_instance(self, host, port, db=0):
        """
        :param host:
        :param port:
        :param db:
        :return: instance of redis client
        """
        r = redis.StrictRedis(host, port, db)
        return r

    # 获取redis pipeline实例
    def get_db_pipeline(slef, host, port, db=0):
        """
        :param host:
        :param port:
        :param db:
        :return:
        """
        r = redis.StrictRedis(host, port, db)
        # 判断redis链接是否有效
        try:
            print r.ping()
        except:
            return None
        pipeline = r.pipeline()
        return pipeline

    # 保存店铺的名称
    def save_store_name_redis(self, redis_pipeline, store_name='store1'):
        # 先判断是否已经存在
        if redis_pipeline.sismember('store_name', store_name).execute()[0]:
            return False
        else:
            redis_pipeline.sadd('store_name', store_name).execute()
            return True


if __name__ == "__main__":
    #redis_inst = get_db_instance(REDIS_HOST, REDIS_PORT)
    #redis_pipeline = get_db_pipeline(REDIS_HOST, REDIS_PORT)

    #print redis_pipeline.get('foo').execute()
    redis_db = RedisDb()
    redis_pipeline = redis_db.get_db_pipeline(REDIS_HOST, REDIS_PORT)
    # 判断redis链接是否有效
    if redis_pipeline != None:
        print redis_db.save_store_name_redis(redis_pipeline, 'hehe')
    else:
        print '无效'