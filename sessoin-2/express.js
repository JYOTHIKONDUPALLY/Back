const express=require("express");
const Port=8082;
const data=require("./currencies.json");
//server creation
const app=express();

app.get("/", (req, res)=>{
    res.send("<h1>currency database</h1>");
})
app.get("/currencies", (req, res)=>{
    const minValue=req.query.min_value;
    if(minValue){
        res.json(data.data.filter(c=>Number(c.min_size)===Number(minValue)));
    }else{
        res.json(data);
    }
 
})

app.get("/currencies/:symbol",(req, res)=>{
    const symbol=req.params.symbol;
    const symbolData=data.data.find((c)=>c.id==symbol.toUpperCase());
    if(symbolData){
        res.json(symbolData)
    }
    else{
        res.sendStatus(404);
    }
})









app.listen(Port,()=>
console.log("express started"));