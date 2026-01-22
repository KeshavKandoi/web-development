const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
const app =express();
const path=require("path")

port=3000;

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
      res.render("showusers.ejs",{users});
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
   

