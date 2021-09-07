


import"./posts.css"
import Post from"../../component/post/Post"


export default function Posts({posts}) {

      return (
        <div classname="posts" style={{margin: "50px",flex:"9"}} >
            { posts.map((p)=>

 <Post post={p}/>
 
            
             )}  
           
           
        </div>
      ) 

}

 
