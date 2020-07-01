
const mongo = require("mongoose")
const ObjectId = mongo.Schema.Types

const tableBookingSchema = mongo.Schema({

    name:String,
    email:String,
    mobile:String,
    tableName:String,
    capacity:String,
    date:String,
    time:String,
    location:String,
    bookingDate:{type:ObjectId,ref:"Reservation"}
})

mongo.model("Booking",tableBookingSchema)