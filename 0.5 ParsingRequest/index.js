const http = require('http');

const server = http.createServer((req,res) =>{
  console.log(req.url)

  if(req.url==='/'){
    res.setHeader('Content-type','text/html');
    res.write('<h1>Gender Form</h1>');
    res.write('<form action="/" method="POST">');
    res.write('<label><input type="radio" name="gender" value="male" required> Male</label><br>');
    res.write('<label><input type="radio" name="gender" value="female"> Female</label><br>');
    res.write('<label><input type="radio" name="gender" value="other"> Other</label><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
  }
  const body=[]
  req.on('data',(chunk)=>{
    console.log(chunk);
    body.push(chunk)
  })
  req.on('end',() =>{
    const fullBody=Buffer.concat(body).toString();
    console.log(fullBody)
  })
})
const port=3000;

server.listen(port,() =>{
  console.log(`server staring at ${port}`)
})