// var promise=async()=>{
//     try {
//             let arr=await setTimeout(()=>{
//         console.log("Hello Prantik")
//     },1000)

//     console.log(arr)
//     } catch (error) {
//         console.log(error)
//     }

// }
// promise().then((x)=>console.log(x))

async function hello()
{
    return "Prantik CDAC"///internally js engine converts into Promise.resolve("Prantik cdac")
}
async function test(){
    // let x=await hello();   //here the await keyword waits forthe hello() to get resolved i.e internally gets resolved
    //hello().then(x=>{console.log(x)})
    let x=await hello();
    console.log(x);
}
test()