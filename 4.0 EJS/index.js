const express=require("express");
const app=express()
 //const path =require("path"); //-------same for this  also

const port=3000;

app.set("view engine","ejs")

// app.set("views",path.join(__dirname,"views")) //-------- agar humko ejs folder mai bina aaye direct bahar se run karna h to iska use karte hai 

app.get("/",(req,res)=>{
  res.render("home.ejs")
});

app.listen(port,()=>{
  console.log(`listening on port${port}`)
});