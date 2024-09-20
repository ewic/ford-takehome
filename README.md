# Project App

## Dependencies

- NodeJS
- Postgres

## Quickstart

- Install dependencies using `npm i`
- Create a database in postgres

## Longstart

### Create User using Postgres

```
CREATE DATABASE ford;
CREATE USER ford WITH ENCRYPTED PASSWORD 'mypass'
GRANT ALL PRIVILEGES ON ford TO ford
\c ford postgres
GRANT ALL ON SCHEMA public TO ford;

```