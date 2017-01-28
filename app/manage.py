__author__ = 'xuwenkang'
from flask import Flask
from shops.shops import page

app = Flask(__name__)
app.register_blueprint(page, url_prefix='/shops')

if __name__ == '__main__':
    app.run()