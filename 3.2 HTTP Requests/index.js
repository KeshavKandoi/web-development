import express from "express";
const app = express()
const port =3000;


app.get("/",(req,res) =>{
  //console.log(req.rawHeaders);
  res.send("<h1>Hello,World!</h1>");
})

app.get("/contact",(req,res) =>{
  res.send("<h1> The Details are </h1> <p>phone no :+8467657</p>")
})

app.get("/about",(req,res) =>{
  res.send("<h1> About me</h1>")
})

app.listen(port, () => { 
  console.log(`server running on port ${port}.`);

})