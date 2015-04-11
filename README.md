# Deployment Plan - Local Development to Stage Server
git add -A
git commit -q -m “commit message”
git push stageServer
git tag -a v1.0.0 -m “Initial Commit”
git push stageServer --tags

-----

# Deployment Plan - Local Development to Production Server
git add -A
git commit -q -m “commit message”
git push stageServer
