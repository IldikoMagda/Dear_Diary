const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/users');
const entriesRouter = require('./routers/entries');

const app = express(); 

app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.json({
        project : "Dear Diary", 
        description: "You can enter any secrets to your diary"
    })
})
app.use('/users', userRouter)
app.use('/entries', entriesRouter)

module.exports = app;