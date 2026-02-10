// FLASH


// const express=require("express");
// const app=express();
// const session=require("express-session")
// const path=require("path")
// const flash = require("connect-flash");


// app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"views"));

// const sessionOptions={
//   secret:"mysupersecretstring",
//   resave:false,
//   saveUninitialized:true,
// };

// app.use(session(sessionOptions));
// app.use(flash());

// app.get("/register",(req,res)=>{
// let {name="anonymous"}=req.query;
// req.session.name=name
// if(name==="anonymous"){
//   req.flash("error","user not registered")
// }
// else{
// req.flash("success","user registered successfully")
// }
// res.redirect("/hello")
// });

// app.get("/hello",(req,res)=>{
  
  // res.render("page.ejs",{name:req.session.name,msg:req.flash("success")});

//   res.locals.successmsg=req.flash("success");
//   res.locals.errormsg=req.flash("error");
//   res.render("page.ejs",{name:req.session.name})

// })

// app.listen(8000,()=>{
//   console.log("server is listening to ")
// })


//  BY USING MIDDLEWARE 

// FLASH


const express=require("express");
const app=express();
const session=require("express-session")
const path=require("path")
const flash = require("connect-flash");


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

const sessionOptions={
  secret:"mysupersecretstring",
  resave:false,
  saveUninitialized:true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next)=>{
  res.locals.successmsg=req.flash("success");
  res.locals.errormsg=req.flash("error");
  next();
})


app.get("/register",(req,res)=>{
let {name="anonymous"}=req.query;
req.session.name=name
if(name==="anonymous"){
  req.flash("error","user not registered")
}
else{
req.flash("success","user registered successfully")
}
res.redirect("/hello")
});

app.get("/hello",(req,res)=>{
  res.render("page.ejs",{name:req.session.name})

})

app.listen(8000,()=>{
  console.log("server is listening to ")
}) 