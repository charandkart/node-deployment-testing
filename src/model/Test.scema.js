import { model, Schema } from "mongoose";

const TestSchema = new Schema({
  name: {
    type: String,
  },

  timestamp: {
    type: Date,
    default: Date.now(),
  },
});

export const Test = model("model1", TestSchema);
