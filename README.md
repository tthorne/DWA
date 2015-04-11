# DWA
Add Git Repo to Server
git remote add prodServer ssh://curlylox82@104.236.229.23/var/repos/DWA.git

Adding Commits
git commit -q -m “commit message”


Pushing Git Repo To Server
git push prodServer

Adding Tags and Pushing To Server
git tag -a vX.X.X -m ‘version code or feature name’
git push prodServer —tags
