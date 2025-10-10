const getGitLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to Git and Version Control": `
- What is version control and why it matters
- History of version control systems
- Centralized vs Distributed version control
- What is Git and its advantages
- Git vs other version control systems
- Git workflow and basic concepts
- Setting up Git for the first time
- Understanding the Git ecosystem`,

    "Installing and Configuring Git": `
- Installing Git on different operating systems
- Git configuration (global and local)
- Setting up user identity (name and email)
- Configuring default editor and merge tool
- Setting up SSH keys for authentication
- Configuring Git aliases for efficiency
- Understanding Git configuration levels
- Best practices for Git configuration`,

    "Understanding Git Repository Structure": `
- What is a Git repository
- The .git directory and its contents
- Working directory, staging area, and repository
- Git objects: blobs, trees, commits, and tags
- The Git index (staging area)
- HEAD pointer and branch references
- Understanding Git's internal structure
- Repository initialization and cloning`,

    "Basic Git Commands - Getting Started": `
- git init: Creating a new repository
- git status: Checking repository status
- git add: Adding files to staging area
- git commit: Creating commits
- git log: Viewing commit history
- git diff: Comparing changes
- git show: Viewing specific commits
- Common Git command patterns`,

    "Working with Files and the Staging Area": `
- Understanding the three states of files
- Adding files to staging area (git add)
- Removing files from staging area
- Ignoring files with .gitignore
- Staging partial changes (git add -p)
- Unstaging changes (git reset)
- Viewing staged vs unstaged changes
- Best practices for staging changes`,

    "Creating and Managing Commits": `
- Writing meaningful commit messages
- Commit message best practices
- Amending commits (git commit --amend)
- Understanding commit hashes
- Viewing commit details (git show)
- Commit history navigation
- Squashing multiple commits
- Commit message templates`,

    "Understanding Git Branches": `
- What are branches in Git
- Why branches are important
- Creating and switching branches
- Listing and deleting branches
- Understanding branch pointers
- Branch naming conventions
- Remote vs local branches
- Branch visualization and history`,

    "Branching and Merging Strategies": `
- Creating feature branches
- Switching between branches
- Merging branches (fast-forward vs merge commits)
- Resolving merge conflicts
- Branch protection and policies
- Git flow and GitHub flow
- Branch naming strategies
- Best practices for branching`,

    "Working with Remote Repositories": `
- Understanding remote repositories
- Adding remote repositories (git remote add)
- Fetching from remote repositories
- Pushing to remote repositories
- Pulling changes from remote
- Remote repository management
- Understanding upstream and downstream
- Remote repository best practices`,

    "GitHub and Git Hosting Platforms": `
- Introduction to GitHub, GitLab, and Bitbucket
- Creating repositories on GitHub
- Cloning repositories from GitHub
- Forking repositories
- Understanding pull requests and merge requests
- GitHub features: Issues, Projects, Actions
- Repository visibility and permissions
- Choosing the right Git hosting platform`,

    "Collaborative Git Workflows": `
- Understanding collaborative workflows
- Feature branch workflow
- Git flow methodology
- GitHub flow methodology
- Fork and pull request workflow
- Code review best practices
- Managing team permissions
- Conflict resolution in teams`,

    "Advanced Git Commands": `
- git stash: Temporarily saving changes
- git cherry-pick: Applying specific commits
- git rebase: Rewriting commit history
- git bisect: Finding problematic commits
- git reflog: Recovering lost commits
- git blame: Finding who changed what
- git submodule: Managing subprojects
- Advanced Git techniques`,

    "Resolving Conflicts and Git Issues": `
- Understanding merge conflicts
- Identifying conflict markers
- Resolving conflicts manually
- Using merge tools for conflicts
- Preventing conflicts with good practices
- Recovering from bad merges
- Undoing problematic commits
- Git troubleshooting techniques`,

    "Git Hooks and Automation": `
- Understanding Git hooks
- Pre-commit and post-commit hooks
- Pre-push hooks for validation
- Server-side hooks
- Setting up automated workflows
- Integrating with CI/CD pipelines
- Custom Git commands and scripts
- Automating Git workflows`,

    "Git Best Practices and Workflow": `
- Commit message conventions
- Branch naming strategies
- Code review processes
- Release management with Git
- Tagging releases and versions
- Git workflow optimization
- Team collaboration best practices
- Security considerations in Git`,

    "Git Security and Authentication": `
- SSH vs HTTPS authentication
- Setting up SSH keys
- GPG signing for commits
- Repository access control
- Secure credential storage
- Two-factor authentication
- Security best practices
- Protecting sensitive information`,

    "Git Performance and Optimization": `
- Repository size optimization
- Git garbage collection
- Shallow clones and partial clones
- Git LFS for large files
- Performance monitoring
- Optimizing Git operations
- Network optimization
- Storage optimization techniques`,

    "Git Integration with Development Tools": `
- Git integration in IDEs
- Command line tools and aliases
- Git GUI tools
- Continuous integration with Git
- Automated testing with Git hooks
- Git in DevOps workflows
- Monitoring and analytics
- Development environment setup`,

    "Advanced Git Concepts": `
- Git internals and object model
- Understanding Git references
- Git packfiles and compression
- Git protocols and networking
- Custom Git commands
- Git plugins and extensions
- Advanced branching strategies
- Git in enterprise environments`,

    "Troubleshooting and Git Recovery": `
- Common Git problems and solutions
- Recovering lost commits
- Fixing corrupted repositories
- Undoing destructive operations
- Git reflog and recovery techniques
- Backup and restore strategies
- Emergency Git procedures
- Professional Git troubleshooting`,

    "Git in Different Development Environments": `
- Git in web development
- Git in mobile app development
- Git in data science projects
- Git in DevOps and infrastructure
- Git in open source projects
- Git in enterprise environments
- Platform-specific Git considerations
- Cross-platform Git workflows`,

    "Git Workflow Optimization": `
- Streamlining Git operations
- Custom Git configurations
- Git aliases and shortcuts
- Automated Git workflows
- Team workflow optimization
- Git performance tuning
- Workflow monitoring and metrics
- Continuous improvement strategies`,

    "Git and Modern Development Practices": `
- Git in Agile development
- Git in DevOps and CI/CD
- Git in microservices architecture
- Git in containerized environments
- Git in cloud development
- Modern Git hosting features
- Git in distributed teams
- Future of version control`,

    "Project: Building a Git Workflow": `
- Setting up a complete Git workflow
- Implementing branching strategies
- Setting up automated workflows
- Creating team collaboration guidelines
- Implementing code review processes
- Setting up continuous integration
- Monitoring and optimization
- Documentation and training`,

    "Git Certification and Career Development": `
- Git certification paths
- Building a Git portfolio
- Git skills for different roles
- Git in job interviews
- Contributing to open source
- Git community involvement
- Career advancement with Git skills
- Staying updated with Git developments`
  };

  return concepts[lessonTitle] || "Git concepts and best practices for version control";
};

const getGitCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to Git and Version Control": `
// Example 1: Check Git installation and version
git --version

// Example 2: Initialize a new Git repository
git init

// Example 3: Check repository status
git status

// Example 4: View Git configuration
git config --list

