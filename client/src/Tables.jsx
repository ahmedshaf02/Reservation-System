


import React, { useState } from "react";
import "./styles.css"


const FormBooking =(props)=>{
  const {chair, isBooked} = props.chairs
  const chairs = []
  for(let i=0; i<chair;i++){
    chairs.push(

       <div  className="col-6 col-md-4 chairs">
            <div>
              {
                isBooked ?(

                  <i className="fa fa-circle"></i>
                  ):(
                    <i className="fa fa-circle-o "></i>

                )
              }
            </div>
        </div>
    )
    
  }
  return (
    <>
      {chairs}
    </>
  )
}

export default FormBooking