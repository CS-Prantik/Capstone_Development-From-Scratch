// let promise=new Promise(function(resolve,reject){  //basic control how it goes according to ascynchronus mode
//       resolve(56);
// })
// console.log("hello")
// setTimeout(function(){
//     console.log("Hello Two in 2 Seconds")
// },2000)
// console.log("My name is "+"Hello Three")
// console.log(promise);

let p=new Promise(function(resolve,reject){
    console.log("Promise is Pending")
    setTimeout(()=>{
        console.log("I am a promise and i am fullfiled")
        resolve(true);
    },1000)
})
p.then((value)=>{
    console.log(value)
})
p.catch((err)=>{
    console.log(err)
})
console.log(p)