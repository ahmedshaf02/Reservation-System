

import React, { useState, useRef, useContext } from "react";
import "./styles.css"
import Navigate from "./Navigate"
import {AppContext} from "./AppContextProvider"
import {useHistory} from "react-router-dom"
 

const Reserve =()=>{

  const {tableBooked,setTableData,searchInfo,setConfirm,tableData} = useContext(AppContext)

  const name = useRef(null)
  const email = useRef(null)
  const mobile = useRef(null)
  const history = useHistory()
  
  const handleInfoSubmit=(e)=>{
    const{id,date,tableName,capacity,location} = tableBooked
    console.log(location,tableName)
    const {time} = searchInfo
    e.preventDefault()
    const infoName = name.current.value
    const infoEmail = email.current.value
    const infoMobile = mobile.current.value
    
    if(!infoEmail || !infoName || !infoMobile){
      return alert("please fill form")
    }

    const updateData = tableData.data.map(ele=>(
      ele.name === tableName?{...ele,isBooked:true}:ele
    ))

    
    fetch("https://reservation-booking.herokuapp.com/tablebook",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:infoName,email:infoEmail,mobile:infoMobile,
        time,date,location,capacity,id,tableName,updateData
      })
    })
    .then(data=>data.json())
    .then(data=>{
      console.log(data)
      setConfirm(data)
      setTableData({...tableData,data:updateData})
      history.push("/thankyou")
    })
    
  }

  return (
    <>
      <div className="container">
        <Navigate/>
        <div className="mt-5">
          <h4>Please fill the form</h4>
          <div className="row mt-4">
            <div className="col">
            <form onSubmit={handleInfoSubmit}>
              <input ref={name} placeholder="your name" />
              <input ref={email} placeholder="your email"/>
              <input ref={mobile} placeholder="your mobile"/>
              <div>
                <button className="btn">Reserve Now</button>
              </div>
            </form>
            </div>
          </div>
         
        </div>
      </div>
    </>
  )
}

export default Reserve
