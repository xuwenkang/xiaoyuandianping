__author__ = 'xuwenkang'
from flask import Flask
from shops.shops import page
from shops.shops_backstage import back_page

def configure_blueprints(app):
    app.secret_key = 'xwk lalala'
    blueprints = {page:"/shops", back_page:"/shops/backstage"}
    for key in blueprints:
        app.register_blueprint(key, url_prefix=blueprints[key])

app = Flask(__name__)
configure_blueprints(app)
#app.secret_key = 'xwk lalala'
#app.register_blueprint(page, url_prefix='/shops')

if __name__ == '__main__':
    app.run()