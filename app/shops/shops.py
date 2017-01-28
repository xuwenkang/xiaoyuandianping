# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
from flask import Blueprint, request
from jinja2 import TemplateNotFound
import json

from app.datas_base.mongo_base import save_store_info, get_store_type

page = Blueprint('page', __name__, template_folder='templates')

# 保存提交的店铺信息
@page.route('/', defaults={'page': 'index'}, methods=['POST'])
@page.route('/<page>', methods=['POST'])
def show(page):
    return 'HELLO'


@page.route('/add_store', methods=['POST'])
def add_store():
    try:
        storName = request.form.get('storeName')
        storePosition = request.form.get('storePosition')
        storeType = request.form.get('storeType')
        storeDesc = request.form.get('storeDesc')
        storeImg = request.files['img']

        # 判断店铺名称是否存在

        # 保存图片,返回文件名称
        #from app.utils.common_util import CommonUtil
        #common_util = CommonUtil()
        #print common_util.save_img(storeImg)

        return json.dumps({'status': 200})

    except TemplateNotFound:
        return json.dumps({'status': 404})

# 获取商店类型信息  
@page.route('/get_store_type', methods=['GET'])
def get_store_types():
    result = get_store_type()
    return json.dumps(result)

@page.route('/test', methods=['GET'])
def test():
    print 'sb'
    return 'test'

@page.route('/backstage-login', methods=['POST'])
def backstage_login():
    print 'backstage'
    return json.dumps({'status': 404})