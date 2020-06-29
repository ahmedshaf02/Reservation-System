
import React, { useState } from "react";
import "./styles.css"
import Navigate from "./Navigate"
import FormBooking from "./FormBooking"
import Tables from "./Tables"
import {tableData} from "./tableData"
import {AppContext} from "./"



const Book =()=>{
 
  
  return (
    <>
      <div className="container">
        <Navigate/>
        <div className="mt-5">
          <FormBooking/>
          <div className=" container mt-5">
            <div className="text-left ml-4">

                    <i className="fa fa-circle "></i>Available
                    <i className="fa fa-circle-o "></i> Unavailable
            </div>
            <div className="table-center">


                  <div className="row tableContainer">
                  {
                    tableData.map(ele=>(
                      <div className="col-3 table">

                        <div className="row">

                        {
                          tableData.map(ele=>(
                            <Tables key={ele.name} chairs={ele}/>
                            ))
                          }
                        </div>
                      </div>
                    ))
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