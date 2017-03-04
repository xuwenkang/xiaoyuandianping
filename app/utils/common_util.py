# -*- coding:utf-8 -*-
from uuid import uuid1
from flask import session
import json
import re
from PIL import Image

from settings import img_pre, simg_pre

class CommonUtil:

    # 保存图片
    @staticmethod
    def save_img(img):
        img_type = img.filename.split('.')[1]
        img_name =  str(uuid1()) + "." + img_type
        with open(img_pre+img_name, 'wb') as f:
            f.write(img.read())

        img = Image.open(img_pre+img_name)
        size = img.size
        img = img.resize((250, 156), Image.ANTIALIAS)
        img.save(simg_pre+img_name)
        return ('store_images/shop-' + img_name, size[0], size[1])

    @staticmethod
    def get_size():
        img = Image.open("../../templates/shops/store_images/shop-7e96a2b6-f748-11e6-91ec-000c29193029.jpg")
        img = img.resize((250, 156), Image.ANTIALIAS)
        img.save('../../templates/shops/store_images/jb51_small.jpg')


    @staticmethod
    # 验证是否已经登录
    def authentication(method):
        def wrapper():
            if 'user_name' in session:
                return method()
            else:
                return json.dumps({'status': 404, 'msg': 'please login first!'})
        return wrapper

    @staticmethod 
    def strip_str(value):
        return value.replace('$', '').replace('{', '').replace('}', '')

if __name__ == '__main__':
    print CommonUtil.get_size()