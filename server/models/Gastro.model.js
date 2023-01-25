const { Schema, model } = require("mongoose");

const gastroSchema = new Schema(
  {
    type: {
        type: String,
        enum: ['Cafe', 'Restaurant', 'Bar'],
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    openingTimes: {
        type: String, // I'm gonna require the user to use actual times here by utilizing the same methodology as our password verifier (aka opens at 10:30, rather than 1988392)
    },
    menuImage: {
        type: String
    },
    outsideImage: {
        type: String
    },
    menuImage: {
        type: String
    },
    priceLevel: {
        type: String,
        enum: ['$', '$$', '$$$']
    },
    description: {
        type: String
    },
    overallRating: {
        type: Number
    },
    coffeeRating: {
        type: Number
    },
    drinkRating: {
        type: Number
    },
    foodRating: {
        type: Number
    },
    ambienceRating: {
        type: Number
    },
    veganFriendly: {
        type: Boolean
    },
    hasPool: {
        type: Boolean
    }
}
);

const User = model("User", userSchema);

module.exports = User;
