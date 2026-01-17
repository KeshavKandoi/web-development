const http = require("http");

const server = http.createServer((req,res) =>{
  console.log(req.url,req.method,req.headers);

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
});
const port=3000;
server.listen(port,() =>{
console.log(`server running on port ${port}`);
});

