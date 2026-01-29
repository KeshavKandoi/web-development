const express=require("express");
const app=express()
const port=4000


// app.use((req,res,next)=>{
//   console.log("HI i AM MIddleWARE")
//   next()

// })

// app.use((req,res,next)=>{
//   console.log("HI i 2AM MIddleWARE")
//   next()

// })

// LOGGER

app.use((req,res,next)=>{
  req.time=new Date(Date.now()).toString(); //Date.now() se time milta hai js mai 
  console.log(req.method,req.hostname,req.path,req.time)
  next()

})


// app.use("/random",(req,res,next)=>{
//   res.send("This is a  page")
// })                             ye sirf random ke liye middle ware mai



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