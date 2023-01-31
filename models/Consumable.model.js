const { Schema, model } = require("mongoose");

const consumableSchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    owner: {type: Schema.Types.ObjectId, ref: "Spot"}
  }
);

const Consumable = model("Consumable", consumableSchema);

module.exports = Consumable;
