# Deployment Plan - Local Development to Stage Server
git add -A<br>
git commit -q -m “commit message”<br>
git push stageServer<br>
git tag -a v1.0.0 -m “Initial Commit”<br>
git push stageServer --tags<br>

-----

# Deployment Plan - Local Development to Production Server
git add -A<br>
git commit -q -m “commit message”<br>
git push stageServer<br>
