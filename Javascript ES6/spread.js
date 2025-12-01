const peaks=["Prantik","John","Wick"]
const fruits=["Mango","Apple","Watermelon"]
const merge=[...peaks,...fruits]
console.log(merge)

const user={
    name:"Prantik",
    email:"deprantik2001@gmail.com"
}
const enhanceduser={
    isAdmin:true,
    ...user
}
console.log(enhanceduser);