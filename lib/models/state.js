import mongoose from '../db/connection.js';

const State = new mongoose.Schema({
      code: String,
      public_law: String,
      title: String,
      urls: String,
      disaster: String
})

export default mongoose.model("State", State);