
import React, { useState } from "react";
import "./styles.css"
import Navigate from "./Navigate"
import {tableData} from "./tableData"



const Book =()=>{
    const[table,setTable] = useState({
      
    })
  return (
    <>
      <div className="container">
        <Navigate/>
        <div className="mt-5">
          <div className="row">
            <div className="col-12">
              <input type="date"/>
              <select>
                <option>8 AM</option>
                <option>9 AM</option>
                <option>10 AM</option>
              </select>
              <input/>
              <input/>
            </div>
          </div>
          <div className=" container mt-5">
            <div className="text-left ml-4">

                    <i class="fa fa-circle "></i>Available
                    <i class="fa fa-circle-o "></i> Unavailable
            </div>
            <div className="table-center">

                  <div className="row tableContainer">

                  {
                    tableData.map(ele=>(
                      <div className="col-3 table">

                        <div className="row">

                        {
                          tableData.map(ele=>(
                          <div className="col-6 col-md-4 chairs">
                          <div>
                            <i class="fa fa-circle "></i>
                          </div>
                          </div>
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