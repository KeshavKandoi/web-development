const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path")
const Chat=require("./models/chat.js")
const methodOverride=require("method-override");
port=3000;

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

main().then(()=>{
  console.log("connection successful");
})
.catch((err)=>{
  console.log(err);
})

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp")
}



app.get("/",(req,res)=>{
  res.send("root is working")

});

app.get("/chats",async(req,res)=>{
  let chats= await Chat.find()   // chat.find() wait karta hai to ye async function hua so chat mai await laga de gye and async bana de gye 
  console.log(chats)
  res.render("index.ejs",{chats})
});

// new route
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
})


//  create route 

app.post("/chats",(req,res)=>{

 let{from ,to, message}=req.body;
 let newChat=new Chat({
  from:from,
  message:message,
  to:to,
  created_at:new Date()
 });

 newChat.save().then((res)=>{  //save bhi async function hai but yaha async nahi likhe upper ki rh kyuki already then use kr diye hai jaha then use karte hai vaha use karne ka jarurat nahi hota hai 
   
  console.log("chat was saved")
 })
 .catch((err)=>{
  console.log(err);
 });
 res.redirect("/chats")

});

// EDIT ROUTE

app.get("/chats/:id/edit",async(req,res)=>{
  let{ id }=req.params;
  let chat=await Chat.findById(id);
  res.render("edit.ejs",{chat})
})


app.put("/chats/:id",async(req,res)=>{
  let{ id }=req.params;
  let{message:newMsg}=req.body;
  let updateChat=await Chat.findByIdAndUpdate(id,{message:newMsg},{
    runValidators:true,new:true}
  );
  console.log(updateChat)
  res.redirect("/chats")
})


// delete

app.delete("/chats/:id",async(req,res)=>{
  let{ id }=req.params;
  let deletedChat=await Chat.findByIdAndDelete(id)
  res.redirect("/chats")
})

app.listen(port,()=>{
  console.log("server is listening on port 3000")
})

