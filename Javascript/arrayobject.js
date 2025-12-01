// const obj={
//        name:"Prantik",
//        age:24,
//        graduated:true,
//        girlfriend:false,
//        hobbies:["Coding","Hackathon","Ethical Hacking","Cricket"],
//        address:{village:"churaibari",state:"Tripura",dist:"North Tripura"},
//        pin:799008

// }
// console.log(obj.address.dist);
// for(let keys in obj)
// {
//     console.log(keys,obj[keys])
// }

const books={
        bookid:1002,
        title:"Learning Javascript",
        author:"xyz",
        price:450,
        display:function(){
            console.log(this.bookid,this.title,this.author,this.price);
        },
        incrprice:function(amount){
            this.price+=amount
            console.log(this.price)
        }
}
    //   console.log(books.incrprice(50));
    // console.log(typeof book.display);
    for(let keys in books)
    {
        if(typeof books[keys]==="function")
        {
              if(keys==="display")
              {
                books[keys]();
              }
              else
              {
                 books[keys](50);
              }
        }
        else
        {
            console.log(keys,books[keys]);
        }
    }
    console.log(books);