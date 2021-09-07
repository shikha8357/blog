import React from 'react'
import "../header/header.css";

export default function Header() {
    
        return (
            <div className="header">
                <div className="headerTitle">
                    {/* <span className="headerTitlenode">React Node</span> */}
                    <span className="headerTitlebg">Blog</span>
                </div>
                <img classname="headerimg" style={{width: "100%" ,
    height: "650px" ,
    objectfit: "cover",
    marginTop:"-40px"}} src={process.env.PUBLIC_URL+"/comp2.jpg"} alt="" />
            </div>
        
    );
}
