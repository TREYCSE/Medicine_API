import mongoose from '../db/connection.js';

const Treasury = new mongoose.Schema({
    code: String,
    name: String,
    children: Array,
    obligated_amount: Number,
    gross_outlay_amount: Number
})

export default mongoose.model("Treasury", Treasury);
/*
    {
        "code": "012-1115",
        "name": "Wildland Fire Management, Forest Service, Agriculture",
        "obligated_amount": 1094157710.81,
        "gross_outlay_amount": 1336400513.72
    },
*/