
import { useState } from "react"

const Forms2=()=>{
    const [uname,setUname]=useState(" ")
    const [gender,setGender]=useState(" ")

    const inputchange=(event)=>{
        setUname(event.target.value)
    }
    const genderchange=(event)=>{
        setGender(event.target.value)
    }
    const submitHandler=(event)=>{
             event.preventDefault();
             let user={
                uname:uname,
                gender:gender
             }
             console.log(user)
             setUname(" ");
             setGender(" ");
    }
    return(
        <form onSubmit={submitHandler}>
            Username: <input type="text"  value={uname} onChange={inputchange} />
            <select value={gender} onChange={genderchange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    )
}
export default Forms2