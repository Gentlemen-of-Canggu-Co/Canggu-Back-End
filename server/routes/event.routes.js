const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const mongoose = require("mongoose");
const Event = require("../models/Event.model");
const Spot = require("../models/Spot.model");
const fileUploader = require("../config/cloudinary.config");
// const cloudinary = require('../utils/cloudinary')


// create event
router.post("/events", (req, res) => {
  const {
    name,
    description,
    price,
    startDate, 
    endDate, 
    startTime, 
    endTime,
    signupRequired,
    signupLink,
    eventImage,
    ownerId,
  } = req.body;

  // try{

  //   if(eventImage)
  // }

  Event.create({
    name,
    description,
    price,
    startDate, 
    endDate, 
    startTime, 
    endTime,
    signupRequired,
    signupLink,
    eventImage,
    owner: ownerId,
  })
    .then((newEvent) => {
      return Spot.findByIdAndUpdate(ownerId, {
        $push: { events: newEvent._id },
      });
    })
    .then((response) => res.json(response))
    .catch((err) => res.status(err));
});


router.post("/upload", fileUploader.single("eventImage"), (req, res, next) => {
  // console.log("file is: ", req.file)
 
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }

  res.json({ fileUrl: req.file.path });
});

// get all events
router.get("/events", (req, res) => {
  Event.find()
    .then((allEvents) => res.json(allEvents))
    .catch((err) => console.error(err));
});

// particular event details
router.get("/events/:eventId", (req, res) => {
  const { eventId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Event.findById(eventId)
    .then((foundEvent) => res.json(foundEvent)
    )
    .catch((err) => console.log(err));
});

// edit particular event
router.put("/events/:eventId", (req, res) => {
  const { eventId } = req.params;
  const { name, description, price, startDate, endDate, startTime, endTime, signupRequired, signupLink } =
    req.body;
    

  Event.findByIdAndUpdate(
    eventId,
    { name, description, price, startDate, endDate, startTime, endTime, signupRequired, signupLink },
    { new: true }
  )
    .then((updatedEvent) => res.json(updatedEvent))
    .catch((err) => console.log(err));
});

// delete particular event
router.delete("/events/:eventId", (req, res) => {
  const { eventId } = req.params;

  Event.findByIdAndDelete(eventId)
    .then((deletedEvent) => res.json(deletedEvent))
    .catch((err) => console.log(err));
});

module.exports = router;
