require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const survey = require('./server/routes/survey');
const mongoose = require('mongoose');
const cors = require('cors');

// middleware
app.use(cors({
    origin:[`${process.env.FRONTEND}`,"http://localhost:3000"]
}));
app.use(express.json());

app.use((req,res,next)=>{
    next();
})

app.use('/api/survey',survey);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log("DB connected and App listening on PORT " + PORT );
    });
    
})
.catch((error)=>{
    console.log(error)
})




