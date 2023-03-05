## Feature flag - BFF

Backend for frontend to call for Feature flag API

### Getting Starting

This project to using:

- Typescript
- Remix.run
- Redis (ioredis)

#### Install dependencies

```
yarn install
```

#### Up Redis server

```
docker compose up
```

### Start application

For Up this project is neccessare that Feature API start before this step, so:

```
cd ff-api/
yarn
docker compose up
npx prisma migrate dev
yarn dev
```

Now, in folder for this project execute:

```
yarn dev
```