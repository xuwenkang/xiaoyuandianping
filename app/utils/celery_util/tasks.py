from __future__ import absolute_import
from .celery import app

@app.task
def add(x, y):
    print 'h2ll0'
    return x + y