 import {useEffect, useState} from "react";
 import "./home.css"
 import Header from "../../component/header/Header";
import Posts from "../../component/posts/Posts";
import Sidebar from "../../component/sidebar/Sidebar";
import axios from "axios";
import {useLocation} from "react-router";

export default function Home() {
    const [posts ,setPosts]=useState([]);
     const {search}=useLocation();
    
    useEffect(() => {
     const fetchPosts =async()=>{
           const res= await axios.get("/posts"+search);
           setPosts(res.data);
           console.log(res);
        
        }
        fetchPosts();
       
    }, [search]);
    
    return (
        <>
        
              <Header />
<div className="homeps">
  <div>
    <Posts posts={posts}/>
    
   
    </div>
    <Sidebar/>
</div>
      
           </> 
    );
}
// }



// import "./home.css"
// import Header from "../../component/header/Header";
// import Post from "../../component/post/Post";
// import Sidebar from "../../component/sidebar/Sidebar";

// export default function Home() {
//     return (
//         <div className="home">
//         <>
//               <Header />
// <div className="homeps">
//   <div>
//     <Post/>
//     <Post/>
//     <Post/>
//     </div>
    
//     <Sidebar/>
// </div>
          
//            </> 
//         </div>
//     )
// }
