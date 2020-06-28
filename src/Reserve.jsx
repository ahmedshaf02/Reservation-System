

import React from "react";
import "./styles.css"
import Navigate from "./Navigate"

const Book =()=>{
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
              <div>

                <button className="btn">Reserve Now</button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Book