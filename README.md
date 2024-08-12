# docker-compose-demo-project
# My App

## Overview

This project is a full-stack application consisting of a frontend built with React and a backend powered by Node.js. The application is containerized using Docker and orchestrated with Docker Compose. 

## Features

- **Frontend**: A React-based UI served by an Nginx container.
- **Backend**: A Node.js server that handles API requests.
- **Database**: MongoDB, configured to work with the backend.
- **Deployment**: Containerized using Docker, and managed via Docker Compose.

## Project Structure
my-app/
│
├── backend/
│ ├── Dockerfile
│ ├── package.json
│ ├── server.js
│
├── frontend/
│ ├── Dockerfile
│ ├── package.json
│ ├── public/
│ │ └── index.html
│ └── src/
│ ├── App.js
│ └── index.js
│
└── docker-compose.yml



### Backend

- **Dockerfile**: Defines the Docker image for the Node.js backend.
- **package.json**: Contains the backend dependencies and scripts.
- **server.js**: The main server file for the Node.js backend.

### Frontend

- **Dockerfile**: Defines the Docker image for the React frontend.
- **package.json**: Contains the frontend dependencies and scripts.
- **public/index.html**: The HTML file for the React application.
- **src/App.js**: The main React component.
- **src/index.js**: The entry point for the React application.

### docker-compose.yml

- Defines the services for the backend, frontend, and MongoDB.
- Manages the build and deployment of the Docker containers.

## Getting Started

To get started with this project, clone the repository and run the following commands:

1. **Build and start the containers**:

   ```bash
   sudo docker-compose up -d --build
