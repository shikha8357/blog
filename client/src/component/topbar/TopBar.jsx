import {useContext} from 'react'
import { Context } from '../../context/Context';
import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const {user,dispatch}= useContext(Context);
  const PF="http://localhost:1000/images/";

  const handleLogout=()=>{
dispatch({type:"LOGOUT"})
  }
   
    return (
        <div className="top">
            <div className="topleft">
                <i className="topicon fab fa-facebook"></i>
                <i className="topicon fab fa-twitter"></i>
                <i className="topicon fab fa-instagram"></i>
                <i className="topicon fab fa-pinterest"></i>
            </div>
            <div className="topcenter">
                <ul className="toplist">
                    <li className="toplistitem "><Link className="link" to="/" >Home</Link></li>
                    {/* <li className="toplistitem" ><Link className="link" to="/" >ABOUT</Link></li> */}
                    {/* <li className="toplistitem"><Link className="link" to="/" >CONTACT</Link></li> */}
                    <li className="toplistitem"><Link className="link" to="/write" >WRITE</Link></li>
                    <li className="toplistitem"  onClick={handleLogout} >
                      {user && "LogOut"}
                    </li>
                </ul>

            </div>
            <div className="topright">
                { user ? (
                        <Link to="/settings" >
                        <img className="topimg" src={ PF+user.profilepic} alt="logo" />
                        </Link>
                        ): (
                            <ul className="toplist">
                                <li className="toplistitem">
                                    <Link className="link" to="/login">LOGIN</Link></li>
                                <li className="toplistitem">
                                    <Link className="link" to="/register">REGISTER</Link></li>
                            </ul>
                        )
                }
                <i className="topsearchicon fas fa-search"></i>
            </div>
        </div>

    )
}










