## Feature flag API

![feature-flag](https://user-images.githubusercontent.com/15862643/222811079-78c14403-a74b-42c5-867a-b497f0779761.jpg)

System to manager feature flags by users.

### Requirements

- Create feature
- Add user to a feature
- Disable user to a feature
- Consult feature for user
- List all features with your users

### Getting Starting

This project is a API create with technologies:

- Typescript
- Express
- Prisma IO
- Zod
- PostgreSQL

Furthermore, this project is that organized with ideas to clean archecture.

#### 1. Install Dependencies

```
yarn install
```

#### 2. Init database

Rename `.env.example` to `.env`. After start docker compose with PostgresSQL.

```
docker compose up
```

Run command to create and migrate to schema database.

```
npx prisma migrate dev
```

#### 3. Start server

```
yarn dev
```

Access file: `docs/request.http` and valid this project with request details in the doc.