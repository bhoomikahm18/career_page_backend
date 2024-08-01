const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/user_routes.js')

dotenv.config();

const app = express();
app.use(express.json());
app.use("/user", userRouter)

mongoose.connect(`mongodb+srv://bhoomikahm18:${process.env.PASSWORD}@cluster0.gglx70l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(5001, () => console.log("Connected to database and Server running at port number 5001"))
    })
    .catch(err => console.log(err));
