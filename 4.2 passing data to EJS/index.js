const express=require("express");
const app=express()

const port=3000;

app.set("view engine","ejs")


app.get("/rolldice",(req,res)=>{
  let diceVal=Math.floor(Math.random()*6)+1

  res.render("rolldice.ejs",{num:diceVal})
});

app.listen(port,()=>{
  console.log(`listening on port${port}`)
});