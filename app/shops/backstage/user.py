# -*- coding:utf-8 -*-
__author__ = 'xwk'
import bcrypt

from app.datas_base.mongo_base import get_mongodb_instance


class User():
    def __init__(self):
        pass

    # 验证登录
    def validate(self, user_name, password):
        db = get_mongodb_instance()
        cols = db.backstage_user.find({'b_user_name': user_name})
        flag = False
        for col in cols:
            #print bcrypt.hashpw(password.encode('utf-8'), col['b_user_password'].encode('utf-8'))
            if bcrypt.hashpw(password.encode('utf-8'), col['b_user_password'].encode('utf-8')) == col['b_user_password']:
                flag = True
                break
        return flag


    # 判断用户是否存在
    def is_exist(cls, user_name):
        db = get_mongodb_instance()
        i = 0
        for col in db.backstage_user.find({'b_user_name': user_name}):
            i += 1
        if 0 == i:
            return True
        else:
            return False


    # 插入注册信息
    def insert_registry_info(cls, account, password, true_name='', telephone=''):
        db = get_mongodb_instance()
        if cls.is_exist(account, get_mongodb_instance()):
            db.USER_INFO.insert({'account':account, 'password':password, 'true_name':true_name,
                                 'telephone':telephone})
            data = '注册成功！'
        else:
            data = '已经被注册！'
        return data

if __name__ == "__main__":

    user = User()
    print user.is_exist('test')
    print user.validate('test', 'test1')