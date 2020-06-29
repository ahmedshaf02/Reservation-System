
const mongo  = require("mongoose")
const express  = require("express")
const app = express()
const cors = require("cors")
const PORT = 4040

const mongoUrl = "mongodb+srv://ahmedshaf:GaUjihNXNFamn3mi@cluster0-s3efd.mongodb.net/Reservation-System?retryWrites=true&w=majority"

mongo.connect(mongoUrl,{
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(connect=>console.log("mongoDb connect"))
.catch(err=>console.log("error",err))

require("./model/reservation")
require("./model/tableBooking")
app.use(cors())
app.use(express.json())
app.use(require("./routes/reservationDetails"))

app.listen(PORT,()=>{
console.log("server is running on port ",PORT)
})
