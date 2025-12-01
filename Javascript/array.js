
//arrray methods
//to string
// let b=num.toString();
// console.log(b);

// let c=num.join("|")
// console.log(c,typeof(c))

// let d=num.pop();
// console.log(num);
// num.push(6);
// console.log(num)
// num.unshift(5);
// console.log(num);
// num.shift();
// console.log(num);
// let num=[1,2,3,4,9]
// let str=[1,5,6,2]
// let arr1=[1,5,6,8,7,5]
// console.log(num)
// console.log(num.length);
// delete num[0];
// console.log(num)
// console.log(num.length);
// let newarr=num.concat(str,arr1);
// console.log(newarr)
//let num=[1,2,3,4,5]

// let d=num.pop();
// console.log(num.length);//4
// console.log(num); //[1,2,3,4]
// num.push(6);//[1,2,3,4,6]
// console.log(num.length);//5
// console.log(num)
// num.unshift(5);
// console.log(num.length)//6
// console.log(num);
// num.shift();//[1,2,3,4,6]
// console.log(num.length);
// console.log(num)
 
let num1=new Array(1,2,3,4);
console.log(num1)
// num1.forEach((e)=>{
//     console.log(e);
// })

let n="pramtik"
let d=Array.from(n);
console.log(d);

let arr=[45,23,21,0,5]
let a=arr.map((e,index,array)=>{
     console.log(e,index,array);// basically it takes three paremeters
     return e;
})
console.log(a)
let a2=arr.filter((e)=>{
        return e<10;
})