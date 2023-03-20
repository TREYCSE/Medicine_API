/*JSON REST_API PROJECT PLAN 			
repo: https://github.com/TREYCSE/REST_API			
			
2. STEPS			
1) PLAN & PREP: a) List all parts of project/everything being used b) create timeline based off steps	"
1. PLAN OUT AND BEGIN README.md (include API documentation)
"	"3. IN lib/index.js GET DATA AS JSON

import axios from 'axios';

const url = 'https://api.usaspending.gov/api/v2/agency/012/'
const fetch = async () => {
    const response = await axios.get(url);
    console.log(response.data)
}
fetch();"	
2) INTITIAL SET-UP a) Install and connect to to Mongoose, Express, Python b) connection to Mongoose c) connection to localhost/server 	1. TERMINAL: (1) CREATE A VISUAL FILE TREE (2)Installations: npm init -y, npm i --save -dev nodemon (3)Create (other) directories and files: index.js, db(connection.js, seed.js), models(), routes(inc. index), & controllers()	"2. IMPORT/EXPORT SET-UP/CONNECTION IN FILES:
(1)IN package.json - connect to nodemon
(2)IN lib/db/connection.js - connect to mongoose
(3)IN lib/index.js - import connection from connection.js & have server listen on port 4000 - start by running ""node lib/index.js"", see everything running on that port by running ""lsof -i:4000"" , and to kill what's already running for ex on 5426, run ""kill -9 5426"", and to listen run ""node ."""	"3) VERIFY CONNECTION in (1)Postman(API) (2) vs code terminal - Mongoose and nodemon (3) localhost/port

/*
for extension in vs code:
1. mongodb+srv://treyweathers:b5OSB6ReJ7lyt1Gc@cluster0.kkbxh6r.mongodb.net/admin
for terminal in vs code:
printed:
Current Mongosh Log ID: 641778856e328784d920319b
Connecting to: mongodb+srv://<credentials>@cluster0.kkbxh6r.mongodb.net/JSONREST_API?appName=mongosh+1.8.0
Using MongoDB: 5.0.15 (API Version 1)
Using Mongosh: 1.8.0
"
3) MODEL/SCHEMAS for 3rd Party API => based off API QUERY PARAMS	"1. IN lib/[model].js
Import mongoose from './connection.js' and make new shema"		
4) SEED API a)Setup b)Seeding c)verification	"1. IN lib/db/seed.js - Once models are defined, write a seed file that takes the data in
`laws.json` and and seeds it into the database."	"2) VERIFY SEEDED DATA in Mongo Shell
/* 2. npx mongosh ""mongodb+srv://cluster0.kkbxh6r.mongodb.net/JSONREST_API"" --apiVersion 1 --username treyweathers
3. password: b5OSB6ReJ7lyt1Gc
show dbs
use [db name]
show collections
"	
5) SET UP ROUTER	"1. IN lib/routes/index.js
Import connection from connection.js and declare router for routes to import in lib/index.js"	"2. IN lib/routes/[model].js & lib/controller/[model].js
Import connection from connection.js & set URL paths relative to the controller"	
6) CRUD	1. IN MAIN APP - Create a middleware to use the router & Verify GET, POST routes in Postman	"there should be endpoints for:
getting a list of records
getting one record by ID
updating a record by ID
deleting a record by ID"	
7) AUTHENTICATE & DEPLOY on Heroku	"
1. REVIEW & UPDATE README.md (include API documentation)
"
*/