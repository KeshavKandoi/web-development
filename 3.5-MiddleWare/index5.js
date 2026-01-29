// ERROR HANDLING


const express=require("express");
const app=express()
const port=4000




const checkToken=(req,res,next)=>{
  let{token}=req.query
  if(token=="giveaccess"){
    next()
  }
res.send("ACCESS DENIED")
}



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


app.use((err,req,res,next)=>{
  console.log("______ERROR1_______")
  next(err) //next() mai error pass krna ho gya varna vo vaha jaye ga jaha error nhi h jiss part  mai
});

app.use((err,req,res,next)=>{
  console.log("______ERROR2_______")
  next()
})












app.listen(4000,()=>{
  console.log("Listening to port 4000")
})