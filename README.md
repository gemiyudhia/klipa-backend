# Klipa Backend

REST API for **Klipa**, a two-sided marketplace platform that connects **Content Creators** with **Clippers** to distribute short-form video content through a **Campaign** system.

This backend is built using NestJS and provides authentication, authorization, campaign management, user management, and PostgreSQL database integration through Prisma ORM.

> 🚧 **Status: In Development**
>
> Klipa is currently under development. Some features, APIs, and database structures may change during the development process.

## Overview

Klipa has two main roles within the marketplace:

**Creators** use the platform to create campaigns and distribute their content through Clippers.

**Clippers** can discover available campaigns and participate by creating and distributing short-form videos according to the campaign requirements.

The backend acts as the central business logic layer responsible for authentication, user data, campaigns, authorization, and database communication.

## Tech Stack

### Backend

* **NestJS 11** — backend framework
* **TypeScript** — programming language
* **Node.js** — runtime
* **Prisma 7** — ORM
* **PostgreSQL** — relational database
* **Supabase** — production database hosting
* **Passport** — authentication middleware
* **JWT** — access & refresh token authentication
* **Google OAuth 2.0** — social authentication
* **bcrypt** — password hashing
* **class-validator** — request validation
* **class-transformer** — data transformation
* **Swagger** — API documentation
* **Throttler** — API rate limiting
* **Jest & Supertest** — testing

### Deployment

* **Railway** — backend deployment
* **Supabase** — PostgreSQL database

## Architecture

```text
                         ┌─────────────────┐
                         │     Client      │
                         │  Web / Browser  │
                         └────────┬────────┘
                                  │
                                  │ REST API
                                  ▼
                    ┌─────────────────────────┐
                    │    Klipa Backend        │
                    │       NestJS 11         │
                    ├─────────────────────────┤
                    │                         │
                    │ Authentication          │
                    │ Authorization           │
                    │ User Management         │
                    │ Campaign Management     │
                    │ Validation              │
                    │ Rate Limiting           │
                    │                         │
                    └────────────┬────────────┘
                                 │
                                 │ Prisma
                                 ▼
                       ┌──────────────────┐
                       │    PostgreSQL    │
                       │    Supabase      │
                       └──────────────────┘
```

## Core Features

### Authentication

The backend implements authentication using JWT and supports:

* User registration
* User login
* Access token
* Refresh token
* Logout
* Password hashing
* Protected routes
* JWT authentication strategy
* Google OAuth 2.0

Access tokens are designed for short-lived authentication, while refresh tokens are used to maintain authenticated sessions.

### Role-Based Authorization

Klipa currently supports three application roles:

```text
CREATOR
CLIPPER
ADMIN
```

Each role has different access and responsibilities within the platform.

### Campaign System

Campaign is the core workflow of Klipa.

A Creator can create and manage campaigns containing information required by Clippers to participate in the campaign.

The backend handles campaign data and the relationship between users and campaigns.

### User Management

The backend manages application users and their roles, authentication state, and account-related information.

### Withdrawal Tax

The backend also supports withdrawal-related business logic, including a configurable withdrawal tax rate.

The production environment currently uses:

```env
WITHDRAWAL_TAX_RATE=0.10
```

## Authentication Flow

### Email & Password

```text
User
 │
 │ Register / Login
 ▼
Klipa Backend
 │
 ├── Validate credentials
 ├── Hash / verify password
 ├── Generate JWT
 │
 ▼
Access Token + Refresh Token
```

### Google OAuth

```text
User
 │
 │ Login with Google
 ▼
Google OAuth
 │
 │ Callback
 ▼
Klipa Backend
 │
 ├── Validate Google account
 ├── Find / create user
 └── Generate authentication tokens
 │
 ▼
Frontend
```

## Project Structure

```text
klipa-backend/
│
├── prisma/
│   └── schema.prisma
│
├── src/
│   ├── admin/
│   ├── auth/
│   ├── campaign/
│   ├── prisma/
│   ├── users/
│   ├── withdrawal/
│   ├── dispute/
│   ├── clip/
│   ├── common/
│   └── main.ts
│
├── test/
│
├── .env
├── package.json
├── prisma.config.ts
├── nest-cli.json
├── tsconfig.json
└── ...
```

