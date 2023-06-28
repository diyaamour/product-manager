# Create a Feature Branch
```
git checkout dev
git pull origin dev
git checkout -b feature/<new-feature-branch-name>
```

# Working with feature branch and publishing to Github
```
git add .
git commit -m "Your commit message"
git pull origin dev (this calls out merge conflicts locally)
git commit (only do after results in merge conflicts as this will commit the resolutions)
git push origin feature/<new-feature-branch-name>
```

# Pulling and Meging feature/<new-feature-branch-name>  into Dev
Someone may be watching the merge and that is why use Github to pull and merge into dev

#merge Conflicts (look at Git Cheat Sheet)
Click the + icon (see above image) for this file in the source control panel to stage and resolve the merge conflict. The file should disappear from the panel.
