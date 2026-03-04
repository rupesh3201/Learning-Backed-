import express from "express";
const app = express();
const PORT = 5000;

app.use(express.json())

let users = [
  { id: 1, name: "Rupesh", age: 25 }
];

app.get("/api/users/:id", (req, res) =>{
    users.find(u=>u.id ==req.params.id)
      if (!users) {
    return res.status(404).json({ message: "User not found" });
  }

  res.json(users);

});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello Rupesh 👋",
    status: "success"
  });
});

app.post("/api/user", (req, res)=>{
    res.json({
        message: "Hii User 👋", 
        status : "success"
    })
})


//new user 

app.post("/api/user", (req, res)=>{
    res.json({
        message: "Hii User 👋", 
        status : "success"
    })
})

app.post("/api/user", (req, res)=>{
    res.json({
        message: "Hii User 👋", 
        status : "success"
    })
})

app.put("/api/home", (req, res)=>{
    res.json({
        message: "Hii User 👋 ur on Home Page ", 
        status : "success"
    })
})

app.patch("/api/contact", (req, res)=>{
    res.json({
        message: "Hii User 👋 ur on Contact Page ", 
        status : "success"
    })
})

app.delete("/api/contact", (req, res)=>{
    res.json({
        message: "Hii User 👋 ur on Details Page ", 
        status : "success"
    })
})



app.get("/",(req,res)=>{
    res.send("Hello Rupesh! Your first server is running 🚀"); 
})


app.listen(PORT, ()=>{ 
    console.log(`sever is running on ${PORT}`);
});