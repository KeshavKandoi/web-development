const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 8000;
const path = require("path");


// app.use(cookieParser()); normal 

app.use(cookieParser("secretcode"));




app.get("/greet",(req,res)=>{
  let{name="anonymous"}=req.cookies
  res.send("sent you")
})


app.get("/getsignedcookie",(req,res)=>{
  res.cookie("made-in","INDIA",{signed:true});
  res.send("Signed cookie sent")

})

app.get("/verify",(req,res)=>{
  console.log(req.signedCookies)
  res.send("VERIFIED ")
})



app.get("/getcookies", (req, res) => {
  res.cookie("great","hello" ); //cokies bhej rhe hai
  res.cookie("MADE_IN","INDIA" );
  res.send("sent you some coookies");
});

app.get("/",(req,res)=>{
  console.dir (req.cookies);
  res.send("HI I AM ROOT")
})




app.listen(port,(req,res)=>{
  console.log("listening at the 8000")
})