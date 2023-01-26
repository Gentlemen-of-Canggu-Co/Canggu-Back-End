const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Spot = require('../models/Spot.model');


// create spot
router.post('/spot', isAuthenticated, (req, res) => {
    const { type, meal, name, tagline, location, openingTimes, menuImage, spotImage, priceLevel, description, overallRating, coffeeRating, drinkRating, foodRating, ambienceRating, veganFriendly, hasPool, coWorkingFriendly, dateFriendly, outsideSeating, wifiSpeed, hasSockets } = req.body;
 
    Spot.create({ type, meal, name, tagline, location, openingTimes, menuImage, spotImage, priceLevel, description, overallRating, coffeeRating, drinkRating, foodRating, ambienceRating, veganFriendly, hasPool, coWorkingFriendly, dateFriendly, outsideSeating, wifiSpeed, hasSockets, events: [], consumables: [] })
      .then(response => res.json(response))
      .catch(err => res.json(err));
});

// list spots
router.get('/spot', isAuthenticated, (req, res) => {
    Spot.find()
            .populate('consumables')
            .populate('events')
            .then(allSpots => res.json(allSpots))
            .catch(err => console.error(err))
});

// particular spot details
router.get('/spot/:spotId', isAuthenticated, (req, res) => {
    const {spotId} = req.params;

});

// edit particular spot
router.put('/spot/:spotId', isAuthenticated, (req, res) => {
    const {spotId} = req.params;

});

// delete particular spot
router.delete('/spot/:spotId', isAuthenticated, (req, res) => {
    const {spotId} = req.params;

})



module.exports = router;
