// import {Comment} from "../models/Comment";
// const router = require("express").Router();


const Comment = require("../models/Comment");
const newComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body);
        comment.save();
        res.status(200).json("comment saved successfuly!");
    } catch (err) {
        res.status(500).json(err);
    }
}

 const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({postid:req.params.id});
        res.status(200).json(comments);
    } catch (err) {
        res.status(500).json(err);
    }
 }


module.exports = [
    getComments,newComment,
];