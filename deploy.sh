#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'docs.greenhubproject.org' > CNAME

git init
git add -A
git commit -m "Deploy $(date -Iseconds)"

git push -f git@github.com:greenhub-project/docs.git master:gh-pages

cd -
