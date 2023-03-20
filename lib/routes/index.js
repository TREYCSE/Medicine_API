//import mongoose from '../db/connection.js'
import express from "express"
import budgetRouter from "./budget.js"
import stateRouter from "./state.js"
import treasuryRouter from "./treasury.js"

const router = express.Router();

router.use('/budget',budgetRouter);
router.use('/state', stateRouter);
router.use('/treasury', treasuryRouter);
router.get("/", (req,res) => {
res.send("string")
});

console.log("NO KNOWN ERROR IN THE ROUTES")

export default router;