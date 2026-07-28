# Assignment 1 - DevOps Lab

**Submitted by:** Kashyup Gaud  
**PRN:** 23070122114  
**Class:** FIYCSE – A3  

---

## 1. Git Workflow & Collaboration

### Task 1.1: Git Operations
- **Uncommitted changes:** Verified untracked files in the working directory using `git status`.
- **Staging the changes:** Staged modified and new files using `git add .`.
- **Committed the changes:** Committed staged changes with commit message `"First Commit"`.

### Task 1.2: Branching
- **New branch:** Created and checked out a new feature branch `feature-update` using `git checkout -b feature-update`.
- **Committed in new branch:** Committed modifications in the feature branch with message `"First Commit to this branch"`.

### Task 1.3: Merge & Conflict Resolution
- **Merging the branches:** Switched back to `master` and fast-forward merged `feature-update`.
- **Simulating the merge Conflict:** Simulated a merge conflict between `main` and `conflict` branches by modifying the same line in both branches, then resolving the conflict manually upon merging.

---

## 2. Jira Project & Issue Tracking

- **My Scrum Space:** Set up a Scrum project in Jira Cloud.
- **Create Story:** Created user stories, tasks, and bug issues.
- **Backlog Tasks:** Managed sprint planning and backlog tasks.

---

## 3. Basic Containerization (Docker) & Jenkins

- **Creating Docker Image:** Built Docker image `flask-hello` locally from the `Dockerfile`.
- **Checking Image Status:** Verified image build and checked image details.
- **Running Docker Image:** Successfully ran the Docker container mapping port `5000:5000`.
- **Jenkins Bash Commands:** Configured Jenkins Freestyle job execute batch command.
- **Jenkins Console Output:** Verified build log output showing successful execution.