<h1 style="text-align:center; color:#00A9FF">Oparadis Backend<h1>

[![license](https://img.shields.io/github/license/nhn/tui.editor.svg)]()
[![NPM version](https://img.shields.io/badge/NodeJS-16.13.0-blue)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/express-4.17.1-blue)](http://expressjs.com/)
[![PostgreSQL Version](https://img.shields.io/badge/PostgreSQL-14-orange)](https://www.postgresql.org/)
[![Redis Version](https://img.shields.io/badge/Redis-6.2.6-orange)](https://redis.io/)
[![pg Version](https://img.shields.io/badge/pg-8.7.1-brightgreen)](https://www.npmjs.com/package/pg)
[![swagger-ui-express Version](https://img.shields.io/badge/swagger--ui--express-4.2.0-brightgreen)](https://www.npmjs.com/package/swagger-ui-express)
[![jsonwebtoken Version](https://img.shields.io/badge/jsonwebtoken-8.5.1-brightgreen)](https://www.npmjs.com/package/jsonwebtoken)
[![joi Version](https://img.shields.io/badge/joi-17.5.0-brightgreen)](https://joi.dev/)
[![bcrypt Version](https://img.shields.io/badge/bcrypt-5.0.1-brightgreen)](https://www.npmjs.com/package/bcrypt)

<img src="https://res.cloudinary.com/oparadis/image/upload/c_scale,w_1200/v1645523292/github/nkjcvs8ck6zohr1mxypp.jpg" style="width:700px;"/>

## 🚩 Table of Contents

- [🚩 Table of Contents](#-table-of-contents)
- [Packages](#packages)
  - [DATABASES](#databases)
  - [PACKAGES](#packages-1)
- [Why did we develop this API ?](#why-did-we-develop-this-api-)
  - [What services are we proposing](#what-services-are-we-proposing)
- [Setup](#setup)

## Packages

### DATABASES

| Name                                        | Description                              |
| ------------------------------------------- | ---------------------------------------- |
| [`PostgreSQL`](https://www.postgresql.org/) | Relational Database                      |
| [`RedisDB`](https://redis.io/)              | Distributed in-memory key–value database |

### PACKAGES

| Name                                                                     | Description                                                                                                     |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| [`pg`](https://www.npmjs.com/package/pg)                                 | Non-blocking PostgreSQL client for Node.js                                                                      |
| [`redis`](https://www.npmjs.com/package/redis)                           | Node-redis is a modern, high performance Redis client for Node.js                                               |
| [`express`](http://expressjs.com/)                                       | Fast, unopinionated, minimalist web framework for Node.js                                                       |
| [`bcrypt`](https://www.npmjs.com/package/bcrypt)                         | A library to help you hash passwords.                                                                           |
| [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken)             | An implementation of JSON Web Tokens                                                                            |
| [`joi`](https://joi.dev/)                                                | Schema description language and data validator for JavaScript                                                   |
| [`sanitizer`](https://www.npmjs.com/package/sanitizer)                   | A string sanitizer for Node.js                                                                                  |
| [`cors`](https://www.npmjs.com/package/cors)                             | Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options |
| [`swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) | Serve auto-generated swagger-ui generated API docs from express                                                 |
| [`dotenv`](https://www.npmjs.com/package/dotenv)                         | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env           |
| [`cloudinary`](https://www.npmjs.com/package/cloudinary)                 | Cloud service that offers a solution to a web application's entire image management pipeline                    |

## Why did we develop this API ?

This API was the pinacle of our bootcamp. We were asked to develop a full app with frontend and backend as a end of study project. The frontend was developed separately from the backend.
The goal of this project was to provide a way for people to experience the home-sitting.
As a matter of fact, all similar websites are only oriented to retired people. We wanted to open this type of experience to a larger group and let responsible young people to be able to enjoy this type of holidays.

### What services are we proposing

**Main features**

- **Profile Creation and edit** : Create your profile and edit it as you want.
- **Add a house profile with photos**: Create your house profile, and find a home-sitter to keep your house.
- **Add animals and plants** : Create a profile to your animals or plants that you want home-sitter to take care of.
- **Add your absences** : Add your absences to let home-sitter know when they can apply to come to your house.

## Setup

First you need to have two database local or remote.

For local with docker:

```bash
$ sudo docker run -d --name Postgres -e POSTGRES_PASSWORD=root -e POSTGRES_USER=root -p 55432:5432 --restart unless-stopped postgres
$ sudo docker run --name redisdocker -d redis -p 6379:6379 --restart unless-stopped redis
```

You'll need to create a database inside your Postgres container

```bash
$ sudo docker exec -it Postgres bash
$ psql
$ CREATE DATABASE oparadis
```

Then you need to fill your .env file with environment variables.

```
$ cp .env.example .env
```

You will need to create an account on [Cloudinary](https://cloudinary.com/) and take the cloud_name, api_key, and api_secret and add it to the .env file.

Open your .env file and add these lines to your .env file:

```
DATABASE_URL = postgresql://root:root@localhost:55432/oparadis
REDIS_URL = redis://default:root@localhost:6379
JWT_SECRET = addyourlongsecretstring
REFRESH_JWT_SECRET = addyourlongsecretstring
CLOUD_NAME = yourcloud_name
API_KEY = yourapikey
API_SECRET = yourapisecret
```

Clone `dev` branch into your personal repository. Clone it to local computer. Install node modules. Before starting development, you should check if there are any errors.

With https:

```bash
$ git clone https://github.com/MrSnakeDoc/oparadis.git
$ npm install
$ npm run dev
```

With ssh:

```bash
$ git clone git@github.com:MrSnakeDoc/oparadis.git
$ npm install
$ npm run dev
```
