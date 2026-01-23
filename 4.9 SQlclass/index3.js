const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
const app =express();
const path=require("path")
const methodOverride=require("method-override");

port=3000;


app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection=mysql.createConnection({
  host: 'localhost',
  user: "root",
  database: "delta_app",
  password: "Kesu2014@#1"
});


let getRandomUser=()  =>{
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  
  };
};
// home page
app.get("/",(req,res) => {
  let q=`SELECT count(*) FROM user`;

try{
  connection.query(q,(err,result)=>{
    if(err) throw err;
    let count=result[0]["count(*)"];
    res.render("home.ejs",{count});
  });
 }
  catch(err){
  console.log(err);
  res.send("Some Error IN DB");
}
});



// show route

app.get("/user",(req,res)=>{
  let q=`SELECT * FROM user`;
  try{
    connection.query(q,(err,users)=>{
      if(err) throw err;
      console.log(users[0]);
      res.render("showusers.ejs",{users});
    });
   }
    catch(err){
    console.log(err);
    res.send("Some Error IN DB");
  }
  });


  //  edit route

  app.get("/user/:id/edit",(req,res)=>{
    let{id}=req.params;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
      connection.query(q,(err,result)=>{
        if(err) throw err;
        let user = result[0];        // first row (one user)
        res.render("edit.ejs", { user });

      });
     }
      catch(err){
      console.log(err);
      res.send("Some Error IN DB");
    }
    });

// update (db)Route

app.patch("/user/:id",(req,res)=>{
  let{id}=req.params;
  let formpass = req.body.password;
  let newUsername = req.body.username;

    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
      connection.query(q,(err,result)=>{
        if(err) throw err;
        let user=result[0];
        if(formpass!=user.password){
          res.send("WRONG password")
        }else{
          let q2=`UPDATE user SET username='${newUsername}'WHERE id='${id}'`;
          connection.query(q2,(err,result)=>{
            if(err)throw err;
            res.redirect("/user");
          })
        }
   
      });
     }
      catch(err){
      console.log(err);
      res.send("Some Error IN DB");
    }
    });


app.listen(port,()=>{
  console.log("server is listening to port 3000")
})
   

