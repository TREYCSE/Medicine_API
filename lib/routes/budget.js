import express from 'express'
import budgetController from '../controllers/budget.js'


const budgetRouter = express.Router();

budgetRouter.get('/', budgetController.index)

export default budgetRouter;