# TODO

## Setup

1. **Prisma ORM**

   - [ ] Install Prisma as a dependency: `npm install @prisma/client`
   - [ ] Set up `prisma/schema.prisma` file to define models.

2. **Database connection with Postgres**

   - [ ] Install PostgreSQL on your local machine or use a cloud-hosted Postgres instance.
   - [ ] Set up a `.env` file to configure your PostgreSQL connection string:
     ```
     DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
     ```
   - [ ] Update `prisma/schema.prisma` to use the Postgres provider:
     ```prisma
     datasource db {
       provider = "postgresql"
       url      = env("DATABASE_URL")
     }
     ```
   - [ ] Run `npx prisma migrate dev` to create the initial migration and sync your database.

3. **Docker**
   - [ ] Create a `Dockerfile` for the application:
     ```dockerfile
     FROM node:14
     WORKDIR /app
     COPY package*.json ./
     RUN npm install
     COPY . .
     EXPOSE 3000
     CMD ["npm", "start"]
     ```
   - [ ] Create a `docker-compose.yml` file to spin up both the Postgres database and your Node.js app:
     ```yaml
     version: "3.8"
     services:
       db:
         image: postgres
         environment:
           POSTGRES_USER: user
           POSTGRES_PASSWORD: password
           POSTGRES_DB: mydb
         ports:
           - "5432:5432"
       app:
         build: .
         ports:
           - "3000:3000"
         depends_on:
           - db
     ```

## API Endpoints

1. **GET accounts**

   - [ ] Create a GET `/accounts` route in your API to retrieve all accounts.
   - [ ] Test the route with Postman

2. **POST transactions**

   - [ ] Create a POST `/transactions` route to add a new transaction.
   - [ ] Validate the request payload for required fields (e.g., accountId, amount, etc.).
   - [ ] Test the route with Postman

3. **POST account creation**
   - [ ] Create a POST `/accounts` route to add a new account.
   - [ ] Validate the request payload for required fields (e.g., account name, type, etc.).
   - [ ] Test the route with Postman
