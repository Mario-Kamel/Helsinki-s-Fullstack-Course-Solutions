import React from "react"

const Filter = ({handleSearchWordChange}) =>{
    return(
    <div>
        filter shown with
        <input onChange={handleSearchWordChange}/>
      </div>
    )
}   

export default Filter