// ERROR HANDLING


const express=require("express");
const app=express()
const port=4000
const ExpressError=require("./ExpressError");




const checkToken=(req,res,next)=>{
  let{token}=req.query
  if(token==="giveaccess"){
    next()
  }
throw new ExpressError(401,"ACCESS DENIED!")
};



app.get("/api",checkToken,(req,res)=>{
  res.send("data")
});


app.get("/",(req,res)=>{
  res.send("Hi I M ROOT")
});

app.get("/random",(req,res)=>{
  res.send("This is a random page")
})

// error handling 

app.get("/error",(req,res)=>{
  abcd=abcd //yaha abcd to define nahi kiye hai error check krne k liye 
})


app.get("/admin",(req,res)=>{
  throw new  ExpressError(403,"Access to admin is forbidden");
})

app.use((err,req,res,next)=>{
  let{status,message}=err;
  res.status(status).send(message)
 
});











app.listen(4000,()=>{
  console.log("Listening to port 4000")
})