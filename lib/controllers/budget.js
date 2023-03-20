/*
"there should be endpoints for:
getting a list of records
getting one record by ID
updating a record by ID
deleting a record by ID"

*/
import budget from "../models/budget.js"

const budgetController = {

index: (req, res) => {  
Budget.find({})
.then(budget => {
res.json(budget)
})
},
showYear: (req, res) => {
Budget.find({year: req.params.year})
.then(budget => {
res.json(budget)
})
},
showName: (req, res) => {
Budget.find({name: req.params.name})
.then(budget => {
res.json(budget)
})
},
create: (req, res) => {
budget.create(req.body)
.then(budget => {
res.json(budget)
})
},
edit: (req, res) => {
Budget.findOneAndUpdate({name: req.params.name}, req.body)
.then(budget => {
res.json(budget)
})
},
delete: (req, res) => {
Budget.findOneAndDelete({name: req.params.name})
.then(budget => {
res.json(budget)
})
}
}

export default budgetController