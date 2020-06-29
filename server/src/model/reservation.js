
const mongo = require("mongoose")

const reservationSchema = mongo.Schema({

    date:{
      type:String,
      required:true
    },
    data:{
      type:Array,
      required:true
    }
})

mongo.model("Reservation",reservationSchema)