# -*- coding:utf-8 -*-
from uuid import uuid1

from settings import img_pre

class CommonUtil:

    # 保存图片
    def save_img(self, img):
        img_name = img_pre + str(uuid1()) + ".png"

        with open(img_name, 'wb') as f:
            f.write(img.read())
        return img_name


