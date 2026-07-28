# DevOps Lab Assignments - PRN 23070122114 (Kashyup Gaud)

This repository contains the assignments and projects for the DevOps Lab.

## Directory Structure

- `my-flask-app/`: Contains the Python Flask application (Assignment TW1.1 & TW1.3)
- `angular-docker-app/`: Contains the Angular application with Docker setup (Project 2)
- *(Add other directories as needed)*

## Assignments & Projects

### Assignment TW1.1: Git Workflow & Collaboration
- **Task 1.1:** Initialized Git repository for Python Flask application and committed to `main`.
  - **Uncommitted changes:**
    ![Uncommitted changes](screenshots/uncommitted_changes.png)
  - **Staging the changes:**
    ![Staging the changes](screenshots/staging_changes.png)
  - **Committed the changes:**
    ![Committed the changes](screenshots/committed_changes.png)

- **Task 1.2:** Created branch `feature/user-auth`, added modifications, committed, and pushed.
  - **New branch:**
    ![New branch](screenshots/new_branch.png)
  - **Committed in new branch:**
    ![Committed in new branch](screenshots/committed_new_branch.png)

- **Task 1.3:** Simulated a merge conflict, resolved it manually, and pushed the updated `main` branch.
  - **Merging the branches:**
    ![Merging the branches](screenshots/merging_branches.png)
  - **Simulating the merge Conflict:**
    ![Simulating the merge Conflict](screenshots/simulating_merge_conflict.png)

### Assignment TW1.2: Jira Project & Issue Tracking
- **Task 2.1:** Created a new "Scrum" project for the "Hello World" application in Jira Cloud.
  - **Jira: My Scrum Space:**
    ![My Scrum Space](screenshots/my_scrum_space.png)

- **Task 2.2:** Created issues: Story ("Implement User Authentication Feature"), Task ("Setup Flask Environment"), and Bug ("Login Page Displays Error").
  - **Create Story:**
    ![Create Story](screenshots/create_story.png)

- **Task 2.3:** Moved "Setup Flask Environment" task to "In Progress".
  - **Backlog Tasks:**
    ![Backlog Tasks](screenshots/backlog_tasks.png)

### Assignment TW1.3: Basic Containerization (Docker) & Jenkins
- **Task 3.1:** Created `Dockerfile` for the Python Flask application to run on port 5000. Built and verified the image locally.
  - **Creating docker Image:**
    ![Creating docker Image](screenshots/creating_docker_image.png)
  - **Checking image status:**
    ![Checking image status](screenshots/checking_image_status.png)
  - **Running Docker Image:**
    ![Running Docker Image](screenshots/running_docker_image.png)

- **Task 3.2:** Set up a Jenkins Freestyle project to pull the Git repository and list workspace contents.
  - **Jenkins Bash Commands:**
    ![Jenkins Bash Commands](screenshots/jenkins_bash_commands.png)
  - **Jenkins Console Output:**
    ![Jenkins Console Output](screenshots/jenkins_console_output.png)

### Project 1: Dockerizing Jenkins Pipeline
*(Details and screenshots for Project 1)*

### Project 2: Deploy Angular/React Application in Docker Container
- Containerized an Angular application using Docker.
- Created `docker-compose.yml` for orchestration.
