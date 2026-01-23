const express =require("express")
const app=express();
const {v4: uuidv4}=require('uuid')
const methodOverride=require("method-override")


const port=4000
const path=require("path");

app.use(express.urlencoded({extended:true}))
app.use(methodOverride("_method"))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));







let posts=[{
  id:uuidv4(),
  username:"Adam",
  content:"First male"
},

{  id:uuidv4(),
  username:"Eve",
content:"First female"
},

{
  id:uuidv4(),
  username:"BOB",
content:"First human"
},
];
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});


app.get("/posts/new",(req,res)=>{
  res.render("new.ejs")
})

app.post("/posts",(req,res)=>{
  let{username,content}=req.body
  let id=uuidv4()
  posts.push({id,username,content})

  res.redirect("/posts")
})

app.get("/posts/:id",(req,res)=>{
  let{id}=req.params;
  let post=posts.find((p)=> id===p.id)
  res.render("show.ejs",{post})
})

app.patch("/posts/:id",(req,res)=>{
  let {id}=req.params;
  let newcontent=req.body.content
  let post=posts.find((p)=> id===p.id)
  post.content=newcontent;
  res.redirect("/posts")
})




app.get("/posts/:id/edit",(req,res)=>{
  let{id}=req.params;
  let post=posts.find((p)=> id===p.id)
  res.render("edit.ejs")
})

app.delete("/posts/:id",(req,res)=>{
  let{id}=req.params;
  posts=posts.filter((p)=> id!==p.id);
  res.redirect("/posts")
});
// SHOW DELETE CONFIRMATION PAGE
app.get("/posts/:id/delete", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);

  res.render("delete.ejs", { post });
});


app.listen(port,()=>{
console.log("succcess")
})