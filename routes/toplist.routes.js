const router = require("express").Router()
const { isAuthenticated } = require("../middleware/jwt.middleware.js");

const Toplist = require("../models/Toplist.model")

//create new toplist

router.post("/toplists", (req, res) => {
    const {
        title,
        introText,
        firstPlaceSpotId,
        firstPlaceConsumableId,
        firstPlaceText,
        secondPlaceSpotId,
        secondPlaceConsumableId,
        secondPlaceText,
        thirdPlaceSpotId,
        thirdPlaceConsumableId,
        thirdPlaceText,
        fourthPlaceSpotId,
        fourthPlaceConsumableId,
        fourthPlaceText,
        fifthPlaceSpotId,
        fifthPlaceConsumableId,
        fifthPlaceText,
        sixthPlaceSpotId,
        sixthPlaceConsumableId,
        sixthPlaceText,
        seventhPlaceSpotId,
        seventhPlaceConsumableId,
        seventhPlaceText,
        eigthPlaceSpotId,
        eigthPlaceConsumableId,
        eigthPlaceText,
        ninthPlaceSpotId,
        ninthPlaceConsumableId,
        ninthPlaceText,
        tenthPlaceSpotId,
        tenthPlaceConsumableId,
        tenthPlaceText
    } = req.body

    Toplist.create({
        title,
        introText,
        firstPlaceSpotId,
        firstPlaceConsumableId,
        firstPlaceText,
        secondPlaceSpotId,
        secondPlaceConsumableId,
        secondPlaceText,
        thirdPlaceSpotId,
        thirdPlaceConsumableId,
        thirdPlaceText,
        fourthPlaceSpotId,
        fourthPlaceConsumableId,
        fourthPlaceText,
        fifthPlaceSpotId,
        fifthPlaceConsumableId,
        fifthPlaceText,
        sixthPlaceSpotId,
        sixthPlaceConsumableId,
        sixthPlaceText,
        seventhPlaceSpotId,
        seventhPlaceConsumableId,
        seventhPlaceText,
        eigthPlaceSpotId,
        eigthPlaceConsumableId,
        eigthPlaceText,
        ninthPlaceSpotId,
        ninthPlaceConsumableId,
        ninthPlaceText,
        tenthPlaceSpotId,
        tenthPlaceConsumableId,
        tenthPlaceText
    })
        .then((response) =>{
            console.log(response)
            res.json(response)})
            .catch((err) => res.json(err))
})


//get all toplists
router.get("/toplists", (req, res) => {
    Toplist.find()
        .then((allToplists) => res.status(200).json(allToplists))
        .catch((err) => console.error(err))
})


//get particular toplist
router.get("/toplists/:toplistId", (req, res) => {
    const { toplistId } = req.params
    console.log(toplistId)
    Toplist.findById(toplistId)
        .then((foundToplist) => res.json(foundToplist))
        .catch((err) => console.log(err))
})

//edit particular toplist
router.put("/toplists/:toplistId", (req, res) => {
    const { toplistId } = req.params
    const {
        title,
        introText,
        firstPlaceSpotId,
        firstPlaceConsumableId,
        firstPlaceText,
        secondPlaceSpotId,
        secondPlaceConsumableId,
        secondPlaceText,
        thirdPlaceSpotId,
        thirdPlaceConsumableId,
        thirdPlaceText,
        fourthPlaceSpotId,
        fourthPlaceConsumableId,
        fourthPlaceText,
        fifthPlaceSpotId,
        fifthPlaceConsumableId,
        fifthPlaceText,
        sixthPlaceSpotId,
        sixthPlaceConsumableId,
        sixthPlaceText,
        seventhPlaceSpotId,
        seventhPlaceConsumableId,
        seventhPlaceText,
        eigthPlaceSpotId,
        eigthPlaceConsumableId,
        eigthPlaceText,
        ninthPlaceSpotId,
        ninthPlaceConsumableId,
        ninthPlaceText,
        tenthPlaceSpotId,
        tenthPlaceConsumableId,
        tenthPlaceText
    } = req.body

    Toplist.findByIdAndUpdate(
        toplistId,
        {
            title,
        introText,
        firstPlaceSpotId,
        firstPlaceConsumableId,
        firstPlaceText,
        secondPlaceSpotId,
        secondPlaceConsumableId,
        secondPlaceText,
        thirdPlaceSpotId,
        thirdPlaceConsumableId,
        thirdPlaceText,
        fourthPlaceSpotId,
        fourthPlaceConsumableId,
        fourthPlaceText,
        fifthPlaceSpotId,
        fifthPlaceConsumableId,
        fifthPlaceText,
        sixthPlaceSpotId,
        sixthPlaceConsumableId,
        sixthPlaceText,
        seventhPlaceSpotId,
        seventhPlaceConsumableId,
        seventhPlaceText,
        eigthPlaceSpotId,
        eigthPlaceConsumableId,
        eigthPlaceText,
        ninthPlaceSpotId,
        ninthPlaceConsumableId,
        ninthPlaceText,
        tenthPlaceSpotId,
        tenthPlaceConsumableId,
        tenthPlaceText
        },
        { new: true }
    )
        .then((updatedToplist) => res.json(updatedToplist))
        .catch((err) => console.log(err))
})

//delete particular toplist
router.delete("toplists/:toplistId", (req, res) => {
    const { toplistId } = req.params

    Toplist.findByIdAndDelete(toplistId)
        .then((deletedToplist) => res.json(deletedToplist))
        .catch((err) => console.log(err))
})

module.exports = router