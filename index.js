const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const userRouter = require('./routes/user_routes.js');
const jobsRouter = require('./routes/job_routes.js');
const jobApplicationRouter = require('./routes/application.routes.js');
const fileUpload = require('express-fileupload');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use("/user", userRouter);
app.use("/jobs", jobsRouter);
app.use("/application/form", jobApplicationRouter)

mongoose.connect(`mongodb+srv://bhoomikahm18:${process.env.PASSWORD}@cluster0.gglx70l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        app.listen(5001, () => console.log("Connected to database and Server running at port number 5001"))
    })
    .catch(err => console.log(err));
