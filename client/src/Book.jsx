
import React, { useState, useContext } from "react";
import "./styles.css"
import Navigate from "./Navigate"
import FormBooking from "./FormBooking"
import Tables from "./Tables"
import {AppContext} from "./AppContextProvider"
import { Redirect,Link } from "react-router-dom";


const Book =()=>{
 
  const {tableData,addBooking} = useContext(AppContext)
  // console.log(tableData)
 
  const handleBooking = (data,table)=>{
    
    addBooking({
      id:data._id,
      date:data.date,
      tableName:table.name,
      capacity:table.chair,
      time:table.time,
      location:table.location
    })
    
    if(data.isBooked){
      return alert("table is booked")
    }
    // console.log(id,data)
    fetch("https://74lm2.sse.codesandbox.io/reserve",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      // body:JSON.stringify({table:data,id})
    })
    .then(data=>data.json())
    .then(data=>{
      // console.log(data)
      
    })

    
  }
  return (
    <>
      <div className="container">
        <Navigate/>
        <div className="mt-5">
          <FormBooking/>
          <div className=" container mt-5">
            {
              tableData &&
            <div className="text-left ml-4">
                    <h5>please click table to choose</h5>
                    <i className="fa fa-circle "></i>Available
                    <i className="fa fa-circle-o "></i>Unavailable
            </div>
            }
            <div className="table-center">


                  <div className="row tableContainer">
                  {
                    tableData && tableData.data.map(ele=>(
                      <div onClick={()=>handleBooking(tableData,ele)} key={ele.name} className="col-3 table">
                        <Link style={{color:"black"}} to="/reserve">
                          <div className="row">
                            <Tables key={ele.name} chairs={ele}/>
                          </div>
                        </Link>
                      </div>
                    ))
                  }
                  {
                    !tableData && <h4 className="text-light">please select your suitable date to make table reservation.</h4>
                  }
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Book