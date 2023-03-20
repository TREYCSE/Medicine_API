import Budget from "../models/budget.js"

const budgetController = {

index: (req, res) => {  
Budget.find({})
.then(budget => {
res.json(budget)
})
}
}

export default budgetController;