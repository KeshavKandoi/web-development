import 'dotenv/config';
import express from 'express';

const app=express();



app.get('/api/jokes',(req,res)=>{
  const jokes = [
    {
      id: 1,
      title: "Programming Joke",
      content: "Why do programmers prefer dark mode? Because light attracts bugs!",
      category: "Programming",
      author: "Keshav",
      likes: 120,
      isFunny: true
    },
    {
      id: 2,
      title: "Math Joke",
      content: "Why was the math book sad? Because it had too many problems.",
      category: "Math",
      author: "Anonymous",
      likes: 85,
      isFunny: true
    },
    {
      id: 3,
      title: "Dad Joke",
      content: "I would tell you a joke about construction... but I'm still working on it.",
      category: "Dad Jokes",
      author: "John",
      likes: 60,
      isFunny: false
    }
  ];
  res.send(jokes);
})
const port=process.env.PORT||3000;

app.listen(port,()=>{
  console.log(`server at http//:localhost:${port}`);
});