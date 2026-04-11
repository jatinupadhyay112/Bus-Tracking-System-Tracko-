const express = require('express');
const app = express();

app.use(express.json());

const arr=[
{name: "Diya", age: 21},
{name: "Minho", age: 25}
]

app.get ('/', (req, res)=>{
    res.send('i am your server')
})
app.get ('/hi', (req, res)=>{
    res.json({
        sucess: true,
        count: arr.length,
        data:arr
    })
})

app.post("/hipost",(req, res) => {
    const {name, age} = req.body;

    arr.push({name,age});
    
    res.json({
        success: true,
        count: arr.length,
        data: arr
    });
})

app.listen(3000, () => {
    console.log ("server running on Port 3000");
} )