const express=require("express");
const app=express()
const port=4000


// LOGGER

app.use((req,res,next)=>{
  req.time=new Date(Date.now()).toString(); //Date.now() se time milta hai js mai 
  console.log(req.method,req.hostname,req.path,req.time)
  next()

})






app.get("/",(req,res)=>{
  res.send("Hi I M ROOT")
});

app.get("/random",(req,res)=>{
  res.send("This is a random page")
})

app.listen(4000,()=>{
  console.log("Listening to port 4000")
})