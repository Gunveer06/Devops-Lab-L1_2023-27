# Project 2: Angular Docker Deployment

**Deploying an Angular Application Using Docker and Docker Compose**  
*Development container with Angular CLI and production deployment with Nginx*

**Submitted by:** Kashyup Gaud  
**Course / Subject:** DevOps Lab  
**Date:** 22 July 2026  

---

## Overview

This project demonstrates containerizing an Angular web application for both development and production environments using Docker and Docker Compose.

---

## Docker Configurations

### Development Dockerfile (`Dockerfile.dev`)

```dockerfile
FROM node:22.22.3
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200
CMD ["npm", "start"]
```
*Explanation:* The development image installs dependencies, copies the project, exposes Angular's development port (4200), and executes the project's start script.

### Production Dockerfile (`Dockerfile`)

```dockerfile
# Build stage
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist/angular-docker/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
*Explanation:* The build tools remain in the temporary Node.js stage. Only Nginx and the compiled static files are retained in the final runtime image.

### Development Compose File (`docker-compose.yml`)

```yaml
services:
  angular-app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "4200:4200"
    environment:
      - NG_ALLOWED_HOSTS=localhost
    volumes:
      - .:/app
      - /app/node_modules
```

### Production Compose File (`docker-compose.prod.yml`)

```yaml
services:
  angular-prod:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "80:80"
```

---

## Implementation Evidence and Analysis

- **Figure 2. Angular project structure in VS Code:** Shows Angular source folders and required Docker configuration files.
- **Figure 3. Development Dockerfile:** Configures Node.js environment on port 4200.
- **Figure 4. Multi-stage production Dockerfile:** Compiles static browser build and serves via Nginx on port 80.
- **Figure 5. Development Docker Compose configuration:** Configures volume mounts and port forwarding for live development.
- **Figure 7. Angular development application on port 4200:** Accessible via `http://localhost:4200`.
- **Figure 8. Running Angular containers in Docker Desktop:** Demonstrates running Compose services.
- **Figure 9. Running containers verified with `docker ps`:** Lists container status and port mappings.
- **Figure 10. Production image build and Nginx startup:** Shows production build completion and HTTP 200 responses.
- **Figure 11. Production Angular application served by Nginx:** Accessible via `http://localhost` on standard port 80.
- **Figure 12. Docker images available on the host:** Displays development and production images via `docker images`.
- **Figure 13. Docker Compose service status:** Verified using `docker compose ps`.
- **Figure 14-16. Graceful shutdown:** Demonstrates graceful termination of containers and Nginx workers.

---

## Docker Commands Explained

| Command | Purpose |
|---|---|
| `ng new angular-docker-app` | Creates a new Angular workspace and installs initial npm dependencies. |
| `docker compose up --build` | Builds development image, creates service container and network, and streams logs. |
| `docker compose down` | Stops and removes development service containers and network. |
| `docker compose -f docker-compose.prod.yml up --build` | Performs multi-stage build, creates Nginx-based service on port 80, and streams logs. |
| `docker compose -f docker-compose.prod.yml down` | Stops and removes production service and resources. |
| `docker ps` | Lists running containers with IDs, images, ports, and status. |
| `docker images` | Lists locally available images and disk usage. |
| `docker compose ps` | Displays status of current Compose project services. |
| `docker compose up --build --remove-orphans` | Starts Compose services and cleans up old unused containers. |

---

## Conclusion

The project successfully demonstrates a complete Angular containerization workflow. Development uses Node.js, Angular's live development server, source mounting, and port 4200. Production uses a multi-stage build to keep compilation dependencies out of the runtime image and serves the final static application through Nginx on port 80.
