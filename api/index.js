const express = require("express");
const cors = require("cors");

const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute=require("./routes/auth");
const userRoute=require("./routes/user");
const postRoute=require("./routes/posts");
const categoryRoute=require("./routes/categories");
const newComment=require("./routes/comment");
const getComments=require("./routes/comment");
const multer=require("multer");
const path=require("path");
// import {newComment} from "../api/routes/comment.js";


// const dummyRoute=require("./routes/dummypost");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors());


app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
    );
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,Cache-Control,Accept,X-Access-Token ,X-Requested-With, Content-Type, Access-Control-Request-Method"
    );
    if (req.method === "OPTIONS") {
    return res.status(200).end();
    }
    next();
    });

mongoose.connect(process.env.MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify:true })
.then(console.log("connect to mongodb"))
.catch((err)=>console.log(err));

const storage = multer.diskStorage({
destination:(req,file,cb)=>{
    cb(null,"images");
},
filename:(req,file,cb)=>{
    // cb(null,"hello image");///for postman trial
    cb(null,req.body.name);///for main project trail
},
});
const upload=multer({storage:storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("File has been uploaded")
});

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/categories",categoryRoute);
app.post("/comment/new",newComment);
app.get("/comments/:id",getComments);


app.listen("2000", () => {
    console.log("running");
});


