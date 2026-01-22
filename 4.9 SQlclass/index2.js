const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");

const connection=mysql.createConnection({
  host: 'localhost',
  user: "root",
  database: "delta_app",
  password: "Kesu2014@#1"
});

let getRandomUser=()  =>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
     faker.internet.password(),
  
  ];
};


 let q="INSERT INTO user (id,username,email,password) VALUES ? ";

 let data=[];
 for(let i=0;i<=100;i++){
   data.push(getRandomUser());
 }

try{
  connection.query(q,[data],(err,result)=>{
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

