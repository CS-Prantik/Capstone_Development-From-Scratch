import { useState } from "react"

const BootstrapForm=()=>{
        const [input,setInput]=useState(' ')
        const inputNameHandler=(event)=>{
               setInput(event.target.value)
        }
        const submitHandler=(event)=>{
            event.preventDefault();
            console.log(input,"Submitted")
        }
        return(
            <form onSubmit={submitHandler}>
               <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="uname" 
                className="form-control" 
                onChange={inputNameHandler}/>

               </div>
               <div className="form-actions">
                <button className="btn btn-primary">Submit</button>
               </div>
            </form>
        )
}
export default BootstrapForm