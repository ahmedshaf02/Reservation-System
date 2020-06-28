
import React from "react";
import "./styles.css"
import Navigate from "./Navigate"
import Book from "./Book"
import ThankYou from "./ThankYou"
import Reserve from "./Reserve"

const Page =()=>{
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
          <button className="btn mt-3"
              >BOOK NOW</button>
          </div>
        </div>
      </div>
  <Book/>
<Reserve/>
<ThankYou/>
    </>
  )
}

export default Page