
import React from "react";
import "./styles.css"
import Navigate from "./Navigate"
import {Link} from "react-router-dom"

const Home =()=>{
  return (
    <>
      <div className="container">

        <Navigate/> 
        <div className="tagline">
          <div className="heading">
          
          <h4>
               Hey Are You  Swarma Fan, 
              Love to eact delicious Swarma Then Book
              Your Table now..
          </h4>
          <Link to="/book" className="btn mt-3"
              >BOOK NOW</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home