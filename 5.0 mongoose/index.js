const mongoose=require("mongoose");

main()
 .then(()=>{
  console.log("successful")
 })
 .catch((error)=>{
  console.log("error")
 })

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// schema

const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  age:Number
});

// model
// ye model naame

const User=mongoose.model("User",userSchema);
const Employee=mongoose.model("Employee",userSchema);

// inserting one 

const user2=new User({
  name:"KK",
  age:29,
  email:"KK@gmail.com"
});

// user2.save();
// or

user2.save().then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log("error")
})

// // insert many

User.insertMany([
  {name:"RR",age:25,email:"RR@gamil.com"},
  {name:"RI",age:26,email:"RI@gamil.com"},
  {name:"SK",age:27,email:"Sk@gamil.com"},
]).then((res)=>{
  console.log(res);
})


//find

// User.find({})
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })


// User.find({age:{$gt:28}})
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })


// User.find({age:{$gt:28}})
// .then((res)=>{
// console.log(res[0].name)
// }).catch((err)=>{
//   console.log(err)
// })



// User.findOne({_id:"6974f3ad9aa7b4a559352df4"})
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })


// User.findById("6974f3ad9aa7b4a559352df4")
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })



// update

// User.updateOne({name:"SK"},{age:6969}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log("err")
// })

// User.find({})
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })


// User.updateMany({age:{$gt:25}},{age:6666}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//      console.log("err")
// })



// User.find({})
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })

// User.findOneAndUpdate({name:"KK"},{age:25555555},{new:true}).then((res)=>{
//     console.log(res);
//   }).catch((err)=>{
//        console.log("err")
//   })



// User.findByIdAndUpdate("6974fdb970abeeffe606d3aa",{name:"KKKKKKK"},{new:true})
// .then((res)=>{
//     console.log(res);
//   }).catch((err)=>{
//        console.log("err")
//   })



// DELETE

// User.deleteOne({name:"KK"}).then((res)=>{
//      console.log(res);
//     }).catch((err)=>{
//          console.log("err")
//     })

//     User.find({})
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
//   console.log(err)
// })



// User.deleteMany({name:"KK"}).then((res)=>{
//   console.log(res);
//  }).catch((err)=>{
//       console.log("err")
//  })

//  User.find({})
// .then((res)=>{
// console.log(res)
// }).catch((err)=>{
// console.log(err)
// })



// User.findByIdAndDelete("69750257f4ba9ec70e43d28c").then((res)=>{
//     console.log(res);
//    }).catch((err)=>{
//         console.log("err")
//    })



User.findOneAndDelete({name:"SK"}).then((res)=>{
    console.log(res);
   }).catch((err)=>{
        console.log("err")
   })

