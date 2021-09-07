import "./setting.css";
import Sidebar from "../../component/sidebar/Sidebar";
// import { Context } from "react";
import axios from "axios";
import {useState,useContext} from "react";
import { Context } from "../../context/Context";




export default function Setting() {
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const {user,dispatch}= useContext(Context);

    const PF="http://localhost:1000/images/"
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userid: user._id,
          username,
            email,
            password,

        };
    if (file) {
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        updatedUser.profilepic = filename;

        try {
            await axios.post("/upload", data);
        } catch (err) {

        }
    }
    try {
      const res=  await axios.put("/users/"+ user._id , updatedUser);
        setSuccess(true);
        dispatch({type:"UPDATE_SUCCESS",payload:res.data});
       

    } catch (err) {
        dispatch({type:"UPDATE_FAILURE"})

    }

};
    return (
        <div className="setting" >
          <div className="settingwrapper">
              <div className="settingtitle">
                  <span className="settingupdate">Update  account</span>
                  <span className="settingdelete">Delete Account</span>
              </div>
              <form  className="settingform" onSubmit={handleSubmit}>
                  <label>Profile Picture</label>
                  <div className="settingprofilepic">
                      <img src={ file ? URL.createObjectURL(file) :  PF + user.profilepic} alt="" />
                    <label htmlFor="fileinput">
                    <i class=" settingprofileicon fas fa-user-circle"></i>
                    </label>
                    <input type="file" name="" id="fileinput" style={{display:"none"}}  onChange={e => setFile(e.target.files[0])}/>
                  </div>
                  <label>Username</label>
                  <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                  <label>Email</label>
                  <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}  />
                  <label >Password</label>
                  <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}  />
                 <button className="settingsubmit" type="submit">Update</button>
                 {success && <span style={{color:"green" ,textAlign:"center",marginTop:"20px" ,fontFamily:"sans-serif"}}>Profile has been updated....</span>}
              </form>

          </div>
              <Sidebar />
            
        </div>
    )
}
