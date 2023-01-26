const router = require("express").Router();
const { isAuthenticated } = require("../middleware/jwt.middleware.js");
const Event = require('../models/Event.model');

// create an event
router.post('/event', isAuthenticated, (req, res) => {


});

// list events
router.get('/event', isAuthenticated, (req, res) => {


});

// particular event details
router.get('/event/:eventId', isAuthenticated, (req, res) => {
    const {eventId} = req.params;


});

// edit particular event
router.put('/event/:eventId', isAuthenticated, (req, res) => {
    const {eventId} = req.params;


});

// delete that mf
router.delete('/event/:eventId', isAuthenticated, (req, res) => {
    const {eventId} = req.params;


})


module.exports = router;
