import { useState } from "react"

const State=()=>{
    const [counter,setcounter]=useState(0)
    const btnhandler=()=>{
        setcounter(counter+1);
        console.log(counter,"Button Clicked")
    }
     return(
          <div>
             Counter:{counter} &nbsp;&nbsp;
             <button type="button" onClick={btnhandler}>Button</button>
          </div>
     )
 }
 export default State
