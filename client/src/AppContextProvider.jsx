

import React,{createContext, useState} from "react";
import "./styles.css"
export const AppContext = createContext()
const AppContextProvider =(props)=>{

  const [tableData,setTableData] = useState(null)
  const [tableBooked,setTableBooked] = useState(null)
  const [searchInfo,setSearchInfo] = useState(null)
  const [confirm,setConfirm] = useState(null)

  const addTableData = payload=>{
    setTableData(payload)
  }

  const addBooking=payload=>{
    setTableBooked(payload)
  }

  const tableSearchInfo= (payload)=>{
    setSearchInfo(payload)
  }

console.log(tableData)
  return (
    <>
      <AppContext.Provider value={{tableData,confirm,setConfirm,tableSearchInfo,addTableData,addBooking,searchInfo,tableBooked}}>
          {props.children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider