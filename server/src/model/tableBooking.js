
const mongo = require("mongoose")

const tableBookingSchema = mongo.Schema({

    name:String,
    email:String,
    mobile:String,
    tableName:String,
    capacity:String,
    date:String,
    time:String
})

mongo.model("Booking",tableBookingSchema)