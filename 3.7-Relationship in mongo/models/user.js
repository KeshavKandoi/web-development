  const mongoose=require("mongoose");
  const {Schema}=mongoose;


  async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
  
  }
  


main()
 .then(()=>{
  console.log("successful")
 })
 .catch((error)=>{
  console.log(error)
 })

const userSchema= new Schema({
  username:String,
  addresses:[
    {
      _id:false,
      location:String,
      city:String,
    },
  ],

});


const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
  let user1=new User({
    username:"sherlockhomes",
    addresses:[
      {
        location:"Times Square",
        city:"London",
      },
    ],
  }); 

  //one more way to push
  user1.addresses.push({
    location:"Wall Street",
    city:"London",
  });
  let result=await user1.save();
  console.log(result)
}

addUsers();