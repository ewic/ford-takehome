# Project App

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
GRANT ALL PRIVILEGES ON ford TO ford
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