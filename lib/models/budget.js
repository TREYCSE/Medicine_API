import mongoose from '../db/connection.js';

const Budget = new mongoose.Schema({
    name: String,
    children: Array,
    obligated_amount: Number,
    gross_outlay_amount: Number
})

export default mongoose.model("Budget", Budget);