// import React from 'react'
import "./single.css";
import Sidebar from "./../../component/sidebar/Sidebar";
import Singlepost from "../../component/singlepost/Singlepost";
import axios from "axios";
const PF = "http://localhost:1000"


export default function Single() {
    return (
        <div className="single">
            <Singlepost />
            <Sidebar />
        </div>
    )
}

export const newComment = async (data) => {
    try {
        return await axios.post(`${PF}/comment/new`, data)
    } catch (err) {
        console.log("error while calling api", err)
    }
}

export const getComments =  async(id) => {
    try {
        let response =  await axios.get(`${PF}/comments/${id}`);
        return response.data;
        console.log(response.data);
    } catch (err) { 
        console.log("error while calling getapi", err)
    }
}
