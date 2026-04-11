const express = require("express");
const mongoose = require("mongoose");

const Data = require("./models/Data");

const app = express();
app.use(express.json()); // middleware

mongoose.connect("mongodb+srv://rawatvarun410_db_user:varun24@cluster0.hjmwnpj.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("Connected");
})
.catch((err) => {
    console.log("Error aa gya h:", err);
})

// let data = [
//     {id: 1, name: "varun", age: 10}, // 0
//     {id: 2, name: "DK", age: 20}, // 1
//     {id: 3, name: "PK", age: 30}  // 2
// ]

// Get Request
app.get("/data", async (req, res) => {

    const result = await Data.find();

    res.json({
        status: "success",
        result: result
    })
    
})

app.get("/data/:id", async (req, res) => {

    const id = req.params.id;

    const user = await Data.findById(id);

    res.json({
        user: user
    })

})

app.post("/data", async (req, res) => {
    try {
        const { name, age } = req.body;

        // validation
        if (!name) {
            return res.status(400).json({
                status: "fail",
                message: "Name is required"
            });
        }

        const newData = await Data.create({
            name,
            age
        });

        res.status(201).json({
            status: "success",
            data: newData
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message
        });
    }
});

app.delete("/data/:id", async (req, res) => {
    const deletedData = await Data.findByIdAndDelete(req.params.id);

    res.json({
        message: "Deleted",
        result: deletedData
    })
})


app.listen(3000, () => {
    console.log("Server chl rha h 3000 port pr");
})