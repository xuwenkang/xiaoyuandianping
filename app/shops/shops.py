# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
from flask import Blueprint, request
from jinja2 import TemplateNotFound
import json

from app.datas_base.mongo_base import Shops, BackstageShops
from app.shops.backstage.user import User

user = User()

page = Blueprint('page', __name__, template_folder='templates')

# 保存提交的店铺信息
"""
@page.route('/', defaults={'page': 'index'}, methods=['POST'])
@page.route('/<page>', methods=['POST'])
def show(page):
    return 'HELLO'
"""


@page.route('/add_store', methods=['POST'])
def add_store():
    try:
        storeName = request.form.get('storeName')
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
    result = Shops.get_store_type()
    return json.dumps(result)

# 主页
@page.route('/', methods=['POST', 'GET'])
@page.route('/index', methods=['POST', 'GET'])
def index():
    result = Shops.get_index_info()
    return json.dumps({'list1': result[0], 'list2': result[1]})

# 店铺列表信息
@page.route('/stores_list/<type_name>', methods=['POST', 'GET'])
def get_stores_list(type_name):
    result = Shops.get_stores_list(type_name)
    return json.dumps({'data': result})
    #return json.dumps()

# 评论信息
@page.route('/comments_list/')
def get_comments_list():
    store_name = request.form['store_name']
    mac = request.form['mac']
    result = Shops.get_comments_info(store_name, mac)
    return json.dumps({'data': result})

# 后台页面
@page.route('/backstage_login', methods=['POST'])
def backstage_login():

    user_name = request.form['user_name']
    password = request.form['password']

    if not user.is_exist(user_name):
        if not user.validate(user_name, password):
            return json.dumps({'status': 404, 'msg': 'password is not correct!'})
        else:
            return json.dumps({'status': 200})
    else:
        return json.dumps({'status': 404, 'msg': 'this user is not exist!'})

@page.route('/backstage_index', methods=['POST'])
def backstage_index():
    msg = BackstageShops.get_store_info()
    return json.dumps({'status': 200, 'dataSet':msg})

@page.route('/backstage_pass_store', methods=['POST'])
def backstage_pass_store():
    store_name = request.form['store_name']
    try:
        BackstageShops.pass_store(store_name)
        return json.dumps({'status': 200, 'msg': '修改成功！'})
    except:
        return json.dumps({'status': 404, 'msg': '修改失败！'})

@page.route('/backstage_against_store', methods=['POST'])
def backstage_against_store ():
    store_name = request.form['store_name']
    try:
        BackstageShops.against_store(store_name)
        return json.dumps({'status': 200, 'msg':'修改成功！'})
    except:
        return json.dumps({'status': 404, 'msg':'修改失败！'})