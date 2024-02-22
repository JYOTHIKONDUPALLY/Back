const http =require("http");
const Port=8081;
const data=require("./currencies.json");

const server=http.createServer((req, res)=>{
    const {url}=req;
    const splitUrl=url.split("/");
    console.log(splitUrl);
if(req.url=="/"){
res.write("<h1>Currency Database</h1>")
}
else if (splitUrl[1] === "currencies") {
    console.log("currency data");
    if (splitUrl[2]) {
        const symbol = splitUrl[2];
        const symbolData = data.data.find((c) => c.id === symbol.toUpperCase());
        if (symbolData) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(symbolData));
        } else {
            res.writeHead(404); 
            res.end(); 
        }
    } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(data));
    }
}

else{
    res.writeHead(404);
}
res.end();
});

server.listen(Port, ()=>{
console.log(`server is running in 8081`);
});
