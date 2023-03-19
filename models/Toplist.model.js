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
    firstPlaceId: {
        type: String
    },
    firstPlaceImage: {
        type: String
    },
    firstPlaceName:{
        type: String
    },
    firstPlaceTagline:{
        type: String
    },
    firstPlaceDescription:{
        type: String
    },
    firstPlacePriceLevel:{
        type: String
    },
    firstPlaceCoffeeRating:{
        type: Number
    },
    firstPlaceFoodRating:{
        type: Number
    },
    firstPlaceAmbienceRating:{
        type: Number
    },
    firstPlaceConsumableTitle:{
        type: String
    },
    firstPlaceConsumableTagline:{
        type: String
    },
    firstPlaceConsumablePrice:{
        type: Number
    },
    firstPlaceConsumableRating:{
        type: String
    },
    firstPlaceConsumableImage: {
        type: String
    },
    secondPlaceId: {
        type: String
    },
    secondPlaceImage: {
        type: String
    },
    secondPlaceName:{
        type: String
    },
    secondPlaceTagline:{
        type: String
    },
    secondPlaceDescription:{
        type: String
    },
    secondPlacePriceLevel:{
        type: String
    },
    secondPlaceCoffeeRating:{
        type: Number
    },
    secondPlaceFoodRating:{
        type: Number
    },
    secondPlaceAmbienceRating:{
        type: Number
    },
    secondPlaceConsumableTitle:{
        type: String
    },
    secondPlaceConsumableTagline:{
        type: String
    },
    secondPlaceConsumablePrice:{
        type: Number
    },
    secondPlaceConsumableRating:{
        type: String
    },
    secondPlaceConsumableImage: {
        type: String
    },
    thirdPlaceId: {
        type: String
    },
    thirdPlaceImage: {
        type: String
    },
    thirdPlaceName:{
        type: String
    },
    thirdPlaceTagline:{
        type: String
    },
    thirdPlaceDescription:{
        type: String
    },
    thirdPlacePriceLevel:{
        type: String
    },
    thirdPlaceCoffeeRating:{
        type: Number
    },
    thirdPlaceFoodRating:{
        type: Number
    },
    thirdPlaceAmbienceRating:{
        type: Number
    },
    thirdPlaceConsumableTitle:{
        type: String
    },
    thirdPlaceConsumableTagline:{
        type: String
    },
    thirdPlaceConsumablePrice:{
        type: Number
    },
    thirdPlaceConsumableRating:{
        type: String
    },
    thirdPlaceConsumableImage: {
        type: String
    },
    fourthPlaceId: {
        type: String
    },
    fourthPlaceImage: {
        type: String
    },
    fourthPlaceName:{
        type: String
    },
    fourthPlaceTagline:{
        type: String
    },
    fourthPlaceDescription:{
        type: String
    },
    fourthPlacePriceLevel:{
        type: String
    },
    fourthPlaceCoffeeRating:{
        type: Number
    },
    fourthPlaceFoodRating:{
        type: Number
    },
    fourthPlaceAmbienceRating:{
        type: Number
    },
    fourthPlaceConsumableTitle:{
        type: String
    },
    fourthPlaceConsumableTagline:{
        type: String
    },
    fourthPlaceConsumablePrice:{
        type: Number
    },
    fourthPlaceConsumableRating:{
        type: String
    },
    fourthPlaceConsumableImage: {
        type: String
    },
    fifthPlaceId: {
        type: String
    },
    fifthPlaceImage: {
        type: String
    },
    fifthPlaceName:{
        type: String
    },
    fifthPlaceTagline:{
        type: String
    },
    fifthPlaceDescription:{
        type: String
    },
    fifthPlacePriceLevel:{
        type: String
    },
    fifthPlaceCoffeeRating:{
        type: Number
    },
    fifthPlaceFoodRating:{
        type: Number
    },
    fifthPlaceAmbienceRating:{
        type: Number
    },
    fifthPlaceConsumableTitle:{
        type: String
    },
    fifthPlaceConsumableTagline:{
        type: String
    },
    fifthPlaceConsumablePrice:{
        type: Number
    },
    fifthPlaceConsumableRating:{
        type: String
    },
    fifthPlaceConsumableImage: {
        type: String
    },
    sixthPlaceId: {
        type: String
    },
    sixthPlaceImage: {
        type: String
    },
    sixthPlaceName:{
        type: String
    },
    sixthPlaceTagline:{
        type: String
    },
    sixthPlaceDescription:{
        type: String
    },
    sixthPlacePriceLevel:{
        type: String
    },
    sixthPlaceCoffeeRating:{
        type: Number
    },
    sixthPlaceFoodRating:{
        type: Number
    },
    sixthPlaceAmbienceRating:{
        type: Number
    },
    sixthPlaceConsumableTitle:{
        type: String
    },
    sixthPlaceConsumableTagline:{
        type: String
    },
    sixthPlaceConsumablePrice:{
        type: Number
    },
    sixthPlaceConsumableRating:{
        type: String
    },
    sixthPlaceConsumableImage: {
        type: String
    },
    seventhPlaceId: {
        type: String
    },
    seventhPlaceImage: {
        type: String
    },
    seventhPlaceName:{
        type: String
    },
    seventhPlaceTagline:{
        type: String
    },
    seventhPlaceDescription:{
        type: String
    },
    seventhPlacePriceLevel:{
        type: String
    },
    seventhPlaceCoffeeRating:{
        type: Number
    },
    seventhPlaceFoodRating:{
        type: Number
    },
    seventhPlaceAmbienceRating:{
        type: Number
    },
    seventhPlaceConsumableTitle:{
        type: String
    },
    seventhPlaceConsumableTagline:{
        type: String
    },
    seventhPlaceConsumablePrice:{
        type: Number
    },
    seventhPlaceConsumableRating:{
        type: String
    },
    seventhPlaceConsumableImage: {
        type: String
    },
    eigthPlaceId: {
        type: String
    },
    eigthPlaceImage: {
        type: String
    },
    eigthPlaceName:{
        type: String
    },
    eigthPlaceTagline:{
        type: String
    },
    eigthPlaceDescription:{
        type: String
    },
    eigthPlacePriceLevel:{
        type: String
    },
    eigthPlaceCoffeeRating:{
        type: Number
    },
    eigthPlaceFoodRating:{
        type: Number
    },
    eigthPlaceAmbienceRating:{
        type: Number
    },
    eigthPlaceConsumableTitle:{
        type: String
    },
    eigthPlaceConsumableTagline:{
        type: String
    },
    eigthPlaceConsumablePrice:{
        type: Number
    },
    eigthPlaceConsumableRating:{
        type: String
    },
    eigthPlaceConsumableImage: {
        type: String
    },
    ninthPlaceId: {
        type: String
    },
    ninthPlaceImage: {
        type: String
    },
    ninthPlaceName:{
        type: String
    },
    ninthPlaceTagline:{
        type: String
    },
    ninthPlaceDescription:{
        type: String
    },
    ninthPlacePriceLevel:{
        type: String
    },
    ninthPlaceCoffeeRating:{
        type: Number
    },
    ninthPlaceFoodRating:{
        type: Number
    },
    ninthPlaceAmbienceRating:{
        type: Number
    },
    ninthPlaceConsumableTitle:{
        type: String
    },
    ninthPlaceConsumableTagline:{
        type: String
    },
    ninthPlaceConsumablePrice:{
        type: Number
    },
    ninthPlaceConsumableRating:{
        type: String
    },
    ninthPlaceConsumableImage: {
        type: String
    },
    tenthPlaceId: {
        type: String
    },
    tenthPlaceImage: {
        type: String
    },
    tenthPlaceName:{
        type: String
    },
    tenthPlaceTagline:{
        type: String
    },
    tenthPlaceDescription:{
        type: String
    },
    tenthPlacePriceLevel:{
        type: String
    },
    tenthPlaceCoffeeRating:{
        type: Number
    },
    tenthPlaceFoodRating:{
        type: Number
    },
    tenthPlaceAmbienceRating:{
        type: Number
    },
    tenthPlaceConsumableTitle:{
        type: String
    },
    tenthPlaceConsumableTagline:{
        type: String
    },
    tenthPlaceConsumablePrice:{
        type: Number
    },
    tenthPlaceConsumableRating:{
        type: String
    },
    tenthPlaceConsumableImage: {
        type: String
    }

  }
);

const Toplist = model("Toplist", toplistSchema);

module.exports = Toplist;