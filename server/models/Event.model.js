const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date, // is this correct?
        // required: true
    },
    signupRequired: {
        type: Boolean
    },
    signupLink: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Spot"
    }
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;
