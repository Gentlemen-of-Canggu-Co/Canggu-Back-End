const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
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
