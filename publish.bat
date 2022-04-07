git add .
git status 
git commit -m "Update"
git push origin main

git checkout gh-pages 
git rebase main 
git push origin gh-pages 
git checkout main 