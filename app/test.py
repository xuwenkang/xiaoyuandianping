__author__ = 'xuwenkang'
import os

print os.path.exists('../templates/shops/images/icon_middle.png')
with open('../templates/shops/images/icon_middle.png', 'rb') as f:
    content = f.read()

with open('1.png', 'wb') as f:
    f.write(content)

#img = Image.open('../templates/images/icon_middle.png')
#img = Image.open(content)
#img.show()