const express=require("express");
const app=express()

const port=3000;

app.set("view engine","ejs")




app.get("/ig/:username",(req,res)=>{
  let{username}=req.params;
  const followers=["ADAM","BOB","TANNYA","HARSHIT"]
  res.render("index.ejs",{username,followers})
})
app.listen(port,()=>{
  console.log(`listening on port${port}`)
});