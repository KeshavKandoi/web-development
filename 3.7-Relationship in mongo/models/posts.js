// child ke andar parent ka data save kre gye many to many mai but one to many mai parent ke andar child ka data save kre gye 


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
email:String,
});

const postSchema=new Schema({
  content:String,
  likes:Number,
  user:{
    type:Schema.Types.ObjectId,
    ref:"User"
  }
});



// const addData=async()=>{
//   let user1=new User({
//     username:"rahulkumar",
//     email:"rahul@gmail.com"
//   });

//   let post1=new Post({
//     content:"HELLO WORLD! ",
//     likes:7,
//   });
//   post1.user=user1;
//   await user1.save();
//   await post1.save();
// };


const User=mongoose.model("User",userSchema);
const Post=mongoose.model("Post",postSchema);







const addData=async()=>{


  let user=await User.findOne({username:"rahulkumar"});

  let post2=new Post({
    content:"BYE BYE ",
    likes:447,

  });
  post2.user=user;
  

  await post2.save();
};

addData();
