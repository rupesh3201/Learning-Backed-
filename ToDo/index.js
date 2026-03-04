import express from 'express';

const app = express();
const Port = 4000;

app.use(express.json());

const TODO_ITEMS = [ 
    "Study DSA",
    "Finish Office Work",
    "Go to Gym",
    "PR Before Gym"
];
console.log(TODO_ITEMS);
app.get("/todos", (req, res) => {
    res.json({
        success: true,
        data: TODO_ITEMS,
        message: "TO DO ITEMS Fetch Successfully"
    });
});

app.post("/todos", (req, res) => {

    console.log("Request Body:", req.body);

    const { todoItem } = req.body;

    if (!todoItem) {
        return res.status(400).json({
            success: false,
            message: "Todo item required"
        });
        TODO_ITEMS.push(todoItem);
    }


    res.status(201).json({
        success: true,
        data: TODO_ITEMS,
        message: "Data Added Successfully"
    });
});

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});