

import React,{useContext} from "react";
import "./styles.css"
import Navigate from "./Navigate"
import {AppContext} from "./AppContextProvider"
import {Redirect} from "react-router-dom"

const ThankYou =()=>{
  const {confirm} = useContext(AppContext)
  // console.log(confirm)
  // if(confirm){
  //   return <Redirect path="/book"/>
  // }

  return (
    <>
      <div className="container">
        <Navigate/>
        <div className="mt-5">
          <div className="row">
            <div className="col">

            <h2 className="p-2">Thank You!</h2>
            <h5><small>you have booked <b>{confirm?confirm.tableName:""}</b> for {confirm?confirm.capacity:""} people</small></h5>
            <h4 className="p-2">
             
               <img width="100" src="data:image/jpeg;base64,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" alt="logo"/>
            </h4>
            <h5 className="p-2">You will get confirmation email on your mail shortly</h5>
            </div>
          
          </div>
        </div>
      </div>
    </>
  )
}

export default ThankYou
