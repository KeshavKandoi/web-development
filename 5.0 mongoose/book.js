const mongoose=require("mongoose");

main()
 .then(()=>{
  console.log("successful")
 })
 .catch((error)=>{
  console.log("error")
 })

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}



const bookSchema=new mongoose.Schema({
 title:{
  type:String,
  required:true,
  maxLength:20,
 },
 author:{
  type:String,
 },
 price:{
  type:Number,
  min:[1,"Price is to low for amazon selling"]// ye hum uska error print karne ke liye likhe ye print ho gaya agar iske karan error aaega to
 },
 discount:{
  type:Number,
  default:0,
 },
 category:{
  type:String,
  enum:["Fiction","Non-fiction"]
 },
 genre:[String],
});

const Book=mongoose.model("Book",bookSchema);


// let book1=new Book({
//   title:"MARVEL",
//   author:"CAPTAIN AMERICA",
//   price:1190,
//   category:"Fiction",
//   genre:["comics","superhero"],

// });

// book1.save().then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err)
// })

// Book.findByIdAndUpdate("69750b7867790bc588757b8b",{price:10000},{runValidators:true}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err); 
// })

// Book.findByIdAndUpdate("69750b7867790bc588757b8b",{price:-5000},{runValidators:true}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err.errors.price.properties); 
// })

Book.findByIdAndUpdate("69750b7867790bc588757b8b",{price:-5000},{runValidators:true}).then((res)=>{ //run validators update mai hum jo condition diye hai usko follow karvata hai like price min 1 hona chahiye -400 liye to nahi ho ga but agar runvalidator nahi likhe gye to -400 bhi print ho jaye ga
  console.log(res);
}).catch((err)=>{
  console.log(err.errors.price.properties.message); // error ka pura message print kr de ga jp hum diye hogaye
})