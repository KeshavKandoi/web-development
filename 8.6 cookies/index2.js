// EXPRESS SESSION  express-session is used to remember a user on the server. npm i express-session

const express=require("express");
const app=express();
const session=require("express-session")


app.use(session({secret:"mysupersecretstring"}));//cookie bana de ga with id 

app.get("/test",(req,res)=>{
  res.send("test successful");
})

app.listen(8000,()=>{
  console.log("server is listening to ")
})