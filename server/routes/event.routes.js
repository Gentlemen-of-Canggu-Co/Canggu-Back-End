const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Event = require('../models/Event.model');
const Spot = require('../models/Spot.model');

// create event
router.post('/events', (req, res) => {
    const { name, description, price, date, signupRequired, signupLink, eventImage, ownerId } = req.body;
   
    Event.create({ name, description, price, date, signupRequired, signupLink, eventImage, owner: ownerId })
      .then(newEvent => {
        return Spot.findByIdAndUpdate(ownerId, { $push: { events: newEvent._id } } );
      })
      .then(response => res.json(response))
      .catch(err => res.status(err));
  });

// get all events
router.get('/events', (req, res) => {

    Event.find()
            .then(allEvents => res.json(allEvents))
            .catch(err => console.error(err))
});


// particular event details
router.get('/events/:eventId', (req, res) => {
    const {eventId} = req.params;

    Event.findById(eventId)
    .then(foundEvent => res.json(foundEvent))
    .catch(err => console.log(err)) 

});

// edit particular event
router.put('/events/:eventId', (req, res) => {
    const {eventId} = req.params;
    const { name, description, price, date, signupRequired, signupLink } = req.body;

    Event.findByIdAndUpdate(eventId, { name, description, price, date, signupRequired, signupLink }, {new: true})
         .then(updatedEvent => res.json(updatedEvent))
         .catch(err => console.log(err))

});

// delete particular event
router.delete('/events/:eventId', (req, res) => {
    const {eventId} = req.params;

    Event.findByIdAndDelete(eventId)
            .then(deletedEvent => res.json(deletedEvent))
            .catch(err => console.log(err))
})


module.exports = router;
