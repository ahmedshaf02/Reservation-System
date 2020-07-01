
import React from "react";
import "./styles.css"
import Book from "./Book"
import Home from "./Home"
import ThankYou from "./ThankYou"
import Reserve from "./Reserve"
import {Route} from "react-router-dom"

const Screens =()=>{
  return (
    <>
      <Route exact path="/"><Home/></Route>
      <Route path="/book"><Book/></Route>
      <Route path="/thankyou"><ThankYou/></Route>
      <Route path="/reserve"><Reserve/></Route>
    </>
  )
}

export default Screens
