const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

const Spot = require('../models/Spot.model');
// create spot
router.post('/spots', (req, res) => {
    const { type, meal, name, tagline, location, openingTimes, menuImage, spotImage, priceLevel, description, overallRating, coffeeRating, drinkRating, foodRating, ambienceRating, veganFriendly, hasPool, coWorkingFriendly, dateFriendly, outsideSeating, wifiSpeed, hasSockets } = req.body;
    Spot.create({ type, meal, name, tagline, location, openingTimes, menuImage, spotImage, priceLevel, description, overallRating, coffeeRating, drinkRating, foodRating, ambienceRating, veganFriendly, hasPool, coWorkingFriendly, dateFriendly, outsideSeating, wifiSpeed, hasSockets, events: [], consumables: [] })
      .then(response => res.json(response))
      .catch(err => res.json(err));
});
// list spots
router.get('/spots', (req, res) => {

    Spot.find()
            // .populate('consumables')
            // .populate('events')
            .then(allSpots => res.status(200).json(allSpots))
            .catch(err => console.error(err))
});
// particular spot details
router.get('/spots/:spotId', (req, res) => {
    const {spotId} = req.params;
    console.log(spotId);
    Spot.findById(spotId)
    // .populate('consumables')
    // .populate('events')
    .then(foundSpot => res.json(foundSpot))
    .catch(err => console.log(err)) 

});
// edit particular spot
router.put('/spots/:spotId', (req, res) => {
    const {spotId} = req.params;
    const { type, meal, name, tagline, location, openingTimes, menuImage, spotImage, priceLevel, description, overallRating, coffeeRating, drinkRating, foodRating, ambienceRating, veganFriendly, hasPool, coWorkingFriendly, dateFriendly, outsideSeating, wifiSpeed, hasSockets } = req.body;


    Spot.findByIdAndUpdate(spotId, { type, meal, name, tagline, location, openingTimes, menuImage, spotImage, priceLevel, description, overallRating, coffeeRating, drinkRating, foodRating, ambienceRating, veganFriendly, hasPool, coWorkingFriendly, dateFriendly, outsideSeating, wifiSpeed, hasSockets }, {new: true})
            .then(updatedSpot => res.json(updatedSpot))
            .catch(err => console.log(err))


});
// delete particular spot

router.delete('/spots/:spotId', (req, res) => {
    const {spotId} = req.params;

    Spot.findByIdAndDelete(spotId)
            .then(deletedSpot => res.json(deletedSpot))
            .catch(err => console.log(err))
})
module.exports = router;