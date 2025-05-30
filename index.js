const express=require('express');
const app=express();

require("dotenv").config();
const PORT=process.env.PORT||4000;

//middleware to parse json
app.use(express.json());

//import routes

const todoroutes=require("./routes/todos")

app.use("/api/v1",todoroutes);

app.listen(PORT,()=>{
    console.log("server started");
})
const dbConnect=require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send('<h1>this is homepag</h1>')
})