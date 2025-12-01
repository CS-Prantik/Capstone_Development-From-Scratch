// async function greet(){
//     return 5;
// }
// greet().then((x)=>{
//     console.log(x);
// })

async function greet()
{
    return 5;
}
try 
{
       const res=await greet()
       console.log(res);
} catch (error) {
    console.log(err)
}