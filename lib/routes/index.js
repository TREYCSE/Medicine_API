//import mongoose from '../db/connection.js'
import express from "express"
import budgetRouter from "./budget.js"
import stateRouter from "./state.js"
import treasuryRouter from "./treasury.js"

const routers = express.Router();

routers.use('/budget',budgetRouter);
routers.use('/state', stateRouter);
routers.use('/treasury', treasuryRouter);
routers.get("/", (req,res) => {
res.send("string")
});

console.log("NO KNOWN ERROR IN THE ROUTES")

export default routers;