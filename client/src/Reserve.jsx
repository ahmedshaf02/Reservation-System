

import React, { useState, useRef, useContext } from "react";
import "./styles.css"
import Navigate from "./Navigate"
import {AppContext} from "./AppContextProvider"
import {useHistory} from "react-router-dom"
 

const Reserve =()=>{

  const {tableBooked,searchInfo,setConfirm} = useContext(AppContext)

  const name = useRef(null)
  const email = useRef(null)
  const mobile = useRef(null)
  const history = useHistory()
  
  const handleInfoSubmit=(e)=>{
    const{id,date,tableName,capacity,location} = tableBooked
    const {time} = searchInfo
    e.preventDefault()
    const infoName = name.current.value
    const infoEmail = email.current.value
    const infoMobile = mobile.current.value
    
    if(!infoEmail || !infoName || !infoMobile){
      return alert("please fill form")
    }

    
    fetch("https://74lm2.sse.codesandbox.io/tablebook",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:infoName,email:infoEmail,mobile:infoMobile,
        time,date,location,capacity,id,tableName
      })
    })
    .then(data=>data.json())
    .then(data=>{
      console.log(data)
      setConfirm(data)
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