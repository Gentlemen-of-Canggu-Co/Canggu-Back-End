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
            .populate('consumables')
            // .populate('events')
            .then(allSpots => res.json(allSpots))
            .catch(err => console.error(err))
});

// particular spot details
router.get('/spots/:spotId', (req, res) => {
    const {spotId} = req.params;

    Spot.findById(spotId)
    // .populate('consumables')
    .then(foundProject => res.json(foundProject))
    .catch(err => console.log(err)) 

});

// edit particular spot
router.put('/spots/:spotId', isAuthenticated, (req, res) => {
    const {spotId} = req.params;

});

// delete particular spot
router.delete('/spots/:spotId', isAuthenticated, (req, res) => {
    const {spotId} = req.params;

})



module.exports = router;
