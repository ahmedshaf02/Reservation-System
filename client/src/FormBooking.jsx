

import React, { useState, useRef,useContext} from "react";
import "./styles.css"
import {AppContext} from "./AppContextProvider"


const FormBooking =()=>{
    const getDate = useRef(null)
    const getTime = useRef(null)
    const getLocation = useRef(null)
    const getsSize = useRef(null)
    const {addTableData,tableSearchInfo} = useContext(AppContext)

  const handleFormData=(e)=>{
    e.preventDefault()

    const date = getDate.current.value
    const time = getTime.current.value
    const location = getLocation.current.value
    const size = getsSize.current.value

    if(!date || !size || !location || !time){
      return alert("please enter date")
    }
    tableSearchInfo({date,time,location,size})
    
    fetch("https://74lm2.sse.codesandbox.io/finddate",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({date})
    })
    .then(data=>data.json())
    .then(data=>{
      // console.log(data[0])
      addTableData(data[0])
    })
   
  }

  return (
    <>
      <div className="row">
        <div className="col-12">
        <form onSubmit={handleFormData}>
            <input ref={getDate}
            type="date" max="2020-7-10"/>

            <select ref={getTime}>
              <option value="">Time</option>
              <option value="8 AM">8 AM</option>
              <option value="9 AM">9 AM</option>
              <option value="10 AM"> 10 AM</option>
            </select>

            <select ref={getLocation}>
              <option value="">Any Location</option>
              <option value="patio">Patio</option>
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </select>

            <select ref={getsSize}>
              <option value="">Party Size</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="6">6</option>
            </select><br/>
            <input type="submit" className="btn" value="get table"/>
        </form>
        </div>
      </div>
    </>
  )
}

export default FormBooking