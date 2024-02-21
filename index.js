const http=require("http");

const Port=8081;

//.createServer is a function which create a server
const server=http.createServer((req, res)=>{
console.log("server created")
const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();
console.log(date, time);
res.write("hello from jyothi");
res.end();
});

//.listen is a function used for server to listen
server.listen(Port,()=>{
    console.log("server is running in 8081 port")
})