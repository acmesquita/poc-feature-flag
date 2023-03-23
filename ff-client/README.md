## Feature flag - Client

Example to using Feature Flag functionality in client side.

### Getting Starting

This project to using:

- Typescript
- Next 13

#### Install dependencies

```
yarn install
```
### Start application

For Up this project is neccessare that Feature API and Feature BFF start before this step, so:

```
cd ff-api/
yarn
docker compose up
npx prisma migrate dev
yarn dev

cd ../ff-bff
yarn
docker compose up
yarn dev
```

Now, in folder for this project execute:

```
yarn dev
```

Access http://localhost:3001

For add feature flag, up Feature Backoffice and add feature toggle and userID.