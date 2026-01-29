const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path")
const Chat=require("./models/chat.js")
const methodOverride=require("method-override");
const ExpressError=require("./ExpressError.js");
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
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp")
}

//  humlog try and catch mai bhi error ko handle kar skte hai and asyncWrap function bna skte hai n usme dal skte hai function




app.get("/",(req,res)=>{
  res.send("root is working")

});

app.get("/chats",async(req,res)=>{
  try{
    let chats= await Chat.find()     
    console.log(chats)
    res.render("index.ejs",{chats})

  }catch(err){
  next(err)
  }
}); 

// new route
app.get("/chats/new",(req,res)=>{
  //  throw new ExpressError(404,"PAGE NOT FOUND")
  res.render("new.ejs");
})


//  create route 

app.post("/chats",async(req,res,next)=>{

  try{
 let{from ,to, message}=req.body;
 let newChat=new Chat({
  from:from,
  message:message,
  to:to,
  created_at:new Date()
 });

 await  newChat.save();
 res.redirect("/chats")
}catch(err){
  next(err);
}
 });


 function asyncWrap(fn){
  return function(req,res,next){
    fn(req,res,next).catch((err)=>next(err));
  };
 }
 


//  NEW_SHOW_ROUTE

app.get("/chats/:id",asyncWrap(async(req,res,next)=>{

    let{id}=req.params;
    let chat=await Chat.findById(id);
    if(!chat){
      next(new ExpressError(404,"Chat not found"))
    }
    res.render("edit.ejs",{chat})
 

})

);






// EDIT ROUTE

app.get("/chats/:id/edit",async(req,res)=>{
  try{
    let{ id }=req.params;
    let chat=await Chat.findById(id);
    res.render("edit.ejs",{chat})
  }catch(err){
    next(err); 
  }
  
})

// update

app.put("/chats/:id",async(req,res)=>{
  try{
    let{ id }=req.params;
    let{message:newMsg}=req.body;
    let updateChat=await Chat.findByIdAndUpdate(id,{message:newMsg},{
      runValidators:true,new:true}
    );
    console.log(updateChat)
    res.redirect("/chats")
  }catch(err){
    next(err);
  }
 
})


// delete

app.delete("/chats/:id",async(req,res)=>{
  try{
    let{ id }=req.params;
    let deletedChat=await Chat.findByIdAndDelete(id)
    res.redirect("/chats")
  }catch(err){
    next(err);
    
  }

})


// mongo error handle ho ga 


const handleValidationErr=(err)=>{
  console.log("THIS IS A VALIDATION ERROR")
  console.dir(err.message);
  return err;
}

app.use((err,req,res,next)=>{
  console.log(err.name);
  if(err.name==="ValidationError"){
    err=handleValidationErr(err)
  }
  next(err);
})

// ERROR HANDLING MIDDLEWARE

app.use((err,req,res,next)=>{
  let{status=500,message="SOME ERROR"}=err;
  res.status(status).send(message);
})



app.listen(port,()=>{
  console.log("server is listening on port 3000")
})

