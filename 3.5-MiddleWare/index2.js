const express=require("express");
const app=express()
const port=4000


app.use((req,res,next)=>{
  console.log("HI i AM MIddleWARE")
  next()
//  next next middle ware mai bhej deta hai
})

app.use((req,res,next)=>{
  console.log("HI i 2AM MIddleWARE")
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