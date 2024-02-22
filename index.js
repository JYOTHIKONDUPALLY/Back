const http =require("http");
const Port=8081;
//Create a server and send a html , for request of status send serevr status
const server=http.createServer((req, res)=>{
if(req.url==='/status'){
    const date=new Date().toLocaleDateString();
    const time=new Date().toLocaleTimeString();
    const serverStatus={
        name:"jyothi",
        version:"4.5",
        date,
        time
    }
    res.writeHead(200,{"Content-Type":"application/json"})
    res.write(JSON.stringify(serverStatus));
}
else{
    res.write("<h1>Hi from server</h1>")
}
res.end();
});

server.listen(Port, ()=>{
console.log(`server is running in 8081`);
});
