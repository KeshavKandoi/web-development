import express from 'express';
const app =express();
const port = 3000;

app.listen(port,() => {
  console.log(`server running on port ${port}.`);
})
app.use((res,req)=>{
console.log("request received")
})