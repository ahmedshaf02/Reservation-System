const express = require("express");
const router = express.Router();
const mongo = require("mongoose");
const Reservation = mongo.model("Reservation");
const Booking = mongo.model("Booking");
const nodemailer = require("nodemailer")
const sendgridTransport = require("nodemailer-sendgrid-transport")

const transport = nodemailer.createTransport(sendgridTransport({
    auth:{
      api_key: "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"
    }
}))

router.get("/", (req, res) => {
  res.json("sample text");
});

router.post("/tablebook", (req, res) => {
  console.log(req.body)
  const {name,email,mobile,time,date,tableName,capacity,location,id,updateData} = req.body

  Reservation.updateOne({_id:id},{$set:{"data":updateData}})
  .then(data=>{
    if(!data){
      res.status(422).json({error:"not booked try again"})
    }

      const booking = new Booking({
          name,
          email,
          mobile,
          tableName,
          time,
          date,
          capacity,
          bookingDate:id,
          location
      })
      booking.save()
        .then(data => {
          if(!data){
            res.status(422).json({error:"not booked"})
          }

        transport.sendMail({
          to:email,
          from:"noreplyshwarmaclub@gmail.com",
          subject:"table booking confirmation email",
          html:`
              <h2>Thank you for booking with us</h2>
              <h4>
              you have booked ${tableName} for ${capacity} peopele on date 
              ${date} for ${location} location.
              </h4>
          `
        })
        .then(email=>console.log(email))
        .catch(err=>console.log(err))

          res.json(data)
          console.log(data)
        })
        .catch(err => console.log(err));
  })
  .catch(err=>console.log(err))
});



router.post("/finddate", (req, res) => {
  console.log(req.body)
    Reservation.find({date:req.body.date})
    .then(data => {
      if(!data){
        res.status(422).json({error:"not found date"})
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
