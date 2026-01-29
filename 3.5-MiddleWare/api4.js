const express=require("express");
const app=express()
const port=4000



// app.use("/api",(req,res,next)=>{
//   let{token}=req.query
//   if(token=="giveaccess"){
//     next()
//   }
//                           // http://localhost:4000/api?token=giveaccess
// res.send("ACCESS DENIED")
// })


// store kar ke bhi pass kar skte hai


const checkToken=(req,res,next)=>{
  let{token}=req.query
  if(token=="giveaccess"){
    next()
  }
res.send("ACCESS DENIED")
}

// app.get("/api",(req,res)=>{
//   res.send("data")
// });

app.get("/api",checkToken,(req,res)=>{
  res.send("data")
});


app.get("/",(req,res)=>{
  res.send("Hi I M ROOT")
});

app.get("/random",(req,res)=>{
  res.send("This is a random page")
})


app.use((req,res)=>{
  res.send("PAGE NOT FOUND")  // if url alag dale to page not found aaye ga
})

app.listen(4000,()=>{
  console.log("Listening to port 4000")
})