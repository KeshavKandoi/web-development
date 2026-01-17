import express from "express";
const app = express();
const port = 3000;

// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1>");
});

app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201)
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});

// for query https://www.google.com/search?q=instagram iss type ka ho to




// app.get("/search",(req,res)=>{
//   res.send("Result")
// });

app.get("/search",(req,res)=>{
  let{q}=req.query;
  if(!q){
    res.send("<h1>Nothing searched</h1>")
  }
  res.send(` search Result for query:${q}`)
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
