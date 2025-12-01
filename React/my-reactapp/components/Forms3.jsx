const { useState } from "react"

const Forms3=()=>{
    const initialvalues={uname:" ",email:" ",password:" "}
    const [formvalues,setFormvalues]=useState(initialvalues)
     const inputchange=(event)=>
     {
        const {name,value}=event.target
        setFormvalues({...formvalues,[name]:value})
     }
     const submitHandler=(event)=>{
          event.preventDefault();
          console.log(formvalues)
     }
     return(
            <form onSubmit={submitHandler}>
                <label htmlFor="md-1">Enter USername</label>
                <input type="text"  name="uname" id="md-1" value={formvalues.uname} onChange={inputchange}/>
                <label htmlFor="md-2">Enter Email</label>
                <input type="email" name="email" value={formvalues.email} id="md-2" onChange={inputchange}/>
                <label htmlFor="md-3">Enter PassWord</label>
                <input type="password" name="password" value={formvalues.password} id="md-3" onChange={inputchange} />
            </form>
     )
}
export default Forms3