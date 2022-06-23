#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'first'

# 如果发布到 https://<USERNAME>.github.io
#git push -f git@github.com:windowsofshy/windowsofshy.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git  push -f  git@github.com:windowsofshy/myBlog.git  master

cd -