# REST_API DOCUMENTATION

DATABASE: USASPENDING.GOV
JSON REST_API DOCUMENTATION PLAN	

#### PROJECT SUMMARY: The ideal is to find a big json file of data that you can easily seed into a mongodb database, then build a REST API (with full CRUD) around that data.   

#### GETTING STARTED						
##### TECHNOLOGIES						
MongoDB, Node.js, and Expres.js	w/axios to fetch & Postman - for validation of URLS	Swagger - API tester	Authentication of API - HTTP or OAuth	Heroku - DEPLOYING	
### API FEATURES						
FORMAT:	JSON "Content-Type:application/json"
### MAKING REQUESTS						
HTTP REQUESTS	GET	/api/v2/agency/<TOPTIER_AGENCY_CODE>
### EXAMPLES OF CODE:
                                    {
                                      ""options"": [
                                        {
                                          ""id"": ""310M200US42660"",
                                          ""name"": ""Seattle Metro Area (WA)"",
                                          ""type"": ""regions.msa""
                                        },
                                        {
                                          ""id"": ""1600000US5363000"",
                                          ""name"": ""Seattle, WA"",
                                          ""type"": ""regions.place""
                                        }
                                      ]
                                    }"	"var request = require('request');

                                    request({
                                      method: 'GET',
                                      url: 'https://private-anon-916318c26a-odn.apiary-mock.com/suggest/v1/type',
                                      headers: {
                                        'X-App-Token': 'cQovpGcdUT1CSzgYk0KPYdAI0'
                                      }}, function (error, response, body) {
                                      console.log('Status:', response.statusCode);
                                      console.log('Headers:', JSON.stringify(response.headers));
                                      console.log('Response:', body);
                                    });"	



## CODING W/IN BUILDING THE API //with comments
#### File Tree:

            /lib
                /db - the Databse
                    /1 seed.js - seeding the data to the MongoDB database
                    /2 connection.js - connecting to the Mongoose Server
                    /4 budget.json
                    /5 state.json
                    /6 treasury.json
                /controllers
                    /1 budget.js
                    /2 state.js
                    /3 treasury.js
                /models - schemas
                    /1 budget.js
                    /2 state.js
                    /3 treasury.js
                /routes
                    /1 index.js
                    /1 budget.js
                    /2 state.js
                    /3 treasury.js
                index.js


###### CONTRIBUTION GUIDELINES
Follow these Links:
1) repository: ([https://git.generalassemb.ly/dc-wdi-node-express/api-project](https://github.com/TREYCSE/REST_API))
2) Issue Tracker: ([https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=0](https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=1699520055))

###### Versioning - We use [Semantic Versioning](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PurpleBooth/a-good-readme-template/tags) ??
###### Authors **Billie Thompson** - *Provided README Template* - [PurpleBooth](https://github.com/PurpleBooth)