The structure may evolve as new modules and features are added.

## Getting Started

### Requirements

Make sure the following are installed:

* Node.js
* npm
* PostgreSQL or a Supabase project

### Installation

Clone the repository:

```bash
git clone https://github.com/gemiyudhia/klipa-backend.git

cd klipa-backend
```

Install dependencies:

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
DATABASE_URL=<pooler connection string from Supabase>

DIRECT_URL=<direct connection string from Supabase>

JWT_SECRET=<access token secret>
JWT_REFRESH_SECRET=<refresh token secret>

JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

GOOGLE_CLIENT_ID=<Google OAuth Client ID>
GOOGLE_CLIENT_SECRET=<Google OAuth Client Secret>
GOOGLE_CALLBACK_URL=http://localhost:4000/auth/google/callback

FRONTEND_URL=http://localhost:3000

WITHDRAWAL_TAX_RATE=0.10

NODE_ENV=development
```

For production, configure the environment variables through the deployment platform instead of committing them to the repository.

Example production configuration:

```env
DATABASE_URL=<production Supabase pooler connection string>
DIRECT_URL=<production Supabase direct connection string>

JWT_SECRET=<production secret>
JWT_REFRESH_SECRET=<different production secret>

JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

GOOGLE_CLIENT_ID=<production Google OAuth Client ID>
GOOGLE_CLIENT_SECRET=<production Google OAuth Client Secret>
GOOGLE_CALLBACK_URL=https://klipa-backend.onrender.com/auth/google/callback

FRONTEND_URL=https://<your-vercel-domain>.vercel.app

WITHDRAWAL_TAX_RATE=0.10

NODE_ENV=production
```

## Database

Klipa uses Prisma ORM with PostgreSQL.

Generate Prisma Client:

```bash
npx prisma generate
```

Create and apply migrations during development:

```bash
npx prisma migrate dev
```

For production deployments, apply existing migrations with:

```bash
npx prisma migrate deploy
```

The application uses two database connection variables:

* `DATABASE_URL` — pooled connection used by the application
* `DIRECT_URL` — direct database connection used for Prisma operations that require a direct connection

## Running Locally

Start the development server:

```bash
npm run start:dev
```

The backend will be available at:

```text
http://localhost:4000
```

depending on the configured application port.

## Build

Create a production build:

```bash
npm run build
```

The build process generates the Prisma Client before compiling the NestJS application:

```text
prisma generate → nest build
```

## Production

Run the production application:

```bash
npm run start:prod
```

The production command runs:

```bash
node dist/src/main
```

## Testing

Run unit tests:

```bash
npm run test
```

Watch tests:

```bash
npm run test:watch
```

Generate coverage:

```bash
npm run test:cov
```

Run end-to-end tests:

```bash
npm run test:e2e
```

## API Documentation

The API is documented using Swagger.

When running the backend locally, open the Swagger documentation through the configured Swagger endpoint.

## Deployment

The backend is deployed using **Railway** and connects to a production PostgreSQL database hosted on **Supabase**.

Production architecture:

```text
                    ┌───────────────────┐
                    │      Vercel       │
                    │ Klipa Frontend    │
                    └─────────┬─────────┘
                              │
                              │ HTTPS
                              ▼
                    ┌───────────────────┐
                    │      Railway      │
                    │ Klipa Backend     │
                    │     NestJS        │
                    └─────────┬─────────┘
                              │
                              │ Prisma
                              ▼
                    ┌───────────────────┐
                    │     Supabase      │
                    │    PostgreSQL     │
                    └───────────────────┘
```

## Related Repository

Frontend:

https://github.com/gemiyudhia/klipa-frontend

## Project Status

The current development focuses on building a realistic marketplace architecture with authentication, role-based access, campaign management, database integration, and frontend-backend communication.

The project is **not intended to represent a production-ready commercial platform yet**. Features, business rules, database schemas, and API contracts are still subject to change.

## Author

**Gemi Yudhia**

GitHub:

https://github.com/gemiyudhia

---

Built as a full-stack project to explore backend architecture, authentication, database design, REST API development, and marketplace application workflows.
