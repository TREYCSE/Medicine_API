# REST_API DOCUMENTATION

#### PROJECT SUMMARY
The ideal is to find a big json file of data that you can easily seed into a mongodb database, then build a REST API (with full CRUD) around that data. 
DATABASE: USASPENDING.GOV

#### GETTING STARTED						
##### TECHNOLOGIES USED					
MongoDB, Node.js, and Expres.js	w/axios to fetch & Postman for validation of URLS	

### API FEATURES						
FORMAT:	JSON "Content-Type:application/json"
### MAKING REQUESTS						
HTTP REQUESTS	GET	/api/v2/agency/<TOPTIER_AGENCY_CODE>
### EXAMPLES OF CODE:
    //SAMPLE DATA from US.GOV on the treasury budgets according to department
    {
        "code": "012-1115",
        "name": "Wildland Fire Management, Forest Service, Agriculture",
        "children": [
            {
                "name": "Wildland Fire Management, Forest Service, Agriculture",
                "code": "012-X-1115-000",
                "obligated_amount": 1094117432.83,
                "gross_outlay_amount": 1332922878.72
            },
            {
                "name": "Wildland Fire Management, Forest Service, Agriculture",
                "code": "012-2017/2020-1115-000",
                "obligated_amount": 22950.32,
                "gross_outlay_amount": 2608102.63
            },
            {
                "name": "Wildland Fire Management, Forest Service, Agriculture",
                "code": "012-2019/2022-1115-000",
                "obligated_amount": 17097.5,
                "gross_outlay_amount": 507919.25
            },
            {
                "name": "Wildland Fire Management, Forest Service, Agriculture",
                "code": "012-2018/2021-1115-000",
                "obligated_amount": 230.16,
                "gross_outlay_amount": 92638.42
            },
            {
                "name": "Wildland Fire Management, Forest Service, Agriculture",
                "code": "012-2020/2021-1115-000",
                "obligated_amount": 0.0,
                "gross_outlay_amount": 268974.7
            }
        ],
        "obligated_amount": 1094157710.81,
        "gross_outlay_amount": 1336400513.72
    },
    
        //SAMPLE DATA from US.GOV on the statebills according to code
            {
        "code": "3",
        "public_law": "Emergency P.L. 117-103",
        "title": "Consolidated Appropriations Act, 2022",
        "urls": "https://www.congress.gov/117/bills/hr2471/BILLS-117hr2471enr.pdf",
        "disaster": null
        },


## Coding w/in Building the API //with comments
#### File Tree:

            /lib
                /db - the Databse
                    /1 seed.js - Once models are defined, write a seed file that takes the data in the json and and seeds it into the MongoDB database.
                    /2 connection.js - connecting to the Mongoose Server
                    /4 budget.json - data for USA budget
                    /5 state.json - data for USA bills
                    /6 treasury.json - data for USA treasury (they are responsible for collecting taxes, duties and monies paid to and due to the U.S.)
                /controllers
                    /1 budget.js
                    /2 state.js
                    /3 treasury.js
                /models - schemas
                    /1 budget.js
                    /2 state.js
                    /3 treasury.js
                /routes
                    /1 index.js - Import in all specified routes in the directory into this main router, export it to import in the main index.js 
                    /1 budget.js
                    /2 state.js
                    /3 treasury.js
                index.js - Import in the router


###### CONTRIBUTION GUIDELINES
Follow these Links:
1) repository: ([https://git.generalassemb.ly/dc-wdi-node-express/api-project](https://github.com/TREYCSE/REST_API))
2) Issue Tracker: ([https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=0](https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=1699520055))

###### Versioning - We use [Semantic Versioning](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PurpleBooth/a-good-readme-template/tags) ??
###### Authors **Billie Thompson** - *Provided README Template* - [PurpleBooth](https://github.com/PurpleBooth)
