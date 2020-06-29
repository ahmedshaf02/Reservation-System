const express = require("express");
const router = express.Router();
const mongo = require("mongoose");
const Reservation = mongo.model("Reservation");
const Booking = mongo.model("Booking");

router.get("/", (req, res) => {
  res.json("sample text");
});

router.post("/tablebook", (req, res) => {
  console.log()
const {name,email,mobile,time,date,tableName,capacity} = req.body
  const booking = new Booking({
      name,
      email,
      mobile,
      tableName,
      time,
      date,
      capacity
  })
  booking.save()
    .then(data => {
      if(!data){
        res.status(422).json({error:"not booked"})
      }
      res.json(data)
    })
    .catch(err => console.log(err));
});

router.post("/createdate", (req, res) => {
  const table = new Reservation({
      date:req.body.date,
      data:req.body.data
  })
  table.save()
    .then(data => {
      if(!data){
        res.status(422).json({error:"not updated date"})
      }
      res.json(data)
    })
    .catch(err => console.log(err));
});



module.exports = router;
