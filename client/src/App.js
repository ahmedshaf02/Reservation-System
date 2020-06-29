import React from "react";
import "./styles.css";
import Screens from "./Screens";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./AppContextProvider"


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppContextProvider>

       <Screens />
      </AppContextProvider>
      </BrowserRouter>
    </div>
  );
}
