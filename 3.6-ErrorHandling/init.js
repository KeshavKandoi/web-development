const mongoose=require("mongoose");
const Chat=require("./models/chat.js")


main().then(()=>{
  console.log("connection successful");
})
.catch((err)=>{
  console.log(err);
})

async function main(){
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp")
}

let allChats=[
   
    {
      from: "AS",
      to: "KK",
      message: "I am fine, what about you?",
      created_at: new Date(),
    },
    {
      from: "Rahul",
      to: "Neha",
      message: "Are you coming today?",
      created_at: new Date(),
    },
    {
      from: "Neha",
      to: "Rahul",
      message: "Yes, I will reach by 7 PM.",
      created_at: new Date(),
    },
    {
      from: "Aman",
      to: "Riya",
      message: "Did you complete the project?",
      created_at: new Date(),
    },
    {
      from: "Riya",
      to: "Aman",
      message: "Almost done, sending it soon.",
      created_at: new Date(),
    },
    {
      from: "John",
      to: "Alex",
      message: "Let’s meet tomorrow.",
      created_at: new Date(),
    },
    {
      from: "Alex",
      to: "John",
      message: "Sure, see you at the cafe.",
      created_at: new Date(),
    },
  ];
  


  Chat.insertMany(allChats)
  .then((res) => {
    console.log("Chats inserted successfully ");
    console.log(res);
  })
  .catch((err) => {
    console.log("Error inserting chats ");
    console.log(err);
  }); 