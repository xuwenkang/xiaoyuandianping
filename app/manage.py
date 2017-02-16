__author__ = 'xuwenkang'
from flask import Flask
from shops.shops import page

app = Flask(__name__)
app.secret_key = 'A0Zr98j/3yX R~XHH!jmN]LWX/,?RT'
app.register_blueprint(page, url_prefix='/shops')

if __name__ == '__main__':
    app.run()