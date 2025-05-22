import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema(
{
  question: 
  {
    type: String,
    required: true
  },
  answer: 
  {
    type: String,
    required: true
  },
  timestamp: 
  {
    type: Date,
    default: Date.now
  },
});

const Query = mongoose.model('Query', QuerySchema);

export default Query;
