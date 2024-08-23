import React, { useEffect, useState } from 'react'

const Mover = () => {
   let time = new Date().toLocaleTimeString()
   const [cTime,setcTime] = useState(time);

   const updatedTime= ()=>{
    let time = new Date().toLocaleTimeString()
    setcTime(time)
   }
   setInterval(updatedTime,1000)
   

    return(
        <>
        <h1>{cTime}</h1>
        </>
    )
}

export default Mover