import express from 'express'
import stateController from '../controllers/state.js'


const stateRouter = express.Router();

stateRouter.get('/', stateController.index)
stateRouter.get('/', stateController.showCode)
stateRouter.post('/', stateController.create)
stateRouter.put('/', stateController.edit)
stateRouter.delete('/', stateController.delete)

export default stateRouter;