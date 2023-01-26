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
