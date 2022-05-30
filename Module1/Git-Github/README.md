## GIT FAST TRACK ## 

1. **Basic concepts **

Repo: local & remote
Working directory
Staging area
Branches are different versions of a repo. It's recommended not to make all the changes in the 'main' branch. Because 'main' is considered final, so it's better to make new changes in other branches and merge them to 'main later. 
Forking: create your own copy of someone's repos to your Github account where you can freely do changes in your fork repos, you can eventually merge changes back to upstream via pull requests (PRs)
Pull requests: Open a pull request to 'request' your parent repo (the repo from which you forked your repo) to review the changes you make to the 'copy' repo. Set the head repo as your 'copy' repo. 
Compare: Compare the changes between the parent repo and your forked repo
Fetch upstream: Fetch all the changes from parent repo to your forked repo Github

2. ** Basic git commands ** 
    ```
    git init
    ```
Initialize a new git folder in your local repo
    ```
    git remote -v
    ```
Check the origin of the remote repo
    ```
    git status
    ```
Checking the status (new changes) of the working directory
     ```
    git add
    ```
Add all new changes to the staging area
    ```
    git commit -m yourcommitmessage
    ```
Commit all changes to local repo
    ```
    git push --set-upstream origin main 
    ```
Push the changes from main origin in local to main branch in remote repo
    ```
    git branch yourbranchname
    ```
Create a new branch 
    ```
    git branch 
    ```
List all the branches 
    ```
    git branch -d yourbranchname 
    ```
Delete a branch
    ```
    git checkout yourbranchname 
    ```
Move into a branch 
    ```
    git merge yourbranchname 
    ```
Merge changes of side branches to the branch you're in
     ```
    git fetch  
    ```
Show the difference between remote and local repo
     ```
    git pull  
    ```
Add all updates in remote repo to local repo
    ```
    git log  
    ```
Show all commits made
    ```
    git revert yourcommitid  
    ```
Revert changes to the previous commit












