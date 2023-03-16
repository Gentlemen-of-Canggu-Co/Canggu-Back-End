const { Schema, model } = require("mongoose");

const toplistSchema = new Schema(
  {
    title: {
        type: String,
        required: true
    },
    heroImage: {
        type: String,
        required: true
    },
    introText: {
        type: String,
    },
    firstPlaceSpotId: {
        type: String
    },
    firstPlaceConsumableId: {
        type: String
    },
    firstPlaceText: {
        type: String
    },
    secondPlaceSpotId: {
        type: String
    },
    secondPlaceConsumableId: {
        type: String
    },
    secondPlaceText: {
        type: String
    },
    thirdPlaceSpotId: {
        type: String
    },
    thirdPlaceConsumableId: {
        type: String
    },
    thirdPlaceText: {
        type: String
    },
    fourthPlaceSpotId: {
        type: String
    },
    fourthPlaceConsumableId: {
        type: String
    },
    fourthPlaceText: {
        type: String
    },
    fifthPlaceSpotId: {
        type: String
    },
    fifthPlaceConsumableId: {
        type: String
    },
    fifthPlaceText: {
        type: String
    },
    sixthPlaceSpotId: {
        type: String
    },
    sixthPlaceConsumableId: {
        type: String
    },
    sixthPlaceText: {
        type: String
    },
    seventhPlaceSpotId: {
        type: String
    },
    seventhPlaceConsumableId: {
        type: String
    },
    seventhPlaceText: {
        type: String
    },
    eigthPlaceSpotId: {
        type: String
    },
    eigthPlaceConsumableId: {
        type: String
    },
    eigthPlaceText: {
        type: String
    },
    ninthPlaceSpotId: {
        type: String
    },
    ninthPlaceConsumableId: {
        type: String
    },
    ninthPlaceText: {
        type: String
    },
    tenthPlaceSpotId: {
        type: String
    },
    tenthPlaceConsumableId: {
        type: String
    },
    tenthPlaceText: {
        type: String
    }
  }
);

const Toplist = model("Toplist", toplistSchema);

module.exports = Toplist;