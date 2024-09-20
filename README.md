# Project App

This is an application that allows users to have projects that contain tasks within them. It was implemented using the NextJS framework for the purposes of a coding exercise. It represents roughly 3 hours of work including time for research and discovery.

## Working Features

- Database is fully featured, with data relations handled via ORM
- Displaying projects owned by different users
- Allowing for changing of the user

## Dependencies

- NodeJS
- Postgres

## Quickstart

- Install dependencies using `npm i`
- Create a database in postgres
- Configure `.env` file with your database connection string
- Perform a database push using `npx prisma db push`
- Run the application using `npm run dev`

## Longstart

### Create User in Postgres

Follow the commands to create a new database as follows below:
```bash
psql -U postgres
# Enter in the password for your postgres user.
```
Within the psql interface, run the following commands to create a database and user
``` 
CREATE DATABASE ford;
CREATE USER ford WITH ENCRYPTED PASSWORD 'mypass'
GRANT ALL PRIVILEGES ON ford TO ford;
\c ford postgres
GRANT ALL ON SCHEMA public TO ford;
```

### Create a .env environments file

Create a file called `.env` in the root of your directory and fill in the following information:
```
DATABASE_URL="postgresql://ford:mypass@localhost/ford"
```

## Creating Data

I was unable to create a form and methods to create data in the time allotted. In order to see that the data is relational, you can create database entities using `prisma studio`, which is a browser-based database management tool.

From the project root, run `npx prisma studio`. This will start a web interface tool that allows you to add, edit, and delete database models.

- Create a user
- Create a project owned by a user
- Create tasks underneath that project for that user

# Questionnaire

### Explain the architectural pattern you chose for the application (e.g., MVC, layered architecture) and why.

I chose to use an MVC pattern because that is the pattern that I have used the most for full-stack applications.

### Did you use any design patterns (e.g., Singleton, Factory, Observer) in your implementation? If so, explain which ones and why you chose to use them.

I did not get to implementing creating new projects underneath a user, however I felt that if I had gotten that far, I would implement an Observer to wait for whenever a CRUD operation was initiated and then display results whenever it would be finished.

I have in the past designed a system that made heavy use of the Singleton pattern, however I would have only done that if there were multiple views that all needed to work with some shared dataset here.

### Describe any specific React design patterns you used (e.g., Container-Component, Higher-Order Components, Render Props, Hooks). Why did you choose these patterns?

Larger pages are broken up into higher-order components where it makes sense. If a page gets too complicated and unwieldly to handle, I tend to block out that code and section it off into a separate react component for the sake of readability.

I have moved completely off class-based components, but I am still familiar with them to an extent.

### How did you manage component state and side effects? Provide examples of how you utilized React hooks (e.g., useState, useEffect, useContext).

There is extensive use of React hooks such as useState and useEffect in the main page. If I had gotten to handling authentication, I am sure I would have made use of useContext, but that would be for the future.

### Describe the routing strategy you implemented on the front-end. How did you structure the routes and why?

At first I was attempting to produce multiple views for a landing page, signup, signin, and finally display of projects, but I realized that this would take too long. I ended up settling on a single page to do everything in the interest of time.

### Describe your approach to designing the RESTful APIs. How did you structure the endpoints and handle different HTTP methods?

I like to group all of my endpoints by their relevant models whenever possible. If it makes sense to extend endpoints to retrieve associated models, that can be handled on a case-by-case basis.

While I did not get a chance to complete a robust api for this assignment, I was planning on exposing projects based on their owner. We could use a global session context to know which user we were requesting projects for, and then retrieving their 

### How did you handle error scenarios both on the front-end and back-end? Provide examples of how you ensured robust error handling.

In a short amount of time I did not really have time to be so robust with my error handling. However, I did make an effort to make as much use of Typescript as possible, utilizing the Prisma Schema to define types automatically for me.

### Explain your database schema design. How did you structure the tables and relationships between users, build configurations, and build logs?

The database relations were handled for me by Prisma, but it essentially boils down to 3 major tables: Users, Projects, Tasks. Users can own many Projects and Projects can have many tasks. Prisma creates associative entities for you in Postgres, so we don't really have to worry about that. When requesting the data, we make sure to include related models when we request the payload from the API. So when we request a user, we get a complete structure that resembles something like this:

```
User
- Project 1
  - Task a
  - Task b
- Project 2
  - Task c
  - Task d
  - Task e
```

### What is left to implement?

To be honest, there is quite a lot to implement. I did not get to handling authentication. I would handle that by wrapping the entire application in an Authentication Context. This would provide a session token in the form of a JWT that would follow the user along. If the session token is missing or invalid, I could force the user into a login screen or a public homepage of some kind.

CRUD operations will need to have their own forms. I was in the middle of producing a quick form to handle new projects, but I was in the middle of handling form input validation when I ran out of time. I would use a validation library such as Zod or the like to handle form validation.

All CRUD operations still have to be implemented. I think getting the whole framework up and running took longer than anticipated.

There is a major bug where the tasklist is not being shown correctly, but it is present in the data when console logged out. I'm sure this is some React timing issue where 