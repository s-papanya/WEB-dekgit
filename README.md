# WEB-dekgit

Full-stack university team project built with **React + TypeScript** on the frontend and **Strapi + Node.js + MySQL** on the backend.

The project demonstrates REST API integration, containerized backend services, database persistence, and environment-based configuration.

## Tech Stack

- **Frontend:** React, TypeScript
- **Backend:** Strapi, Node.js
- **Database:** MySQL
- **Containerization:** Docker, Docker Compose
- **Search:** Meilisearch plugin
- **Authentication:** Strapi Users & Permissions / JWT

## Architecture

```text
React + TypeScript
       |
       | REST API
       v
Strapi / Node.js
       |
       v
     MySQL
```

Docker Compose runs the backend and database as separate services on an isolated Docker network.

## Local Setup

1. Copy the environment template.

```bash
cp .env.example .env
```

2. Replace all placeholder values in `.env` with local development secrets.

3. Start the backend stack.

```bash
docker compose up --build
```

4. Start the frontend separately.

```bash
cd client-ts
npm install
npm start
```

By default, the backend is available at `http://localhost:1337`.

## Security Notes

- Secrets and database credentials are loaded from environment variables and are not committed to the repository.
- The application uses a dedicated MySQL application user instead of the MySQL root account.
- Production credentials should be managed using a dedicated secret-management solution.

## Project Context

This repository was created as a university team project.

### Team Members

- Chadhaporn Phetsuriya
- Silmee Panan
- Thanapat Panmas
- Pakorn Yaothong
- Papanya Siriwattanaworakul
- Ashrof Awae
