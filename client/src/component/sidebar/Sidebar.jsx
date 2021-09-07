

import axios from 'axios';
import {Link} from "react-router-dom"
import React, { useState,useEffect } from 'react';
import "./sidebar.css";

export default function Sidebar() {
    // const [cats,setCats]= useState([]);
    const [cats,setCats]= useState([]);

    useEffect(() => {
        const getCats= async()=>{
            const res=await axios.get("/categories");
            console.log(res);
            setCats(res.data);
        };
        getCats();
    }, []);
    return (

        <div className="sidebar" style={{flex:"1"}} >
            <div className="sidebaritem" style={{ marginTop: "20px" }}>
                <span className="sidebartitle" style={{fontWeight:"bold"}}>ABOUT ME</span>
                <div>  <img src={process.env.PUBLIC_URL + "/sidebarphoto.jpg"} style={{ height: "233px", width: "96%" ,marginleft:"10px"
  
}} alt="" />
                </div>
                <p style={{marginLeft:"25px"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto minus voluptas culpa saepe repellat temporibus! 
                </p>

            </div>
            <div className="sidebaritem">
                <span className="sidebartitle" style={{fontWeight:"bold"}}>CATEGORIES</span>
                <ul className="sidebarlist">

                    {cats.map((c)=>(
                        <Link to={`/?cats=${c.name}`} className="link">
                        <li className="sidebarlistitem">{c.name}</li>
                        </Link>

                    ))}
                </ul>
            </div>
            <div className="sidebaritem">
                <span className="sidebartitle" style={{fontWeight:"bold"}}>
                    Follow Us
                </span>
                <div className="sidebarspecial">
                    <i className="sidebaricon fab fa-facebook"></i>
                    <i className="sidebaricon  fab fa-twitter"></i>
                    <i className="sidebaricon  fab fa-instagram"></i>
                    <i className="sidebaricon fab fa-pinterest"></i>
                </div>
            </div>
</div>
            )
}
