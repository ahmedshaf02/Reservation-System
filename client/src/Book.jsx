
import React, { useState, useContext } from "react";
import "./styles.css"
import Navigate from "./Navigate"
import FormBooking from "./FormBooking"
import Tables from "./Tables"
import {AppContext} from "./AppContextProvider"
import { Redirect,Link,useHistory} from "react-router-dom";



const Book =()=>{
  
  const history = useHistory()
  const {tableData,addBooking,searchInfo} = useContext(AppContext)
  // console.log(tableData)
 
  const handleBooking = (data,table)=>{
    
    if(table.isBooked){
      return alert("table is booked")
    }
    
      addBooking({
        id:data._id,
        date:data.date,
        tableName:table.name,
        capacity:table.chair,
        time:table.time,
        location:table.location
      })

   
    history.push("/reserve")

    
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
                    <i className="fa fa-circle-o "></i>Available 
                    <i className="fa fa-circle ml-2"></i>Unavailable
            </div>
            }
            <div className="table-center">


                  <div className="row tableContainer">
                  {
                    tableData && tableData.data
                    .filter(ele=>ele.chair >= searchInfo.size)
                    .filter(ele=>ele.location === searchInfo.location)
                    .map(ele=>(
                      <div onClick={()=>handleBooking(tableData,ele)} key={ele.name} className="col-3 table">
                          <div className="row">
                            <Tables key={ele.name} chairs={ele}/>
                          </div>
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