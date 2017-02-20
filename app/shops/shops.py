# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
from flask import Blueprint, request, render_template
from jinja2 import TemplateNotFound
import json

from app.datas_base.mongo_base import Shops

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
        store_name = request.form.get('storeName')
        store_position = request.form.get('storePosition')
        store_type = request.form.get('storeType')
        store_desc = request.form.get('storeDesc')
        store_img = request.files['img']
        # 判断店铺名称是否存在
        if Shops.is_exist_store(store_name):
            return 404
        else:
            # 保存图片,返回文件名称
            from app.utils.common_util import CommonUtil
            img_name = CommonUtil.save_img(store_img)
            print img_name
            Shops.save_store_info(store_name, store_position, store_type, store_desc, img_name)

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
    return json.dumps({'topic': 'hello','list1': result[0], 'list2': result[1]})

# 店铺列表信息
@page.route('/store_list_data', methods=['POST', 'GET'])
def get_stores_list():
    type_name = request.args.get('type')
    result = Shops.get_stores_list(type_name)
    return json.dumps({'data': result})

# 店铺详细信息
@page.route('/store_detail', methods=['GET'])
def get_store_detail():
    id = request.args.get('id')
    result = Shops.get_store_detail(id)
    return json.dumps({'data': result})

# 评论信息
@page.route('/comments_list', methods=['GET'])
def get_comments_list():
    store_name = request.args.get('id')
    #mac = request.form['mac']
    mac = '123'
    result = Shops.get_comments_info(store_name, mac)
    return json.dumps({'data': result})

# 提交评论
@page.route('/add_comment', methods=['POST', 'GET'])
def add_comment():
    store_name = request.form['store_name']
    mac = request.form['mac']
    content = request.form['comment']
    tags = request.form['']
    mark = request.form['mark']
    result = Shops.add_comment_info(store_name, mac, content, mark)

    return result

# 修改评论状态
@page.route('/changeLikeStatus', methods=['POST', 'GET'])
def change_like_status():
    comment_id = request.args.get('id')
    mac = request.args.get('mac')
    liked = request.args.get('liked')
    disliked = request.args.get('disliked')
    result = Shops.change_like_status(comment_id, mac, liked, disliked)

    return json.dumps({'data': result})

# changeLikeStatus
# s
# comments_list
# store_list_search_data
# store_list_data
