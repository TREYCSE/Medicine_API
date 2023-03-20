import mongoose from '../db/connection.js';

const Treasury = new mongoose.Schema({
    code: Number,
    name: String,
    children: Array,
    obligated_amount: Number,
    gross_outlay_amount: Number
})

export default mongoose.model("Treasury", Treasury);