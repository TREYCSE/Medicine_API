import express from 'express'
import treasuryController from '../controllers/treasury.js'


const treasuryRouter = express.Router();

treasuryRouter.get('/', treasuryController.index)

export default treasuryRouter;