

const express=require("express");
const app=express();
const session=require("express-session")

const sessionOptions={
  secret:"mysupersecretstring",
  resave:false,
  saveUninitialized:true,
};

app.use(session(sessionOptions));

app.get("/register",(req,res)=>{
let {name="anonymous"}=req.query;
req.session.name=name
res.redirect("/hello")
});
app.get("/hello",(req,res)=>{
  res.send(`hello,${req.session.name}`);
})

app.listen(8000,()=>{
  console.log("server is listening to ")
})