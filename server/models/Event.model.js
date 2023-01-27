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
        default: "https://img.freepik.com/premium-vector/red-beer-pong-pyramyd-illustration-plastic-cups-ball-with-splashing-beer-traditional-party-drinking-game_501173-311.jpg?w=2000"
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Spot"
    }
  }
);

const Event = model("Event", eventSchema);

module.exports = Event;