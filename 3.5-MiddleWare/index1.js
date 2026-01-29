const express=require("express");
const app=express()
const port=4000




// Middleware is a function that runs between the request and the response.

// Think of the flow like this:

// Request → Middleware → Route → Response

app.use((req,res)=>{
  console.log("HI i M MIddle WARE")
  res.send("middleware finished ")

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