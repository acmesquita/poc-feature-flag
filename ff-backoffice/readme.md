## Feature Flag - Backoffice

System to manager feature flags by users, enable:

- Create Feature
- Add relate feature to user
- Remove relate user to feature
- Show all features with your users
### Getting Starting

This project to using:

- Typescript
- Next 13

#### Install dependencies

```
yarn install
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

Start this project:

```
yarn dev
```