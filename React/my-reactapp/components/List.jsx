const List=()=>
{
     let arr=[3,4,1,2]
     let updatedarr=arr.map((val)=>
     {
        return <li>{val*val}</li>
     })
     return(
         <div>
            numbersarr:{updatedarr}
         </div>
     )
}