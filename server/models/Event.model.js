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
    startDate: {
        type: String, // YYYY-MM-DD
        // required: true
    },
    endDate: {
        type: String, // YYYY-MM-DD
        // required: true
    },
    startTime: {
        type: String // HH:MM
    },
    endTime: {
        type: String // HH:MM
    },
    signupRequired: {
        type: Boolean
    },
    signupLink: {
        type: String
    },
    eventImage: {
        type: String,
        required: true
        // default: "https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2glMjBwYXJ0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Spot"
    }
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;