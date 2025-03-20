import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("yashal server on");
})
//app.get(Path,requestHandler(also called middleware))
app.get("/yash",(req,res)=>{
    res.send("server on yash");
})
app.listen(3000);