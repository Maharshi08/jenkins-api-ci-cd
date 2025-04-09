# 🚀 Jenkins CI/CD Pipeline for Node.js Project – `jenkins-api-ci-cd`

This project demonstrates a basic **CI/CD pipeline setup** using **Jenkins**, **Docker**, and **GitHub** for a Node.js application.

---

## 📌 Project Overview

`jenkins-api-ci-cd` is a simple Node.js API with automated deployment steps using Jenkins. It includes:

- ✅ Continuous Integration via Jenkins
- 🐳 Docker containerization
- 🧪 Automated testing and build
- 🔗 GitHub integration

---

## 📁 Folder Structure

. ├── Jenkinsfile # Jenkins pipeline definition ├── Dockerfile # Docker image config ├── app/ # Node.js application code ├── package.json └── README.md


A
---

## 🛠️ Technologies Used

- Node.js
- Express.js
- Docker
- Jenkins (Pipeline + Docker plugins)
- GitHub
- Bash (for shell commands)

---

## ⚙️ Prerequisites

- Git
- Docker & Docker Compose
- Jenkins installed (can be inside Docker)
- GitHub repo with Jenkinsfile pushed

---

## 🧪 Jenkins Pipeline Steps

1. **Clone GitHub Repo**
2. **Install Dependencies**
3. **Run Tests**
4. **Build Docker Image**
5. **Push to Docker Hub**
6. **Run Docker Container**

---

## 🐳 Docker Commands (Run Locally)

To build and run locally:

```bash
docker build -t maharshi86/jenkins-api-ci-cd .
docker run -d -p 3000:3000 --name quote-api-container maharshi86/jenkins-api-ci-cd
