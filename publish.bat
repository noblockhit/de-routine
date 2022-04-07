git checkout gh-pages 
git pull
git add .
git commit -m "Publish"
git rebase main
git push origin gh-pages
git checkout main