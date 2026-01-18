const express=require("express");
const app=express()

const port=3000;

app.set("view engine","ejs")




app.get("/ig/:username",(req,res)=>{
  let{username}=req.params
 const instaData=require("./data.json")
 let data=instaData[username]
//  console.log(data)
if(data){
  res.render("index.ejs",{data})
}
else{

res.render("error.ejs",{data})
}
})



app.listen(port,()=>{
  console.log(`listening on port${port}`)
});