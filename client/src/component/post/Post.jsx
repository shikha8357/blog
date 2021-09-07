
import "./post.css"
import { Link } from "react-router-dom";


export default function Post({ post }) {
    const PF="http://localhost:1000/images/";
    const addlipses=(str,limit)=>{
        return str.length> limit ?str.substring(0,limit)+ "..." :str;
    }
    return (
        <div classname="post">
            {post.photo &&(
           <img src={PF+ post.photo}  class="postimg" />
             )}
          
            <div className="postinfo">
                <div className="postcats">
                    {post.category.map((c) => {

                        <span className="postcat">{c.name}</span>
                    })}

                </div>
                <Link className="link" to={`/post/${post._id}`}>

                <span className="posttitle">{addlipses(post.title,20)}</span></Link>
                <hr /><span className="postdate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postdes">
                {addlipses(post.desc,100)}
            </p>
        </div>
    )
}


