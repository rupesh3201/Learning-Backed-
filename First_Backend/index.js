import express from "express";
const app = express();
const PORT = 5000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello Rupesh! Your first server is running 🚀"); 
})


app.listen(PORT, ()=>{ 
    console.log(`sever is running on ${PORT}`);
});