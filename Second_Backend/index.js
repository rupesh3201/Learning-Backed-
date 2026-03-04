import express from "express";

const app = express();
const PORT = 8000;
app.use(express.json());


app.listen(PORT, ()=>{ 
    console.log(`sever is running on ${PORT}`);
});

let STUDENTS = [
    {
    id: 1,
    name: "Rupesh",
    age: 25,
    city: "Pune",
    details: {
      course: "Full Stack Development",
      college: "SPPU",
      email: "rupesh@gmail.com",
      phone: "9876543210",
      skills: ["React", "Node.js", "MongoDB"],
      isActive: true
    }
  },
  {
    id: 2,
    name: "Amit",
    age: 23,
    city: "Mumbai",
    details: {
      course: "Computer Engineering",
      college: "Mumbai University",
      email: "amit@gmail.com",
      phone: "9123456780",
      skills: ["Java", "Spring Boot"],
      isActive: false
    }
  },
  {
    id: 3,
    name: "Sneha",
    age: 24,
    city: "Nagpur",
    details: {
      course: "Data Science",
      college: "VNIT",
      email: "sneha@gmail.com",
      phone: "9988776655",
      skills: ["Python", "Machine Learning"],
      isActive: true
    }
  }
];


app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello Rupesh 👋",
    status: "success"
  });
});


// TO Add Get All Student 
app.get("/STUDENTS",(req,res)=> {
    res.json(
        {
            message: "STUDENTS DATA Get Sucessfully",
            success: true,
            total: STUDENTS.length,
            data: STUDENTS
        }
    );
});
// TO Add Student 
app.post("/STUDENTS",(req,res)=>
{
    const NewStudent = req.body ; 
    if (!NewStudent.name || !NewStudent.age || !NewStudent.city) {
    return res.status(400).json({
      success: false,
      message: "Name, age and city are required"
    });
    }
    NewStudent.id = STUDENTS.length + 1;

    const existingStudent = STUDENTS.find(
    s => s.details?.name === details?.name
  );

  if (existingStudent) {
    return res.status(409).json({
      status: false,
      message: "Student with this email already exists ❌"
    });
  }
    STUDENTS.push(NewStudent);


    res.status(201).json({
    success: true,
    message: "Student Added Successfully ✅",
    data: NewStudent
  });
});


app.get("/STUDENTS/:id",(req,res)=>
{
    const id = parseInt(req.params.id) ; 
    const Student = STUDENTS.find(s=>s.id === id);

    if (!Student) {
    return res.status(404).json({
      status: false,
      message: "Student not found"
    });
  }
  res.json({
    status: true,
    data: Student
  });

});