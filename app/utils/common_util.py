# -*- coding:utf-8 -*-
from uuid import uuid1
from flask import session
import json

from settings import img_pre

class CommonUtil:

    # 保存图片
    def save_img(self, img):
        img_name = img_pre + str(uuid1()) + ".png"

        with open(img_name, 'wb') as f:
            f.write(img.read())
        return img_name

    @staticmethod
    # 验证是否已经登录
    def authentication(method):
        def wrapper():
            if 'user_name' in session:
                return method()
            else:
                return json.dumps({'status': 404, 'msg': 'please login first!'})
        return wrapper

