# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
from flask import Blueprint, request, render_template
from jinja2 import TemplateNotFound
import urllib
import json
from urlparse import unquote
import sys
reload(sys)
sys.setdefaultencoding('utf-8')

from app.datas_base.mongo_base import Shops
from app.utils.common_util import CommonUtil

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
        store_name = CommonUtil.strip_str(store_name)
        store_position = request.form.get('storePosition')
        store_position = CommonUtil.strip_str(store_position)
        store_type = request.form.get('storeType')
        store_type = CommonUtil.strip_str(store_type)
        store_desc = request.form.get('storeDesc')
        store_desc = CommonUtil.strip_str(store_desc)
        store_img = request.files['img']
        store_time = request.form.get('storeTime')
        store_time = CommonUtil.strip_str(store_time)
        # 判断店铺名称是否存在
        if Shops.is_exist_store(store_name):
            return 404
        else:
            # 保存图片,返回文件名称
            (img_name,width, height) = CommonUtil.save_img(store_img)
            print img_name
            Shops.save_store_info(store_name, store_position, store_type, store_desc, img_name, store_time, width, height)

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
    type_name = CommonUtil.strip_str(type_name)
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
    store_name = CommonUtil.strip_str(store_name)
    #mac = request.form['mac']
    # mac means ip
    mac = request.remote_addr
    result = Shops.get_comments_info(store_name, mac)
    return json.dumps({'error':'', 'data': result})

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
    comment_id = CommonUtil.strip_str(comment_id)
    ip = request.remote_addr
    liked = request.args.get('liked')
    liked = CommonUtil.strip_str(liked)
    disliked = request.args.get('disliked')
    disliked = CommonUtil.strip_str(disliked)
    if liked == 'false' and disliked == 'false':
        return json.dumps({'error':''})

    result = Shops.change_like_status(comment_id, ip, liked, disliked)
    return json.dumps({'error':'', 'data':{'result':{'liked':'true','disliked':'false'}}})
    #return json.dumps({'error':'', 'data':{'result':{'liked':True,'disliked':False}}})   


@page.route('/store_list_search_data', methods=['POST', 'GET'])
def store_list_search_data():
    keyword = request.args.get('keyword')
    keyword = CommonUtil.strip_str(keyword)
    result = Shops.store_list_search_data(keyword)

    return json.dumps({'data': result})


@page.route('/comment_data', methods=['GET'])
def get_comment_data():
    store_name = request.args.get('id')
    store_name = CommonUtil.strip_str(store_name)
    result = Shops.get_comment_data(store_name)

    return json.dumps(result)


@page.route('/comment', methods=['GET', 'POST'])
def comment():
    try:
        #url = json.loads(request.get_data())['data']
        url = request.get_data()
        url = unquote(url)
        data = url.split("{\"data\":\"")[1]
        data = data[:len(data)-2]
        data = json.loads(data)
        store_id = data['title']
        store_id = CommonUtil.strip_str(store_id)
        store_score = data['score']
        #store_score = CommonUtil.strip_str(store_score)
        store_title = data['text']
        store_title = CommonUtil.strip_str(store_title)
        store_tags = data['tags']
        #store_tags = CommonUtil.strip_str(store_tags)
        ip = request.remote_addr

        Shops.comment(store_id, store_score, store_title, store_tags, ip)
        return json.dumps({"error":''})
    except:
        return json.dumps({'error':'error'})

@page.route('/storeFormData', methods=['GET', 'POST'])
def get_store_form_data():
    result = Shops.get_store_form_data()
    return json.dumps({'data':'sb'})