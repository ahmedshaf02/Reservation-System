

import React, { useState, useRef,useContext} from "react";
import "./styles.css"
import {AppContext} from "./AppContextProvider"


const FormBooking =()=>{
    const getdate = useRef(null)
    const time = useRef(null)
    const location = useRef(null)
    const size = useRef(null)
    const {addTableData} = useContext(AppContext)


  const handleFormData=(e)=>{
    e.preventDefault()
    const date = getdate.current.value

    if(!date){
      return alert("please enter date")
    }
    
    fetch("https://74lm2.sse.codesandbox.io/finddate",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({date})
    })
    .then(data=>data.json())
    .then(data=>{
      // console.log(data[0].data)
      addTableData(data[0].data)
    })
   
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
        <form onSubmit={handleFormData}>
            <input ref={getdate}
            type="date" max="2020-7-10"/>

            <select ref={time}>
              <option>8 AM</option>
              <option>9 AM</option>
              <option>10 AM</option>
            </select>

            <select ref={location}>
              <option>Any Location</option>
              <option>Patio</option>
              <option>Inside</option>
              <option>Outside</option>
            </select>

            <select ref={size}>
              <option>Party Size</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>6</option>
            </select><br/>
            <input type="submit" className="btn" value="get table"/>
        </form>
        </div>
      </div>
    </>
  )
}

export default FormBooking