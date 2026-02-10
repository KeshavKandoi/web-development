const express = require("express");
const app = express();
const port = 8000;
const path = require("path");
const {v4: uuidv4}=require('uuid')
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
const ejsMate = require("ejs-mate"); //boilerplate ko use karne ke liye 


app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let datas = [{
  id:uuidv4(),
  First_name: "Harsh",
  Last_name: "AGARWAL",
  Phone_Number: 9204379382,
  email: "agarwal1183@gmail.com",
}];

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/form", (req, res) => {
  res.render("show.ejs", { datas });
});

app.get("/form/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/form", (req, res) => {
  const {First_name, Last_name, Phone_Number, email } = req.body;
  let id=uuidv4();
  datas.push({ id,First_name, Last_name, Phone_Number, email });
  res.redirect("/form");
});



app.get("/form/:id",(req,res)=>{
  let {id}=req.params;
  let forms=datas.find((p)=>id===p.id)
  res.render("naya.ejs",{forms})

})





// update

app.get("/form/:id/edit",(req,res)=>{
  let {id}=req.params;
  let forms=datas.find((p)=>id===p.id)
  res.render("update.ejs",{forms})
})
app

app.patch("/form/:id",(req,res)=>{
  let {id}=req.params;
  const {First_name:KK, Last_name:RR, Phone_Number:SS, email:GG } = req.body;
  let forms=datas.find((p)=>id===p.id)
  forms.First_name=KK;
  forms.Last_name=RR
  forms.Phone_Number=SS
  forms.email=GG
  res.redirect("/form");


})
app.delete("/form/:id",(req,res)=>{
  let{id}=req.params;
   datas=datas.filter((p)=>id!==p.id)
   res.redirect("/form")
})


app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
