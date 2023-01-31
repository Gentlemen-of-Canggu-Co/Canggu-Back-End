const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Consumable = require("../models/Consumable.model");
const Spot = require("../models/Spot.model");

router.post("/consumable", (req, res) => {
  const { name, tagline, price, rating, image, ownerId } = req.body;

  Consumable.create({ name, tagline, price, rating, image, owner: ownerId })
    .then((newConsumable) => {
      return Spot.findByIdAndUpdate(ownerId, {
        $push: { consumables: newConsumable._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.status(err));
});

router.get("/consumable/:consumableId", (req, res) => {
  const { consumableId } = req.params;

  Consumable.findById(consumableId)
          .then(foundConsumable => res.json(foundConsumable))
          .catch(err => console.log(err))
})

router.delete("/consumable/:consumableId", (req, res) => {
  const { consumableId } = req.params;


  Consumable.findByIdAndDelete(consumableId)
    .then((deletedConsumable) => res.json(deletedConsumable))
    .catch((err) => console.log(err));
});

module.exports = router;
