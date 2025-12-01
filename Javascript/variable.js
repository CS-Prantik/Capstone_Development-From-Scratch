// let a="prantik"
// let b=6;
// console.log(a+b);
// console.log(typeof(a));

// const a={
//     name:"jogn",
//     secction:"1"
// }
// a['friend']="shubham";
// console.log(a);

// let a=prompt("Het what's your age");
// a=Number.parseInt(a);
// console.log(a);

// var a=function(x,y){
//     return x+y;
// }
// console.log(a(1,2));

// var sum=(x,y)=>{
//     return x+y;
// }
// console.log(sum(2,3));
// let marks={
//     john:85,
//     shurita:58,
//     bibha:95
// }
// console.log(Object.keys(marks))

// const mean=(a,b,c,d)=>{

//     return (a+b+c+d)/5;
// }
// console.log("Mean of 5 numbers is ",mean(1,5,6,10));
function outer()
{
     var i=0;
     function inner()
     {
        return i++;
     }
     return inner;
}
var getinner=outer();
console.log(getinner())
console.log(getinner());
console.log(getinner());

//strings

// const str="prantik"
// console.log(str.length);
// //template literals
// let boy1="ss";
// let boy2="dd";

// let s=`${boy1} is a friend of ${boy2}`;
// console.log(s);

// let n1='john';
// let n2='king';
// console.log(n1.concat(n2,"yes")); 