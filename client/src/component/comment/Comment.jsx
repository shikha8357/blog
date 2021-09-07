
const Comment = ({comment}) => {
    return (
        // <p>hello!!!</p>
        <div style={{marginTop:"20px"}}>
            <div style={{}}>
                <div>{comment.name}</div>
                <div>{new Date(comment.date).toDateString()}</div>
            </div>
            <div>{comment.comment}</div>
        </div>
    )
}
export default Comment;