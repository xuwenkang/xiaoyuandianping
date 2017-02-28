# -*- coding:utf-8 -*-
__author__ = 'xuwenkang'
from flask import request, session, Blueprint
import json

from app.datas_base.mongo_base import BackstageShops, Shops
from app.utils.common_util import CommonUtil
from app.shops.backstage.user import User

user = User()
back_page = Blueprint('backstage_page', __name__, template_folder='templates')

# 后台页面
@back_page.route('/backstage_login', methods=['POST'])
def backstage_login():

    user_name = request.form['user_name']
    user_name = CommonUtil.strip_str(user_name)
    password = request.form['password']
    password = CommonUtil.strip_str(password)

    if not user.is_exist(user_name):
        if not user.validate(user_name, password):
            return json.dumps({'status': 404, 'msg': 'password is not correct!'})
        else:
            session['user_name'] = user_name
            return json.dumps({'status': 200})
    else:
        return json.dumps({'status': 404, 'msg': 'this user is not exist!'})

@back_page.route('/logout', methods=['POST'])
def logout():
    try:
        session.pop('user_name', None)
        return json.dumps({'status': 200})
    except:
        return json.dumps({'status': 404, 'msg': 'logout failed!'})


@back_page.route('/backstage_index', methods=['POST'], endpoint='/backstage_index')
@CommonUtil.authentication
def backstage_index():
    msg = BackstageShops.get_store_info()
    return json.dumps({'status': 200, 'dataSet':msg})  

@back_page.route('/backstage_pass_store', methods=['POST'], endpoint='/backstage_pass_store')
def backstage_pass_store():
    store_name = request.form['store_name']
    try:
        BackstageShops.pass_store(store_name)
        return json.dumps({'status': 200, 'msg': '修改成功！'})
    except:
        return json.dumps({'status': 404, 'msg': '修改失败！'})

@back_page.route('/backstage_against_store', methods=['POST'], endpoint='/backstage_against_store')
def backstage_against_store ():
    store_name = request.form['store_name']
    store_name = CommonUtil.strip_str(store_name)
    try:
        BackstageShops.against_store(store_name)
        return json.dumps({'status': 200, 'msg':'修改成功！'})
    except:
        return json.dumps({'status': 404, 'msg':'修改失败！'})

@back_page.route('/pass_index', methods=['POST'], endpoint='/pass_index')
@CommonUtil.authentication
def pass_index():
    msg = BackstageShops.get_store_info('pass')
    return json.dumps({'status': 200, 'dataSet':msg})

@back_page.route('/unpass_index', methods=['POST'], endpoint='/unpass_index')
@CommonUtil.authentication
def unpass_index():
    msg = BackstageShops.get_store_info('unpass')
    return json.dumps({'status': 200, 'dataSet':msg})


@back_page.route('/get_sub_store_types', methods=['GET'])
def get_sub_store_type():
    result = Shops.get_sub_store_type()
    return json.dumps({'data':result}), {'Content-Type': 'application/json'}