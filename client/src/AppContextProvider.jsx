

import React,{createContext, useState} from "react";
import "./styles.css"
export const AppContext = createContext()
const AppContextProvider =(props)=>{

  const [tableData,setTableData] = useState(null)

  const addTableData = payload=>{
    setTableData(payload)
  }
console.log(tableData)
  return (
    <>
      <AppContext.Provider value={{tableData,addTableData}}>
          {props.children}
      </AppContext.Provider>
    </>
  )
}

export default AppContextProvider