import { model, Schema } from "mongoose";

const TestSchema = new Schema({
  name: {
    type: String,
  },
  update_count: {
    type: Number,
    default: 0,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
  modified_on: {
    type: Date,
    default: Date.now(),
  },
});

export const Test = model("model1", TestSchema);
