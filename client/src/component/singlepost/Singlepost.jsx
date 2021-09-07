// import React from 'react'
import { Link } from "react-router-dom";
import "./singlepost.css";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { Context } from "../../context/Context";


export default function Singlepost() {

    const location = useLocation();
    console.log(location);
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({})
    const PF = "http://localhost:1000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState("");


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)

            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost();
    }, [path]);


    const handleDelete = async () => {
        try {

            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });

            window.location.replace("/");

        }
        catch (err) { }
    };

    const handleUpdate = async () => {
        try {

            await axios.put(`/posts/${post._id}`, {
                username: user.username, title: title, desc,
            });

            // window.location.reload();
            setUpdateMode(false);

        }
        catch (err) { }

    };
    // console.log(post.username===user.username);
    return (
        <div className="singlepost">
            <div className="singlepostwrapper">
                {post.photo && (
                    <img src={PF + post.photo} style={{
                        margin: "25px 15px",
                        height: "450px",
                        width: "94%",
                        borderRadius: "2px"
                    }} alt="" className="singlepostimg" />
                )}
                {
                    updateMode ? <input type="text" name="" id="" value={title} className="singlepostitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (


                        <h1 className="singlepostitle">{title}
                            {post.username === user?.username && (
                                <div className="singlepostedit">
                                    <i className="singleposticon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singleposticon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )
                }
                <div className="singlepostinfo">
                    <span className="singlepostauthor" style={{ marginLeft: "15px", fontSize: "21px" }}>Author:
                        <Link className="link" to={`/?user=${post.username}`}>

                            <b style={{ marginLeft: "10px" }}>{post.username}</b></Link>
                    </span>
                    <span className="singlepostdate" style={{ fontSize: "17px" }}>{new Date(post.createdAt).toDateString()} </span>
                </div>
                {updateMode ? <textarea className="singlepostdesInput" value={desc} onChange={(e) => setDesc(e.target.value)} /> : (
                    <p className="singlepostdes">
                        {desc}

                    </p>
                )
               
                }

                {
                    updateMode && (


                        <button className="singlepostButton" onClick={handleUpdate}>Update</button>
                    )}

            </div>
        </div>
    )
}
