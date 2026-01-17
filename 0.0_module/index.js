require('dotenv').config()
const express= require('express')
const app= express();

const port=3000;

app.get('/' ,(req,res)=>{
   res.send("hello world");
})

app.get('/twitter',(req,res)=>{
  res.send("https//x.com/?lang=en");
})

app.listen(process.env.PORT , () =>{
console.log(`example app listening on port ${port}`)
})
//ye env ke port pe run kr rha h 4000 pe