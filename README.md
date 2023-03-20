# REST_API DOCUMENTATION

#### THE U.S. DATABASE FOR US
The database brings together information on important Departments that operate America such as laws, and budgets according to the respective departments. I aim to bring in more data and sort it to be more fluid and informational for the average reader.

### MAKING REQUESTS
- FORMAT: JSON "Content-Type:application/json"
- To make HTTP REQUESTS: GET /api/v2/agency/<TOPTIER_AGENCY_CODE>/Endpoint

The agency codes are: 
1. 015 - Department of Treasury Budget GET https://api.usaspending.gov/api/v2/agency/020/budget_function/
2. 019 - Department of State Bills GET https://api.usaspending.gov/api/v2/agency/019/
3. 020 - US Department of Agriculture Budget GET https://api.usaspending.gov/api/v2/agency/012/budget_function/

### EXAMPLES OF CODE:
    //SAMPLE DATA from US.GOV on the US Department of Agrigiculture funds according to department
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
    
    //SAMPLE DATA from US.GOV on US bills according to code
    {
        "code": "2",
        "public_law": "Emergency P.L. 117-70",
        "title": "Further Extending Government Funding Act",
        "urls": "https://www.congress.gov/117/plaws/publ70/PLAW-117publ70.pdf",
        "disaster": null
    },
	
    //SAMPLE DATA from US.GOV on the Treasury's budget according to department
    {
        "name": "General Government",
        "children": [
            {
                "name": "Central fiscal operations",
                "obligated_amount": 88457828196.26,
                "gross_outlay_amount": 88972924553.06
            },
            {
                "name": "General purpose fiscal assistance",
                "obligated_amount": 1174701414.23,
                "gross_outlay_amount": 2748505061.29
            },
            {
                "name": "Other general government",
                "obligated_amount": 402913369.06,
                "gross_outlay_amount": 415897244.88
            }
        ],
        "obligated_amount": 90035442979.55,
        "gross_outlay_amount": 92137326859.23
    },


## Coding w/in Building the API //with comments
#### File Tree:

            /lib
                /db - the Database
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
1) Repository (this one): ([https://git.generalassemb.ly/dc-wdi-node-express/api-project](https://github.com/TREYCSE/REST_API))
2) Coding Tracker: (https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=1760079138](https://docs.google.com/spreadsheets/d/1h3rOtnA9zg10dT5oqklCbmK6vP9EDftnQArKYl7rBWg/edit#gid=1699520055))

###### Versioning - We use [Semantic Versioning](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PurpleBooth/a-good-readme-template/tags) ??
###### Authors **Billie Thompson** - *Provided README Template* - [PurpleBooth](https://github.com/PurpleBooth)
