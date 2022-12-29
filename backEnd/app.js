const express = require('express');
const  env=require('dotenv').config();
const logger = require('morgan');
const createError = require('http-errors');
const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");



const firstPageRoute=require('./routes/firstPageRoute');


const app = express();
const server = http.createServer(app);

app.use(cors())

app.use(logger('dev'));
app.use(express.json());



//change to config files
mongoose.connect(process.env.mongoURL).then((res) => {
  console.log("mongodb connected")
})

app.use('/',firstPageRoute)

//change to middleware
app.use(function (req, res, next) {
    next(createError(404));
  });
app.use(function (err,req, res, next) {
    res.json({err})
  });

const PORT=process.env.PORT||2000
server.listen(PORT, () =>
  console.log(` app listening on port ${PORT}!`),
);