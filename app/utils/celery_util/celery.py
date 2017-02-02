from __future__ import absolute_import
from celery import Celery

app = Celery('celery_util', include=['celery_util.tasks'])

app.config_from_object('celery_util.config')

if __name__ == '__main__':
    app.start()