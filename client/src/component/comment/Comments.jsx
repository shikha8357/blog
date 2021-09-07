import React from 'react'
import { useState, useEffect } from 'react';
import { newComment, getComments } from "../../pages/single/Single"
import Comment  from "./Comment";


const initialvalue = {
    name: "",
    postid: '',
    date: new Date(),
    comment: "",

}
const Comments = ({ post }) => {
    const [comment, setComment] = useState(initialvalue);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post]);
    // console.log(post);

    const handleChange = (e) => {
        setComment({
            // ...comment,
            name: post.username,
            postid: post._id,
            comment: e.target.value,
            date: new Date(),
        })
    }

    const postComment = async () => {
        await newComment(comment);
    }

    return (
        <div >
            <div style={{ marginTop: "100px", display: "flex" }}>
                {/* <img src={process.env.PUBLIC_URL+'/girl.jpg'} style={{height:"50px",width:"50px",borderRadius:"50%"}} alt="dp" /> */}
                <i class="fas fa-user-circle" style={{ height: "200px" }}></i>
                <textarea style={{ width: "100%", margin: "0 20px" }} onChange={(e) => handleChange(e)}></textarea>
                {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}

                <button style={{ background: "lightblue", color: "var(--color-primary)", height: "20px" }} onClick={() => postComment()}>Post</button>
            </div>
            {
                comments && comments.map(comment=> (
                    <Comment comment={comment}/>
                ))
            }
        </div>
    )
}
export default Comments;