// Example 5: Set up user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"`,

    "Installing and Configuring Git": `
// Example 1: Install Git on Ubuntu/Debian
sudo apt update
sudo apt install git

// Example 2: Install Git on macOS with Homebrew
brew install git

// Example 3: Install Git on Windows
# Download from https://git-scm.com/download/win

// Example 4: Configure Git globally
git config --global user.name "John Doe"
git config --global user.email "john@example.com"
git config --global init.defaultBranch main

// Example 5: Configure Git editor
git config --global core.editor "code --wait"

// Example 6: Set up Git aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit`,

    "Understanding Git Repository Structure": `// Example 1: Initialize a new repository
git init my-project
cd my-project

// Example 2: View repository structure
ls -la .git/

// Example 3: Check repository status
git status

// Example 4: View Git objects
find .git/objects -type f

// Example 5: View HEAD reference
cat .git/HEAD

// Example 6: View branch references
ls .git/refs/heads/

// Example 7: View remote configuration
cat .git/config

// Example 8: Explore Git objects
git cat-file -t HEAD
git cat-file -p HEAD

// Example 9: View commit history structure
git log --oneline --graph --all`,

    "Basic Git Commands - Getting Started": `// Example 1: Create a new file
echo "# My Project" > README.md

// Example 2: Check repository status
git status

// Example 3: Add file to staging area
git add README.md

// Example 4: Check status after staging
git status

// Example 5: Create first commit
git commit -m "Initial commit: Add README"

// Example 6: View commit history
git log --oneline

// Example 7: View file differences
git diff

// Example 8: View specific commit details
git show HEAD`,

    "Working with Files and the Staging Area": `
// Example 1: Create multiple files
echo "console.log('Hello World');" > script.js
echo "body { color: blue; }" > style.css

// Example 2: Add all files to staging
git add .

// Example 3: Check staging status
git status

// Example 4: Add specific file
git add script.js

// Example 5: Add files with pattern
git add *.js

// Example 6: Interactive staging
git add -i

// Example 7: Unstage a file
git reset HEAD script.js

// Example 8: View staged changes
git diff --cached

// Example 9: View unstaged changes
git diff`,

    "Creating and Managing Commits": `
// Example 1: Create a meaningful commit with detailed message
git add .
git commit -m "Add JavaScript functionality and CSS styling

- Implemented basic JavaScript console output
- Added CSS styling for body element
- Updated project structure"

// Example 2: Amend the last commit
git commit --amend -m "Updated commit message"

// Example 3: View commit history with graph
git log --oneline --graph

// Example 4: View specific commit details
git show HEAD~1

// Example 5: Create commit with multiple files
git add file1.txt file2.txt
git commit -m "Add multiple files at once"

// Example 6: View commit history with more details
git log --oneline --graph --all

// Example 7: View commit statistics
git show --stat HEAD

// Example 8: Create commit without opening editor
git commit -m "Quick commit message"`,

    "Understanding Git Branches": `
// Example 1: List all local branches
git branch

// Example 2: Create a new branch
git branch feature-login

// Example 3: Switch to existing branch
git checkout feature-login

// Example 4: Create and switch to new branch in one command
git checkout -b feature-dashboard

// Example 5: List all branches including remote
git branch -a

// Example 6: Delete a branch safely
git branch -d feature-login

// Example 7: Force delete a branch
git branch -D feature-login

// Example 8: View branch information with last commit
git branch -v

// Example 9: Rename current branch
git branch -m new-branch-name`,

    "Branching and Merging Strategies": `// Example 1: Create feature branch
git checkout -b feature/user-authentication

// Example 2: Make changes and commit
echo "function login() { return true; }" > auth.js
git add auth.js
git commit -m "Add user authentication function"

// Example 3: Switch back to main branch
git checkout main

// Example 4: Merge feature branch
git merge feature/user-authentication

// Example 5: Delete merged branch
git branch -d feature/user-authentication

// Example 6: Resolve merge conflicts
# Edit conflicted files, then:
git add resolved-file.txt
git commit -m "Resolve merge conflicts"

// Example 7: Fast-forward merge
git merge --ff-only feature-branch

// Example 8: No-fast-forward merge
git merge --no-ff feature-branch

// Example 9: Abort merge if needed
git merge --abort`,

    "Working with Remote Repositories": `
// Example 1: Add remote repository
git remote add origin https://github.com/username/repo.git

// Example 2: List all remotes
git remote -v

// Example 3: Fetch changes from remote
git fetch origin

// Example 4: Pull changes from remote
git pull origin main

// Example 5: Push changes to remote
git push origin main

// Example 6: Push new branch to remote
git push -u origin feature-branch

// Example 7: Remove remote
git remote remove origin

// Example 8: Update remote URL
git remote set-url origin https://github.com/username/new-repo.git

// Example 9: Fetch from specific remote
git fetch origin main`,

    "GitHub and Git Hosting Platforms": `
// Example 1: Clone repository from GitHub
git clone https://github.com/username/repository.git

// Example 2: Clone specific branch
git clone -b develop https://github.com/username/repository.git

// Example 3: Fork workflow - add upstream
git remote add upstream https://github.com/original/repository.git

// Example 4: Fetch from upstream
git fetch upstream

// Example 5: Merge upstream changes
git merge upstream/main

// Example 6: Push to your fork
git push origin main

// Example 7: Create pull request with GitHub CLI
gh pr create --title "Feature: Add new functionality"

// Example 8: List pull requests
gh pr list

// Example 9: Check out pull request locally
gh pr checkout 123`,

    "Collaborative Git Workflows": `
// Example 1: Feature branch workflow
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Implement new feature"
git push origin feature/new-feature
# Create pull request

// Example 2: Git flow workflow - create develop branch
git checkout -b develop
git push origin develop

// Example 3: Git flow - create feature branch
git checkout -b feature/user-login
# Work on feature
git add .
git commit -m "Add user login functionality"

// Example 4: Git flow - merge feature to develop
git checkout develop
git merge --no-ff feature/user-login

// Example 5: GitHub flow - create feature branch
git checkout -b feature-branch
# Make changes
git add .
git commit -m "Add feature"

// Example 6: GitHub flow - push and create PR
git push origin feature-branch
# Create pull request and merge

// Example 7: Fork workflow - fork repository
# Fork on GitHub web interface

// Example 8: Fork workflow - clone your fork
git clone https://github.com/yourusername/repository.git

// Example 9: Fork workflow - add upstream
git remote add upstream https://github.com/original/repository.git`,

    "Advanced Git Commands": `
// Example 1: Stash changes temporarily
git stash
git stash push -m "Work in progress"

// Example 2: List all stashes
git stash list

// Example 3: Apply stash without removing it
git stash apply

// Example 4: Apply and remove stash
git stash pop

// Example 5: Cherry-pick specific commit
git cherry-pick <commit-hash>

// Example 6: Interactive rebase
git rebase -i HEAD~3

// Example 7: Find problematic commit with bisect
git bisect start
git bisect bad HEAD
git bisect good <known-good-commit>

// Example 8: View reflog for recovery
git reflog

// Example 9: Blame file to see who changed what
git blame filename.txt

// Example 10: Show file history
git log --follow filename.txt

// Example 11: Stash specific files
git stash push -m "Stash specific files" file1.txt file2.txt

// Example 12: Apply specific stash
git stash apply stash@{2}

// Example 13: Drop stash
git stash drop stash@{1}

// Example 14: Show stash contents
git stash show -p stash@{0}

// Example 15: Interactive add
git add -i`,

    "Resolving Conflicts and Git Issues": `
// Example 1: Merge conflict resolution
git merge feature-branch
# Edit conflicted files
# Remove conflict markers: <<<<<<< ======= >>>>>>>
# Stage resolved files
git add resolved-file.txt
git commit -m "Resolve merge conflicts"

// Example 2: Abort merge operation
git merge --abort

// Example 3: Undo last commit (keep changes)
git reset --soft HEAD~1

// Example 4: Undo last commit (discard changes)
git reset --hard HEAD~1

// Example 5: Revert a commit safely
git revert <commit-hash>

// Example 6: Check merge status
git status

// Example 7: View conflict markers
git diff

// Example 8: Use merge tool
git mergetool

// Example 9: Continue after resolving conflicts
git add .
git commit -m "Resolve conflicts"`,

    "Git Hooks and Automation": `// Example 1: Pre-commit hook example
#!/bin/sh
# .git/hooks/pre-commit
npm test
if [ $? -ne 0 ]; then
    echo "Tests failed. Commit aborted."
    exit 1
fi

// Example 2: Post-commit hook example
#!/bin/sh
# .git/hooks/post-commit
echo "Commit $(git rev-parse HEAD) created successfully"

// Example 3: Pre-push hook
#!/bin/sh
# .git/hooks/pre-push
npm run lint
npm test

// Example 4: Commit message hook
#!/bin/sh
# .git/hooks/commit-msg
commit_regex='^(feat|fix|docs|style|refactor|test|chore)(\(.+\))?: .{1,50}'
if ! grep -qE "$commit_regex" "$1"; then
    echo "Invalid commit message format!"
    exit 1
fi

// Example 5: Post-merge hook
#!/bin/sh
# .git/hooks/post-merge
echo "Running post-merge tasks..."
npm install
npm run build

// Example 6: Pre-rebase hook
#!/bin/sh
# .git/hooks/pre-rebase
echo "Warning: You are about to rebase!"
read -p "Are you sure? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 1
fi

// Example 7: Make hook executable
chmod +x .git/hooks/pre-commit

// Example 8: Install hooks from template
git config --global init.templatedir ~/.git-templates
cp hooks/* ~/.git-templates/hooks/

// Example 9: Skip hooks temporarily
git commit --no-verify -m "Emergency commit"`,

    "Git Best Practices and Workflow": `// Example 1: Good commit message format
git commit -m "feat: add user authentication

- Implement login functionality
- Add password validation
- Create user session management

Closes #123"

// Example 2: Branch naming convention
git checkout -b feature/user-authentication
git checkout -b bugfix/fix-login-error
git checkout -b hotfix/security-patch

// Example 3: Tag a release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

// Example 4: Create annotated tag
git tag -a v1.0.0 -m "Version 1.0.0 release"

// Example 5: Small, focused commits
git add src/auth.js
git commit -m "feat: implement user login validation"

// Example 6: Regular commits
git add .
git commit -m "docs: update API documentation"

// Example 7: Code review workflow
git push origin feature-branch
# Create pull request for review

// Example 8: Clean commit history
git rebase -i HEAD~3

// Example 9: Meaningful branch names
git checkout -b feature/add-payment-gateway
git checkout -b bugfix/fix-memory-leak`,

    "Git Security and Authentication": `// Example 1: Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

// Example 2: Add SSH key to ssh-agent
ssh-add ~/.ssh/id_ed25519

// Example 3: Test SSH connection
ssh -T git@github.com

// Example 4: Configure GPG signing
git config --global user.signingkey <GPG-KEY-ID>
git config --global commit.gpgsign true

// Example 5: Sign commits
git commit -S -m "Signed commit message"

// Example 6: Verify signed commits
git log --show-signature

// Example 7: Generate GPG key
gpg --full-generate-key

// Example 8: List GPG keys
gpg --list-secret-keys --keyid-format LONG

// Example 9: Configure credential storage
git config --global credential.helper store

// Example 10: Use HTTPS with token
git remote set-url origin https://username:token@github.com/user/repo.git`,

    "Git Performance and Optimization": `// Example 1: Clean up repository
git gc --aggressive --prune=now

// Example 2: Shallow clone
git clone --depth 1 https://github.com/user/repo.git

// Example 3: Partial clone
git clone --filter=blob:none https://github.com/user/repo.git

// Example 4: Configure Git LFS
git lfs install
git lfs track "*.psd"
git lfs track "*.zip"

// Example 5: Optimize repository
git repack -a -d --depth=250 --window=250

// Example 6: Check repository size
du -sh .git/

// Example 7: Configure Git for performance
git config --global core.preloadindex true
git config --global core.fscache true

// Example 8: Optimize pack files
git gc --prune=now --aggressive

// Example 9: Remove unused objects
git prune --expire=now

// Example 10: Check repository health
git fsck --full`,

    "Git Integration with Development Tools": `// Example 1: VS Code Git integration
# Install GitLens extension
# Configure Git settings in VS Code

// Example 2: Git aliases for efficiency
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

// Example 3: Custom Git commands
# Create a script: git-feature
#!/bin/bash
git checkout -b feature/$1
git push -u origin feature/$1

// Example 4: Enhanced Git aliases
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.st "status --short --branch"
git config --global alias.unstage "reset HEAD --"
git config --global alias.undo "reset --soft HEAD~1"

// Example 5: IDE Git configuration
git config --global core.editor "code --wait"
git config --global merge.tool "vscode"
git config --global diff.tool "vscode"

// Example 6: Git hooks integration
git config --global init.templatedir ~/.git-templates
mkdir -p ~/.git-templates/hooks

// Example 7: Command line enhancements
git config --global color.ui auto
git config --global core.pager "less -R"
git config --global core.quotepath false

// Example 8: Useful Git aliases for daily use
git config --global alias.amend "commit --amend --no-edit"
git config --global alias.wip "commit -am 'WIP'"
git config --global alias.unwip "reset HEAD~1"

// Example 9: Branch management aliases
git config --global alias.branches "branch -a"
git config --global alias.remotes "remote -v"
git config --global alias.delete-branch "branch -d"`,

    "Advanced Git Concepts": `// Example 1: View Git objects
git cat-file -t <object-hash>
git cat-file -p <object-hash>

// Example 2: Create a tag object
git tag -a v1.0.0 -m "Version 1.0.0"

// Example 3: View Git references
git show-ref

// Example 4: Create a custom Git command
# Create file: git-hello
#!/bin/bash
echo "Hello from custom Git command!"

// Example 5: Make it executable and add to PATH
chmod +x git-hello
# Now you can use: git hello

// Example 6: Explore Git internals
git ls-tree HEAD
git cat-file -s HEAD
git ls-files --stage

// Example 7: Understand Git objects
git hash-object -w file.txt
git cat-file -t <hash>
git cat-file -p <hash>

// Example 8: View pack files
ls .git/objects/pack/
git verify-pack .git/objects/pack/pack-*.idx

// Example 9: Create lightweight tag
git tag v1.0.0

// Example 10: View tag information
git show v1.0.0
git tag -l

// Example 11: Understand Git refs
cat .git/HEAD
cat .git/refs/heads/main
git symbolic-ref HEAD

// Example 12: Explore Git configuration
git config --list --show-origin
git config --local --list`,

    "Troubleshooting and Git Recovery": `// Example 1: Recover lost commits
git reflog
git checkout <commit-hash>

// Example 2: Reset to previous state
git reset --hard HEAD~1

// Example 3: Recover deleted branch
git reflog --all
git checkout -b recovered-branch <commit-hash>

// Example 4: Fix corrupted repository
git fsck --full
git gc --prune=now

// Example 5: Recover from bad merge
git reset --hard ORIG_HEAD

// Example 6: Undo last push
git reset --hard HEAD~1
git push --force-with-lease origin main

// Example 7: Find lost commits
git log --oneline --all --graph
git reflog --grep="commit message"

// Example 8: Recover from accidental reset
git reflog
git reset --hard HEAD@{1}

// Example 9: Fix detached HEAD state
git checkout main
git checkout -b new-branch

// Example 10: Recover deleted files
git checkout HEAD -- deleted-file.txt
git checkout <commit-hash> -- deleted-file.txt

// Example 11: Undo merge commit
git reset --hard HEAD~1
git reset --hard ORIG_HEAD

// Example 12: Recover from force push
git reflog
git checkout <last-known-good-commit>
git checkout -b recovery-branch`,

    "Git in Different Development Environments": `// Example 1: Web development workflow
git checkout -b feature/responsive-design
# Make changes to CSS/HTML/JS
git add .
git commit -m "Implement responsive design"
git push origin feature/responsive-design

// Example 2: Mobile app development
git checkout -b feature/push-notifications
# Add mobile-specific files
git add ios/ android/
git commit -m "Add push notification support"

// Example 3: Data science project
git lfs track "*.csv"
git lfs track "*.pkl"
git add data/ models/
git commit -m "Add dataset and trained model"

// Example 4: DevOps infrastructure
git checkout -b feature/kubernetes-deployment
git add k8s/ docker/
git commit -m "Add Kubernetes deployment configs"

// Example 5: Microservices architecture
git checkout -b feature/user-service
git add services/user/
git commit -m "Implement user service"

// Example 6: Frontend framework project
git checkout -b feature/react-components
git add src/components/
git commit -m "Add reusable React components"

// Example 7: Backend API development
git checkout -b feature/api-endpoints
git add api/ routes/
git commit -m "Add new API endpoints"

// Example 8: Documentation project
git checkout -b feature/api-docs
git add docs/ README.md
git commit -m "Update API documentation"

// Example 9: Configuration management
git checkout -b feature/config-updates
git add config/ .env.example
git commit -m "Update configuration files"`,

    "Git Workflow Optimization": `// Example 1: Optimize Git configuration
git config --global core.preloadindex true
git config --global core.fscache true
git config --global gc.auto 256

// Example 2: Create useful aliases
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.st "status --short --branch"
git config --global alias.unstage "reset HEAD --"

// Example 3: Automated workflow script
#!/bin/bash
# git-workflow.sh
git add .
git commit -m "$1"
git push origin $(git branch --show-current)

// Example 4: Performance optimization
git config --global core.compression 0
git config --global core.loosecompression 0
git config --global pack.windowMemory "256m"

// Example 5: Memory management
git config --global pack.packSizeLimit "2g"
git config --global pack.threads 0
git config --global gc.autoDetach true

// Example 6: Network optimization
git config --global http.postBuffer 524288000
git config --global http.maxRequestBuffer 100M
git config --global core.compression 9

// Example 7: Workflow automation
git config --global pull.rebase false
git config --global rebase.autoStash true
git config --global maintenance.auto true

// Example 8: Repository maintenance
git gc --aggressive
git prune
git repack -ad

// Example 9: Custom workflow commands
#!/bin/bash
# Quick feature workflow
git checkout -b feature/$1
git push -u origin feature/$1`,

    "Git and Modern Development Practices": `// Example 1: CI/CD integration
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test

// Example 2: Docker integration
# Dockerfile
FROM node:14
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]

// Example 3: Git in microservices
git submodule add https://github.com/user/shared-library.git
git submodule update --init --recursive

// Example 4: Code review automation
# .github/pull_request_template.md
## Description
Brief description of changes

## Testing
- [ ] Tests pass
- [ ] Manual testing completed

// Example 5: Automated dependency updates
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"

// Example 6: Security scanning
# .github/workflows/security.yml
name: Security Scan
on: [push, pull_request]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run security scan
        run: npm audit

// Example 7: Code quality checks
# .github/workflows/quality.yml
name: Code Quality
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run linting
        run: npm run lint
      - name: Run tests
        run: npm test

// Example 8: Automated documentation
# .github/workflows/docs.yml
name: Documentation
on: [push]
jobs:
  docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate docs
        run: npm run docs

// Example 9: Environment-specific deployments
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to staging
        run: npm run deploy:staging`,

    "Project: Building a Git Workflow": `// Example 1: Complete project setup
git init my-awesome-project
cd my-awesome-project

// Example 2: Create project structure
mkdir src tests docs
touch README.md .gitignore

// Example 3: Initial commit
git add .
git commit -m "Initial project setup"

// Example 4: Create development workflow
git checkout -b develop
git checkout -b feature/user-authentication

// Example 5: Work on feature
echo "// Authentication logic" > src/auth.js
git add src/auth.js
git commit -m "feat: implement user authentication"

// Example 6: Merge back to develop
git checkout develop
git merge --no-ff feature/user-authentication

// Example 7: Create release
git checkout -b release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

// Example 8: Set up remote repository
git remote add origin https://github.com/user/my-awesome-project.git
git push -u origin main
git push -u origin develop

// Example 9: Team collaboration setup
git config --global pull.rebase false
git config --global branch.autosetupmerge always
git config --global core.editor "code --wait"

// Example 10: Automated workflow with hooks
# .git/hooks/pre-commit
#!/bin/bash
npm run lint
npm run test

// Example 11: CI/CD integration
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test`,

    "Git Certification and Career Development": `// Example 1: Build a Git portfolio
# Create a GitHub profile
# Contribute to open source projects
# Document your Git skills

// Example 2: Practice Git commands daily
git log --oneline --graph --all
git rebase -i HEAD~3
git cherry-pick <commit-hash>

// Example 3: Create a Git cheat sheet
# Document common workflows
# Share knowledge with team

// Example 4: Stay updated with Git developments
git --version
# Follow Git release notes
# Learn new Git features

// Example 5: Contribute to open source
git clone https://github.com/torvalds/linux.git
git checkout -b feature/my-contribution
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin feature/my-contribution

// Example 6: Build a professional GitHub profile
# Create README.md with Git skills
# Showcase projects with good commit history
# Write technical blog posts about Git

// Example 7: Git certification preparation
# Study Git Pro book
# Practice with Git exercises
# Take online Git courses

// Example 8: Advanced Git skills demonstration
git rebase --interactive HEAD~5
git filter-branch --tree-filter 'rm -f password.txt' HEAD
git bisect start
git bisect bad
git bisect good HEAD~10

// Example 9: Career advancement with Git
# Lead Git training sessions
# Mentor junior developers
# Write Git best practices documentation

// Example 10: Stay updated with Git developments
# Follow Git mailing list
# Attend Git conferences
# Contribute to Git documentation`,

    "Git Security and Authentication": `// Example 1: Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

// Example 2: Add SSH key to ssh-agent
ssh-add ~/.ssh/id_ed25519

// Example 3: Test SSH connection
ssh -T git@github.com

// Example 4: Configure GPG signing
git config --global user.signingkey <GPG-KEY-ID>
git config --global commit.gpgsign true

// Example 5: Sign commits
git commit -S -m "Signed commit message"

// Example 6: Verify signed commits
git log --show-signature

// Example 7: Generate GPG key
gpg --full-generate-key

// Example 8: List GPG keys
gpg --list-secret-keys --keyid-format LONG

// Example 9: Configure credential storage
git config --global credential.helper store

// Example 10: Use HTTPS with token
git remote set-url origin https://username:token@github.com/user/repo.git`,

    "Git Performance and Optimization": `// Example 1: Clean up repository
git gc --aggressive --prune=now

// Example 2: Shallow clone
git clone --depth 1 https://github.com/user/repo.git

// Example 3: Partial clone
git clone --filter=blob:none https://github.com/user/repo.git

// Example 4: Configure Git LFS
git lfs install
git lfs track "*.psd"
git lfs track "*.zip"

// Example 5: Optimize repository
git repack -a -d --depth=250 --window=250

// Example 6: Check repository size
du -sh .git/

// Example 7: Configure Git for performance
git config --global core.preloadindex true
git config --global core.fscache true

// Example 8: Optimize pack files
git gc --prune=now --aggressive

// Example 9: Remove unused objects
git prune --expire=now

// Example 10: Check repository health
git fsck --full`,

    "Git Integration with Development Tools": `// Example 1: VS Code Git integration
# Install GitLens extension
# Configure Git settings in VS Code

// Example 2: Git aliases for efficiency
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'

// Example 3: Custom Git commands
# Create a script: git-feature
#!/bin/bash
git checkout -b feature/$1
git push -u origin feature/$1

// Example 4: Enhanced Git aliases
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.st "status --short --branch"
git config --global alias.unstage "reset HEAD --"
git config --global alias.undo "reset --soft HEAD~1"

// Example 5: IDE Git configuration
git config --global core.editor "code --wait"
git config --global merge.tool "vscode"
git config --global diff.tool "vscode"

// Example 6: Git hooks integration
git config --global init.templatedir ~/.git-templates
mkdir -p ~/.git-templates/hooks

// Example 7: Command line enhancements
git config --global color.ui auto
git config --global core.pager "less -R"
git config --global core.quotepath false

// Example 8: Useful Git aliases for daily use
git config --global alias.amend "commit --amend --no-edit"
git config --global alias.wip "commit -am 'WIP'"
git config --global alias.unwip "reset HEAD~1"

// Example 9: Branch management aliases
git config --global alias.branches "branch -a"
git config --global alias.remotes "remote -v"
git config --global alias.delete-branch "branch -d"`,

    "Advanced Git Concepts": `// Example 1: View Git objects
git cat-file -t <object-hash>
git cat-file -p <object-hash>

// Example 2: Create a tag object
git tag -a v1.0.0 -m "Version 1.0.0"

// Example 3: View Git references
git show-ref

// Example 4: Create a custom Git command
# Create file: git-hello
#!/bin/bash
echo "Hello from custom Git command!"

// Example 5: Make it executable and add to PATH
chmod +x git-hello
# Now you can use: git hello

// Example 6: Explore Git internals
git ls-tree HEAD
git cat-file -s HEAD
git ls-files --stage

// Example 7: Understand Git objects
git hash-object -w file.txt
git cat-file -t <hash>
git cat-file -p <hash>

// Example 8: View pack files
ls .git/objects/pack/
git verify-pack .git/objects/pack/pack-*.idx

// Example 9: Create lightweight tag
git tag v1.0.0

// Example 10: View tag information
git show v1.0.0
git tag -l

// Example 11: Understand Git refs
cat .git/HEAD
cat .git/refs/heads/main
git symbolic-ref HEAD

// Example 12: Explore Git configuration
git config --list --show-origin
git config --local --list`,

    "Troubleshooting and Git Recovery": `// Example 1: Recover lost commits
git reflog
git checkout <commit-hash>

// Example 2: Reset to previous state
git reset --hard HEAD~1

// Example 3: Recover deleted branch
git reflog --all
git checkout -b recovered-branch <commit-hash>

// Example 4: Fix corrupted repository
git fsck --full
git gc --prune=now

// Example 5: Recover from bad merge
git reset --hard ORIG_HEAD

// Example 6: Undo last push
git reset --hard HEAD~1
git push --force-with-lease origin main

// Example 7: Find lost commits
git log --oneline --all --graph
git reflog --grep="commit message"

// Example 8: Recover from accidental reset
git reflog
git reset --hard HEAD@{1}

// Example 9: Fix detached HEAD state
git checkout main
git checkout -b new-branch

// Example 10: Recover deleted files
git checkout HEAD -- deleted-file.txt
git checkout <commit-hash> -- deleted-file.txt

// Example 11: Undo merge commit
git reset --hard HEAD~1
git reset --hard ORIG_HEAD

// Example 12: Recover from force push
git reflog
git checkout <last-known-good-commit>
git checkout -b recovery-branch`,

    "Git in Different Development Environments": `// Example 1: Web development workflow
git checkout -b feature/responsive-design
# Make changes to CSS/HTML/JS
git add .
git commit -m "Implement responsive design"
git push origin feature/responsive-design

// Example 2: Mobile app development
git checkout -b feature/push-notifications
# Add mobile-specific files
git add ios/ android/
git commit -m "Add push notification support"

// Example 3: Data science project
git lfs track "*.csv"
git lfs track "*.pkl"
git add data/ models/
git commit -m "Add dataset and trained model"

// Example 4: DevOps infrastructure
git checkout -b feature/kubernetes-deployment
git add k8s/ docker/
git commit -m "Add Kubernetes deployment configs"

// Example 5: Microservices architecture
git checkout -b feature/user-service
git add services/user/
git commit -m "Implement user service"

// Example 6: Frontend framework project
git checkout -b feature/react-components
git add src/components/
git commit -m "Add reusable React components"

// Example 7: Backend API development
git checkout -b feature/api-endpoints
git add api/ routes/
git commit -m "Add new API endpoints"

// Example 8: Documentation project
git checkout -b feature/api-docs
git add docs/ README.md
git commit -m "Update API documentation"

// Example 9: Configuration management
git checkout -b feature/config-updates
git add config/ .env.example
git commit -m "Update configuration files"`,

    "Git Workflow Optimization": `// Example 1: Optimize Git configuration
git config --global core.preloadindex true
git config --global core.fscache true
git config --global gc.auto 256

// Example 2: Create useful aliases
git config --global alias.lg "log --oneline --graph --decorate --all"
git config --global alias.st "status --short --branch"
git config --global alias.unstage "reset HEAD --"

// Example 3: Automated workflow script
#!/bin/bash
# git-workflow.sh
git add .
git commit -m "$1"
git push origin $(git branch --show-current)

// Example 4: Performance optimization
git config --global core.compression 0
git config --global core.loosecompression 0
git config --global pack.windowMemory "256m"

// Example 5: Memory management
git config --global pack.packSizeLimit "2g"
git config --global pack.threads 0
git config --global gc.autoDetach true

// Example 6: Network optimization
git config --global http.postBuffer 524288000
git config --global http.maxRequestBuffer 100M
git config --global core.compression 9

// Example 7: Workflow automation
git config --global pull.rebase false
git config --global rebase.autoStash true
git config --global maintenance.auto true

// Example 8: Repository maintenance
git gc --aggressive
git prune
git repack -ad

// Example 9: Custom workflow commands
#!/bin/bash
# Quick feature workflow
git checkout -b feature/$1
git push -u origin feature/$1`,

    "Git and Modern Development Practices": `// Example 1: CI/CD integration
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test

// Example 2: Docker integration
# Dockerfile
FROM node:14
COPY . /app
WORKDIR /app
RUN npm install
CMD ["npm", "start"]

// Example 3: Git in microservices
git submodule add https://github.com/user/shared-library.git
git submodule update --init --recursive

// Example 4: Code review automation
# .github/pull_request_template.md
## Description
Brief description of changes

## Testing
- [ ] Tests pass
- [ ] Manual testing completed

// Example 5: Automated dependency updates
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"

// Example 6: Security scanning
# .github/workflows/security.yml
name: Security Scan
on: [push, pull_request]
jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run security scan
        run: npm audit

// Example 7: Code quality checks
# .github/workflows/quality.yml
name: Code Quality
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run linting
        run: npm run lint
      - name: Run tests
        run: npm test

// Example 8: Automated documentation
# .github/workflows/docs.yml
name: Documentation
on: [push]
jobs:
  docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Generate docs
        run: npm run docs

// Example 9: Environment-specific deployments
# .github/workflows/deploy.yml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to staging
        run: npm run deploy:staging`,

    "Project: Building a Git Workflow": `// Example 1: Complete project setup
git init my-awesome-project
cd my-awesome-project

// Example 2: Create project structure
mkdir src tests docs
touch README.md .gitignore

// Example 3: Initial commit
git add .
git commit -m "Initial project setup"

// Example 4: Create development workflow
git checkout -b develop
git checkout -b feature/user-authentication

// Example 5: Work on feature
echo "// Authentication logic" > src/auth.js
git add src/auth.js
git commit -m "feat: implement user authentication"

// Example 6: Merge back to develop
git checkout develop
git merge --no-ff feature/user-authentication

// Example 7: Create release
git checkout -b release/v1.0.0
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

// Example 8: Set up remote repository
git remote add origin https://github.com/user/my-awesome-project.git
git push -u origin main
git push -u origin develop

// Example 9: Team collaboration setup
git config --global pull.rebase false
git config --global branch.autosetupmerge always
git config --global core.editor "code --wait"

// Example 10: Automated workflow with hooks
# .git/hooks/pre-commit
#!/bin/bash
npm run lint
npm run test

// Example 11: CI/CD integration
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Run tests
        run: npm test`,

    "Git Certification and Career Development": `# Build a Git portfolio
# Create a GitHub profile
# Contribute to open source projects
# Document your Git skills

# Practice Git commands daily
git log --oneline --graph --all
git rebase -i HEAD~3
git cherry-pick <commit-hash>

# Create a Git cheat sheet
# Document common workflows
# Share knowledge with team

# Stay updated with Git developments
git --version
# Follow Git release notes
# Learn new Git features`
  };

  return examples[lessonTitle] || `# Git command example
git status
git add .
git commit -m "Your commit message"
git push origin main`;
};

