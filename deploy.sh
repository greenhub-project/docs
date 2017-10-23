#!/bin/bash

rm -rf _book
gitbook install
gitbook build
mkdir _book
cp CNAME _book/CNAME
cd _book
git init
git add -A
git commit -m 'update book'
git push -f git@github.com:greenhub-project/docs.git master:gh-pages
