# POC Feature Flag

<p align="center">
  <img src="https://user-images.githubusercontent.com/15862643/223220640-7d772297-4922-4668-8105-b869e79f6239.png" />
</p>

> Feature Toggles (often also refered to as Feature Flags) are a powerful technique, allowing teams to modify system behavior without changing code. They fall into various usage categories, and it's important to take that categorization into account when implementing and managing toggles. Toggles introduce complexity. We can keep that complexity in check by using smart toggle implementation practices and appropriate tools to manage our toggle configuration, but we should also aim to constrain the number of toggles in our system.
>
> _Pete Hodgson_

_[Link to article](https://martinfowler.com/articles/feature-toggles.html)_

## This project


<p align="center">
  <img src="https://user-images.githubusercontent.com/15862643/223223377-be4f02c1-7d22-46c3-9248-c9325b89e520.png" />
</p>

Imagine a scenario where it is necessary to create a new screen for customers, a screen that the team is not so sure of delivery, because it is not complete or because it needs to be released little by little to customers.

In this scenario, we can understand a solution that knows how to inform whether that client for that functionality can be visualized or not. So, a Feature Flag solution was built.

Thinking about the solution, I understood that some micro systems would be necessary to isolate both the business rules and the technologies used to access these rules.

The first micro system was the construction of the API that would contain all the business requirements, in addition to access to data storage and manipulation. For this system, I tried to isolate what is core with the use cases of the other technologies that used the use cases. This was important to make it easier, if in the future, to exchange technologies.

To understand more details of the implementation, the readme of the `ff-api` project will be very instructive.

With the api ready, now we need to understand how our team will manage the flags and the users who will be able to visualize or not certain functionality, for this the `ff-backoffice` project was built.

In this project, you will then query the API and be able to create, associate and dissociate users.

Now with the possibility of managing the flags, it was thought how the client application should access this information. Seeking to understand how to protect the API, but also having a system responsible for caching the information and thus mitigating access to the API and the database, the construction of a BFF was thought.

Then, with a complete management and access system in place, we need to validate that the solution works. For this, the `ff-client` project was created, in which the request for the BFF was built and thus defined which screen should render according to the result of the request.

With that, the four systems in this repository represent what it would be like to build and use a Feature Flag system thinking about the responsibility of each system, isolating business rules, giving access to information management and also a practical example of its use.

### Getting Starting

Build images:

```
docker compose build
```

Create database and run migrates:

```
docker compose run --rm api npx prisma migrate dev
```

Run applications:

```
docker compose up
```

### Access applications

- Access to backoffice: `http://localhost:3003`
- Access to client: `http://localhost:3001`