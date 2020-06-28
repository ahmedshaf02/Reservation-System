
import React, { useState } from "react";
import "./styles.css"
import Navigate from "./Navigate"

const Book =()=>{
    const[table,setTable] = useState({
      
    })
  return (
    <>
      <div className="container">
        <Navigate/>
        <div className="mt-5">
          <div className="row">
            <div className="col">
              <input/>
              <input/>
              <input/>
              <input/>
            </div>
          </div>
          <div className=" container ">
            <div className="text-left ml-4">

                    <i class="fa fa-circle "></i>Available
                    <i class="fa fa-circle-o "></i> Unavailable
            </div>
            <div className="table-center">

                  <div className="row tableContainer">

                  {
                    [1,2,3,4,5,6,7,8,9,10].map(ele=>(
                      <div className="col-3 table">

                        <div className="row">

                        {
                          [1,2,3,4,5,6].map(ele=>(
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