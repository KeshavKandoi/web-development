const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");

const connection=mysql.createConnection({
  host: 'localhost',
  user: "root",
  database: "delta_app",
  password: "Kesu2014@#1"
});


// let q="SHOW TABLES"

// let q="INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
// let user=
//   ["123b","kk1","kk@gmail.com","hell1"]

 let q="INSERT INTO user (id,username,email,password) VALUES ? ";

 let users=[
  ["123c","kkc","kkc@gmail.com","hell1c"],
  ["123d","kkd","kkd@gmail.com","hell1c"],
 ];

try{
  connection.query(q,[users],(err,result)=>{
    if(err) throw err;
    console.log(result);
    console.log(result.length);

  });
 }
  catch(err){
  console.log(err);
}
connection.end();


// faker fake value bulk mai database mai add karta hai 

let getRandomUser=()  =>{
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  
  };
};
