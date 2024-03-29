const { Schema, model } = require("mongoose");

const spotSchema = new Schema(
  {
    type: {
        type: String,
        enum: ['Cafe', 'Restaurant', 'Bar'],
        required: true
    },
    meal: {
        type: [String],
        enum: ["Breakfast", "Brunch", "Lunch", "Dinner", "Late Night Food", "Drinks", "Sweets"]    },
    cuisine: {
        type: [String],
        enum: ["Indonesian", "Italian", "Burgers", "Ramen", "Smoothie Bowls", "Desserts", "Asian", "Sandwiches", "Salads", "Poke Bowls", "Health Food", "Pizza", "Middle Eastern", "Pasta", "Wraps"]    },
    name: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    location: {
        type: String,
        // required: true
    },
    openingTimes: { // Lets make this a dropdown?
        type: String
    },
    menuImage: {
        type: String
    },
    spotImage: {
        type: String,
        // required: true
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
    },
    coWorkingFriendly: {
        type: Boolean
    },
    dateFriendly: {
        type: Boolean
    },
    outsideSeating: {
        type: Boolean
    },
    wifiSpeed: {
        type: Number
    },
    hasSockets: {
        type: Boolean
    },
    locallyOwned: {
        type: Boolean
    },
    events: [{ type: Schema.Types.ObjectId, ref: "Event" }],
    consumables: [{ type: Schema.Types.ObjectId, ref: "Consumable" }]
}
);

const Spot = model("Spot", spotSchema);

module.exports = Spot;