const getGitCodeExplanation = (lessonTitle) => {
  const explanations = {
    "Introduction to Git and Version Control": `
### Example 1
\`git --version\` checks if Git is installed on your system and displays the current version. This is the first command you should run to verify Git installation.

### Example 2
\`git init\` creates a new Git repository in the current directory. This initializes the repository and creates a hidden .git folder that contains all version control information.

### Example 3
\`git status\` shows the current state of your working directory, including which files are tracked, untracked, staged, or modified. This is one of the most frequently used Git commands.

### Example 4
\`git config --list\` displays all Git configuration settings. This helps you see your current Git setup and identify any configuration issues.

### Example 5
\`git config --global\` sets up your identity for commits. The --global flag applies these settings to all repositories on your system. This information is attached to every commit you make.`,

    "Installing and Configuring Git": `
### Example 1
Git installation on Ubuntu/Debian systems using the apt package manager. The update command refreshes the package list, and install downloads and sets up Git.

### Example 2
Git installation on macOS using Homebrew, a popular package manager for macOS. Homebrew simplifies software installation on Mac systems.

### Example 3
For Windows users, Git can be downloaded from the official website. The installer provides a complete Git environment including Git Bash.

### Example 4
Global Git configuration sets your identity across all repositories. The user.name and user.email are attached to every commit you make, and init.defaultBranch sets the default branch name.

### Example 5
Configuring your preferred text editor for commit messages. VS Code with the --wait flag ensures the commit process waits for you to finish editing the message.

### Example 6
Git aliases create shortcuts for commonly used commands. This improves productivity by reducing typing and making commands more memorable.`,

    "Understanding Git Repository Structure": `
### Example 1
\`git init\` creates a new Git repository and initializes the .git directory structure. This is the foundation of all Git operations.

### Example 2
The .git directory contains all Git metadata, objects, and configuration. Understanding its structure helps with troubleshooting and advanced Git operations.

### Example 3
\`git status\` shows the current state of your working directory in relation to the repository, helping you understand what Git is tracking.

### Example 4
Git objects are stored in the .git/objects directory. These objects contain the actual content, metadata, and relationships between commits.

### Example 5
The HEAD reference points to the current branch and commit. This is how Git knows which commit you're working from.

### Example 6
Branch references are stored in .git/refs/heads/. Each branch is a pointer to a specific commit in the repository history.

### Example 7
The .git/config file contains repository-specific configuration settings, including remote repository URLs and branch settings.

### Example 8
\`git cat-file\` allows you to examine Git objects directly. The -t flag shows the object type, while -p shows the object content.

### Example 9
\`git log --oneline --graph --all\` visualizes the repository structure, showing how commits, branches, and merges are connected.`,

    "Basic Git Commands - Getting Started": `
### Example 1
Creating a new file using echo command. This demonstrates how to add content to a file from the command line.

### Example 2
\`git status\` shows the current state of your repository. Initially, it will show the new file as "untracked".

### Example 3
\`git add\` moves files from the working directory to the staging area. This prepares files for the next commit.

### Example 4
After adding files, \`git status\` shows them as "staged for commit", indicating they're ready to be committed.

### Example 5
\`git commit\` creates a permanent snapshot of the staged changes. The -m flag allows you to write the commit message inline.

### Example 6
\`git log --oneline\` displays a condensed view of commit history, showing only the commit hash and message.

### Example 7
\`git diff\` shows the differences between your working directory and the staging area, or between different commits.

### Example 8
\`git show HEAD\` displays detailed information about the most recent commit, including the changes made.`,

    "Working with Files and the Staging Area": `
### Example 1
Creating multiple files at once using echo commands. This demonstrates how to set up a project with different file types.

### Example 2
\`git add .\` stages all changes in the current directory and subdirectories. The dot (.) represents the current directory.

### Example 3
\`git status\` after staging shows files as "staged for commit", indicating they're ready to be committed.

### Example 4
\`git add script.js\` stages only the specific file mentioned. This gives you precise control over what gets committed.

### Example 5
\`git add *.js\` uses a wildcard pattern to stage all JavaScript files. This is useful when you want to commit only certain file types.

### Example 6
\`git add -i\` opens interactive staging mode, allowing you to choose which changes to stage with a menu-driven interface.

### Example 7
\`git reset HEAD\` removes files from the staging area without affecting your working directory. This "unstages" the file.

### Example 8
\`git diff --cached\` shows the differences for files that are currently staged, helping you review what will be committed.

### Example 9
\`git diff\` without the --cached flag shows unstaged changes in your working directory.`,

    "Creating and Managing Commits": `
### Example 1
Creating a detailed commit message with multiple lines. The first line is the summary, followed by bullet points explaining the changes made.

### Example 2
\`git commit --amend\` modifies the most recent commit. This is useful for fixing typos in commit messages or adding forgotten files.

### Example 3
\`git log --oneline --graph\` shows a condensed view of commit history with a visual representation of branches and merges.

### Example 4
\`git show HEAD~1\` displays detailed information about the previous commit (HEAD~1 means "one commit before HEAD").

### Example 5
Staging multiple files at once and committing them together. This creates a single commit that includes all the specified files.

### Example 6
\`git log --oneline --graph --all\` shows the commit history for all branches, giving you a complete view of your repository's evolution.

### Example 7
\`git show --stat\` displays commit details along with statistics showing which files were changed and how many lines were added/removed.

### Example 8
Using the -m flag allows you to write the commit message directly in the command line without opening a text editor.`,

    "Understanding Git Branches": `
### Example 1
\`git branch\` lists all local branches in your repository. The current branch is highlighted with an asterisk (*).

### Example 2
\`git branch feature-login\` creates a new branch called "feature-login" but doesn't switch to it. The branch is created from the current HEAD.

### Example 3
\`git checkout\` switches to an existing branch. This changes your working directory to match the state of that branch.

### Example 4
\`git checkout -b\` creates a new branch and immediately switches to it. This is the most common way to start working on a new feature.

### Example 5
\`git branch -a\` shows all branches including remote branches. Remote branches are prefixed with "remotes/".

### Example 6
\`git branch -d\` safely deletes a branch only if it has been fully merged. Git prevents accidental loss of work.

### Example 7
\`git branch -D\` force deletes a branch even if it hasn't been merged. Use with caution as this can cause data loss.

### Example 8
\`git branch -v\` shows branch information along with the last commit hash and message for each branch.

### Example 9
\`git branch -m\` renames the current branch to a new name. This is useful for updating branch naming conventions.`,

    "Branching and Merging Strategies": `
### Example 1
Creating a feature branch with a descriptive name. The "feature/" prefix helps identify the branch's purpose.

### Example 2
Making changes and committing them on the feature branch. This keeps the main branch stable while development continues.

### Example 3
Switching back to the main branch before merging. Always ensure you're on the target branch before merging.

### Example 4
\`git merge\` combines the feature branch into the current branch. This integrates the feature into the main codebase.

### Example 5
Deleting the feature branch after successful merge keeps the repository clean and prevents confusion.

### Example 6
When merge conflicts occur, Git marks the conflicting sections. Edit the files to resolve conflicts, then stage and commit.

### Example 7
\`--ff-only\` ensures only fast-forward merges are allowed. This keeps a linear history but fails if a merge commit is needed.

### Example 8
\`--no-ff\` forces a merge commit even when fast-forward is possible. This preserves the branch history in the commit graph.

### Example 9
\`git merge --abort\` cancels the merge operation and returns to the state before the merge attempt.`,

    "Working with Remote Repositories": `
### Example 1
\`git remote add\` creates a connection to a remote repository. "origin" is the conventional name for the main remote repository.

### Example 2
\`git remote -v\` lists all configured remote repositories with their URLs. This helps you verify your remote connections.

### Example 3
\`git fetch\` downloads changes from the remote repository without merging them into your current branch. This is safer than pull.

### Example 4
\`git pull\` combines fetch and merge operations. It downloads changes and automatically merges them into your current branch.

### Example 5
\`git push\` uploads your local commits to the remote repository. This shares your changes with other collaborators.

### Example 6
\`git push -u\` pushes a new branch and sets up tracking between your local branch and the remote branch. The -u flag sets the upstream.

### Example 7
\`git remote remove\` disconnects a remote repository. This is useful when you no longer need to sync with a particular remote.

### Example 8
\`git remote set-url\` changes the URL of an existing remote. This is useful when repositories are moved or renamed.

### Example 9
\`git fetch origin main\` fetches only the main branch from the origin remote, which can be faster than fetching all branches.`,

    "GitHub and Git Hosting Platforms": `
### Example 1
\`git clone\` downloads a complete repository from GitHub to your local machine. This creates a local copy with full Git history.

### Example 2
\`git clone -b\` clones a specific branch instead of the default branch. This is useful when you need to work on a particular branch.

### Example 3
Adding an upstream remote connects your fork to the original repository. This allows you to sync with the latest changes from the original project.

### Example 4
\`git fetch upstream\` downloads the latest changes from the original repository without merging them into your local branches.

### Example 5
\`git merge upstream/main\` incorporates the latest changes from the original repository into your local main branch.

### Example 6
\`git push origin main\` uploads your changes to your fork on GitHub. This updates your fork with your local changes.

### Example 7
GitHub CLI allows you to create pull requests from the command line. This streamlines the contribution process for developers.

### Example 8
\`gh pr list\` shows all pull requests in the repository, helping you stay updated on project activity.

### Example 9
\`gh pr checkout\` downloads and switches to a pull request branch locally, allowing you to test and review changes.`,

    "Collaborative Git Workflows": `
### Example 1
Feature branch workflow is the simplest approach. Each feature gets its own branch, which is merged back to main when complete.

### Example 2
Git flow uses a develop branch as the integration branch. This provides a more structured approach for larger teams and projects.

### Example 3
Creating feature branches from develop ensures features are built on top of the latest integration changes.

### Example 4
Merging features back to develop with --no-ff preserves the feature branch history and makes the development process more visible.

### Example 5
GitHub flow is a simplified workflow that uses only the main branch and feature branches, making it easier for smaller teams.

### Example 6
The GitHub flow emphasizes continuous deployment, where features are merged to main and immediately deployed.

### Example 7
Fork workflow is ideal for open source projects where contributors don't have direct access to the main repository.

### Example 8
Cloning your fork creates a local copy of your forked repository, allowing you to work on changes locally.

### Example 9
Adding upstream remote connects your fork to the original repository, enabling you to sync with the latest changes.`,

    "Advanced Git Commands": `
### Example 1
\`git stash\` temporarily saves uncommitted changes, allowing you to switch branches or pull updates without losing your work.

### Example 2
\`git stash list\` shows all your stashed changes with their messages and timestamps, helping you identify which stash to apply.

### Example 3
\`git stash apply\` restores stashed changes without removing them from the stash list. This allows you to apply the same stash multiple times.

### Example 4
\`git stash pop\` applies the most recent stash and removes it from the stash list. This is the most common way to restore stashed changes.

### Example 5
\`git cherry-pick\` applies a specific commit from another branch to your current branch. This is useful for applying bug fixes or features selectively.

### Example 6
\`git rebase -i\` opens an interactive rebase editor where you can reorder, edit, or squash commits. This helps maintain a clean commit history.

### Example 7
\`git bisect\` performs a binary search to find the commit that introduced a bug. Git automatically checks out commits for you to test.

### Example 8
\`git reflog\` shows the history of HEAD movements, which is invaluable for recovering from mistakes like accidental resets.

### Example 9
\`git blame\` shows who last modified each line of a file and when. This is useful for understanding code changes and finding responsible developers.

### Example 10
\`git log --follow\` tracks a file through renames, showing the complete history even when the file was moved or renamed.`,

    "Resolving Conflicts and Git Issues": `
### Example 1
When merge conflicts occur, Git marks the conflicting sections with special markers. Edit the files to choose which changes to keep, then stage and commit.

### Example 2
\`git merge --abort\` cancels the merge operation and returns your repository to the state before the merge attempt. This is useful when conflicts are too complex to resolve immediately.

### Example 3
\`git reset --soft\` undoes the last commit but keeps your changes staged. This allows you to modify the commit message or add more changes.

### Example 4
\`git reset --hard\` undoes the last commit and discards all changes. Use with caution as this permanently deletes your work.

### Example 5
\`git revert\` creates a new commit that undoes the changes from a previous commit. This is safer than reset for shared repositories.

### Example 6
\`git status\` shows which files have conflicts and need manual resolution. This helps you identify all files that need attention.

### Example 7
\`git diff\` shows the conflict markers and differences between the conflicting versions, helping you understand what needs to be resolved.

### Example 8
\`git mergetool\` opens a visual merge tool that can help resolve conflicts more easily than manual editing.

### Example 9
After resolving all conflicts, stage the resolved files and commit to complete the merge process.`,

    "Git Hooks and Automation": `
### Example 1
Pre-commit hooks run before commits are created. This example runs tests and prevents commits if tests fail, ensuring code quality.

### Example 2
Post-commit hooks run after commits are successfully created. This example displays a confirmation message with the commit hash.

### Example 3
Pre-push hooks run before pushing to remote repositories. This example runs linting and tests to ensure code quality before sharing changes.

### Example 4
Commit message hooks validate commit message format. This example enforces conventional commit format, ensuring consistent and descriptive commit messages.

### Example 5
Post-merge hooks run after successful merges. This example automatically installs dependencies and builds the project after merging changes.

### Example 6
Pre-rebase hooks run before rebase operations. This example provides a safety check to prevent accidental rebases that could rewrite history.

### Example 7
Making hooks executable is essential for them to work. The chmod +x command gives the script execution permissions.

### Example 8
Git templates allow you to automatically install hooks in new repositories. This sets up a template directory for consistent hook installation.

### Example 9
The --no-verify flag allows you to skip hooks when necessary, such as for emergency commits or when debugging hook issues.`,

    "Git Best Practices and Workflow": `
### Example 1
Good commit messages follow conventional commit format with a clear type, description, and optional body. This makes project history readable and searchable.

### Example 2
Consistent branch naming conventions help identify branch purposes at a glance. Common prefixes include feature/, bugfix/, hotfix/, and docs/.

### Example 3
Tagging releases creates permanent markers for important milestones. Annotated tags include metadata like the tagger and creation date.

### Example 4
Annotated tags are preferred over lightweight tags because they include additional metadata and can be signed for verification.

### Example 5
Small, focused commits make it easier to understand changes, revert specific features, and write meaningful commit messages.

### Example 6
Regular commits keep your work organized and make it easier to track progress. Even documentation updates deserve their own commits.

### Example 7
Code review workflows ensure quality and knowledge sharing. Pull requests provide a structured way to discuss changes before merging.

### Example 8
Interactive rebase helps maintain a clean commit history by allowing you to edit, squash, or reorder commits before they're shared.

### Example 9
Meaningful branch names clearly describe the work being done, making it easier for team members to understand the purpose of each branch.`,

    "Git Security and Authentication": `
### Example 1
SSH key generation creates a secure authentication method. ED25519 is a modern, secure algorithm that's faster and more secure than RSA.

### Example 2
Adding SSH keys to ssh-agent allows you to use your key without entering a passphrase every time. The agent manages your keys securely.

### Example 3
Testing SSH connections verifies that your key is properly configured and accepted by the remote repository. This prevents authentication issues.

### Example 4
GPG signing configuration enables commit verification. This ensures that commits actually came from the person claiming to make them.

### Example 5
Signing commits with GPG provides cryptographic proof of authorship. This is especially important for open source projects and enterprise environments.

### Example 6
Verifying signed commits allows you to check the authenticity of commits in your repository history. This helps detect unauthorized changes.

### Example 7
GPG key generation creates your personal signing key. Choose a strong passphrase and store your private key securely.

### Example 8
Listing GPG keys helps you identify the correct key ID for configuration. The long format shows the full key ID needed for Git configuration.

### Example 9
Credential storage configuration saves authentication information securely, reducing the need to enter credentials repeatedly.

### Example 10
Using HTTPS with personal access tokens provides an alternative to SSH keys, especially useful in corporate environments with strict firewall policies.`,

    "Git Performance and Optimization": `
### Example 1
\`git gc --aggressive\` performs aggressive garbage collection to optimize repository storage. This removes unused objects and compresses the repository.

### Example 2
Shallow clones download only the most recent commit history, significantly reducing clone time and storage requirements for large repositories.

### Example 3
Partial clones with blob filters download only the repository structure initially, fetching file contents on demand. This is useful for large repositories with many large files.

### Example 4
Git LFS (Large File Storage) handles large files efficiently by storing them separately from the main repository. This keeps the repository lightweight while supporting large assets.

### Example 5
\`git repack\` optimizes pack files by combining multiple pack files and adjusting compression settings. This improves performance for large repositories.

### Example 6
Checking repository size helps identify when optimization is needed. Large .git directories can slow down operations significantly.

### Example 7
Performance configuration settings optimize Git for your specific environment. Preloadindex and fscache improve performance on Windows systems.

### Example 8
Regular garbage collection with aggressive pruning keeps repositories optimized by removing unnecessary objects and compressing data.

### Example 9
\`git prune\` removes unreachable objects from the repository. This is useful for cleaning up after operations that might leave orphaned objects.

### Example 10
\`git fsck\` checks repository integrity and identifies potential corruption or optimization issues. Regular health checks prevent problems.`,

    "Git Integration with Development Tools": `
### Example 1
VS Code Git integration provides visual Git operations directly in the editor. GitLens extension adds advanced Git features like blame annotations and commit history.

### Example 2
Git aliases create shortcuts for commonly used commands, significantly improving productivity by reducing typing and making commands more memorable.

### Example 3
Custom Git commands extend Git functionality with shell scripts. This example creates a workflow for quickly creating and pushing feature branches.

### Example 4
Enhanced aliases provide powerful shortcuts for complex Git operations. These aliases combine multiple flags and options into simple commands.

### Example 5
IDE configuration integrates Git with your development environment. VS Code integration allows seamless Git operations without leaving the editor.

### Example 6
Git templates ensure consistent hook installation across all new repositories. This standardizes development practices across your projects.

### Example 7
Command line enhancements improve the Git experience with better colors, paging, and character encoding. These settings make Git output more readable.

### Example 8
Daily use aliases streamline common workflows. WIP commits allow you to save work quickly, while unwip removes the last WIP commit.

### Example 9
Branch management aliases simplify repository navigation and cleanup. These aliases provide quick access to branch information and operations.`,

    "Advanced Git Concepts": `
### Example 1
\`git cat-file\` allows you to examine Git objects directly. The -t flag shows the object type (blob, tree, commit, tag), while -p shows the object content.

### Example 2
Annotated tags are Git objects that include metadata like the tagger, date, and message. They're preferred over lightweight tags for releases.

### Example 3
\`git show-ref\` displays all references in your repository, including branches, tags, and remote branches. This helps understand the repository structure.

### Example 4
Custom Git commands extend Git functionality with shell scripts. By following the git-<name> convention, Git automatically recognizes them as commands.

### Example 5
Making custom commands executable and adding them to your PATH allows you to use them like any other Git command from anywhere in your system.

### Example 6
Git internals exploration commands help you understand how Git stores and organizes data. These commands reveal the underlying structure of your repository.

### Example 7
Understanding Git objects is fundamental to advanced Git usage. The hash-object command creates objects, while cat-file examines them.

### Example 8
Pack files are Git's way of efficiently storing multiple objects. Understanding them helps with repository optimization and troubleshooting.

### Example 9
Lightweight tags are simple references to commits, unlike annotated tags which are full objects with metadata.

### Example 10
Tag management commands help you work with version markers in your repository. Understanding the difference between tag types is important for releases.

### Example 11
Git references are pointers to commits. Understanding how HEAD and branch references work is crucial for advanced Git operations.

### Example 12
Git configuration exploration helps you understand how settings are applied and where they come from. This is essential for troubleshooting configuration issues.`,

    "Troubleshooting and Git Recovery": `
### Example 1
\`git reflog\` is your safety net - it shows the history of HEAD movements, allowing you to find and recover commits that seem lost.

### Example 2
\`git reset --hard\` moves your current branch to a previous commit, discarding all changes after that point. Use with caution as it's destructive.

### Example 3
\`git reflog --all\` shows the reflog for all references, helping you find deleted branches and recover them by creating new branches from their last known commits.

### Example 4
\`git fsck\` checks repository integrity and identifies corrupted objects. Combined with garbage collection, it can fix many repository issues.

### Example 5
\`ORIG_HEAD\` is automatically set by Git before destructive operations like merge, reset, or rebase. It provides a quick way to undo these operations.

### Example 6
\`--force-with-lease\` is safer than --force when pushing, as it checks that no one else has pushed changes since you last fetched.

### Example 7
Advanced search techniques help find lost commits. The --grep flag searches commit messages, while --all searches all branches.

### Example 8
\`HEAD@{n}\` syntax allows you to reference specific reflog entries, making it easy to recover from accidental operations.

### Example 9
Detached HEAD state occurs when you checkout a specific commit. Creating a branch from this state preserves your work.

### Example 10
\`git checkout HEAD -- file\` recovers deleted files from the current commit, while specifying a commit hash recovers from a specific point in history.

### Example 11
Multiple reset strategies help undo different types of operations. Understanding when to use each approach is crucial for effective recovery.

### Example 12
Recovery from force push requires finding the last known good state and creating a recovery branch. This prevents permanent data loss in shared repositories.`,

    "Git in Different Development Environments": `
### Example 1
Web development workflows focus on frontend and backend separation. Feature branches for UI changes often include CSS, HTML, and JavaScript files.

### Example 2
Mobile app development requires handling platform-specific files. Git workflows often separate iOS and Android development with dedicated directories.

### Example 3
Data science projects benefit from Git LFS for large datasets and models. This keeps repositories lightweight while tracking important data assets.

### Example 4
DevOps and infrastructure projects use Git for configuration management. Kubernetes and Docker configurations are versioned and deployed through Git workflows.

### Example 5
Microservices architectures use Git to manage individual services. Each service can have its own repository or be organized within a monorepo structure.

### Example 6
Frontend framework projects organize components and modules systematically. Git workflows support component-based development and reusable code.

### Example 7
Backend API development focuses on endpoints, routes, and business logic. Git workflows ensure API changes are tracked and can be rolled back if needed.

### Example 8
Documentation projects use Git to track changes in documentation, README files, and API documentation. This ensures documentation stays current with code changes.

### Example 9
Configuration management uses Git to track environment configurations, deployment settings, and infrastructure as code. This enables reproducible deployments.`,

    "Git Workflow Optimization": `
### Example 1
Git configuration optimization improves performance by enabling preloading, caching, and automatic garbage collection. These settings reduce command execution time.

### Example 2
Useful aliases create shortcuts for complex Git operations, making common tasks faster and reducing typing errors. Custom aliases improve daily productivity.

### Example 3
Automated workflow scripts streamline repetitive tasks like committing and pushing. Shell scripts can combine multiple Git operations into single commands.

### Example 4
Performance optimization settings reduce Git's resource usage and improve command execution speed. These settings are especially important for large repositories.

### Example 5
Memory management settings control how Git uses system resources. Proper configuration prevents Git from consuming excessive memory during operations.

### Example 6
Network optimization settings improve Git's performance over slow or unreliable network connections. These settings reduce transfer times and handle network issues better.

### Example 7
Workflow automation settings configure Git's behavior for common operations. These settings reduce manual intervention and improve consistency.

### Example 8
Repository maintenance commands keep Git repositories optimized and clean. Regular maintenance prevents performance degradation over time.

### Example 9
Custom workflow commands extend Git functionality with domain-specific operations. These commands encapsulate common patterns and reduce errors.`,

    "Git and Modern Development Practices": `
### Example 1
CI/CD integration automates testing and deployment processes. GitHub Actions workflows trigger on Git events like push and pull requests, ensuring code quality.

### Example 2
Docker integration containerizes applications with Git-tracked configuration files. Dockerfiles define reproducible environments that can be versioned and shared.

### Example 3
Git submodules enable microservices architectures by allowing repositories to include other repositories as dependencies. This maintains separation while enabling code sharing.

### Example 4
Pull request templates standardize code review processes. They ensure consistent information is provided for each review, improving collaboration quality.

### Example 5
Dependabot automates dependency management by creating pull requests for outdated packages. This keeps projects secure and up-to-date with minimal manual effort.

### Example 6
Security scanning workflows automatically check for vulnerabilities in dependencies and code. This integrates security into the development process rather than treating it as an afterthought.

### Example 7
Code quality workflows ensure consistent standards across the project. Automated linting and testing catch issues before they reach the main branch.

### Example 8
Automated documentation workflows generate and update documentation from code changes. This keeps documentation current and reduces manual maintenance.

### Example 9
Environment-specific deployment workflows enable different configurations for staging, testing, and production. This ensures proper testing before production releases.`,

    "Project: Building a Git Workflow": `
### Example 1
Project initialization creates a new Git repository and sets up the basic structure. This is the foundation for all subsequent Git operations.

### Example 2
Creating a proper project structure with organized directories ensures code is well-organized and maintainable. Standard directories like src, tests, and docs are industry best practices.

### Example 3
The initial commit establishes the project baseline. This commit should include all essential project files like README, .gitignore, and basic project structure.

### Example 4
GitFlow branching strategy uses develop branch for integration and feature branches for development. This approach provides clear separation between development and production code.

### Example 5
Feature development follows the feature branch workflow. Each feature is developed in isolation, making it easy to review, test, and merge changes.

### Example 6
Non-fast-forward merges preserve the feature branch history in the develop branch. This makes it easy to understand how features were developed and when they were integrated.

### Example 7
Release management involves creating release branches and tagging versions. This provides clear versioning and makes it easy to track what changes are in each release.

### Example 8
Remote repository setup enables team collaboration and backup. Pushing both main and develop branches ensures all team members have access to the complete project history.

### Example 9
Team collaboration configuration ensures consistent Git behavior across team members. These settings reduce conflicts and improve collaboration efficiency.

### Example 10
Git hooks automate quality checks before commits. Pre-commit hooks can run linting, testing, and other quality checks to ensure code quality.

### Example 11
CI/CD integration automates testing and deployment. GitHub Actions workflows ensure code quality and enable automated deployment processes.`,

    "Git Certification and Career Development": `
### Example 1
Building a Git portfolio demonstrates practical experience with version control. A strong GitHub profile showcases your ability to collaborate and maintain clean project histories.

### Example 2
Daily practice with Git commands builds muscle memory and confidence. Regular use of advanced commands like interactive rebase and cherry-pick demonstrates mastery.

### Example 3
Creating and sharing Git cheat sheets shows leadership and knowledge sharing. Documenting workflows helps teams standardize practices and improves collaboration.

### Example 4
Staying updated with Git developments ensures you're using the latest features and best practices. Following release notes helps you understand new capabilities and improvements.

### Example 5
Contributing to open source projects provides real-world experience with Git workflows. It demonstrates your ability to work with existing codebases and follow project conventions.

### Example 6
A professional GitHub profile serves as your Git portfolio. Well-organized repositories with clear commit histories and comprehensive documentation showcase your skills.

### Example 7
Git certification preparation involves studying official documentation and practicing with real scenarios. Certifications validate your knowledge and can enhance career prospects.

### Example 8
Advanced Git skills like filter-branch and bisect demonstrate deep understanding of Git internals. These skills are valuable for troubleshooting and repository maintenance.

### Example 9
Career advancement with Git involves teaching others and establishing yourself as a Git expert. Leading training sessions and mentoring demonstrates leadership capabilities.

### Example 10
Staying current with Git developments involves following the community and contributing to documentation. This keeps your skills relevant and positions you as a thought leader.`
  };

  return explanations[lessonTitle] || `
This lesson covers practical Git usage with real-world examples and best practices for version control. The commands shown demonstrate essential Git operations that every developer should know.

Understanding these concepts helps you work more effectively with version control and collaborate better with development teams.`;
};

module.exports = {
  getGitLessonConcepts,
  getGitCodeExample,
  getGitCodeExplanation
};
