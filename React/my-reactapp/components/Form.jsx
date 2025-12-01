import { useState } from "react"

const Form=()=>{
    const[uname,setUname]=useState(" ")
    const submitHandler=(event)=>{
         event.preventDefault();
         console.log("Hello",uname)
         setUname(" ");
    }
    const unameHandler=(event)=>{
       setUname(event.target.value)
    }
      return(
        <form onSubmit={submitHandler}>
            Username: <input onChange={unameHandler} value={uname} />
            <input type="submit" />
        </form>
      )
}
export default Form