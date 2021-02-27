import Comment from './Comment';


function CommentList ({vids}) {

    return(
        <ul className="comments">
        {vids.map((vid)=>{
            return(
            <Comment
            key={vid.id}
            id={vid.comments.id}
            name={vid.comments.name}
            timestamp={vid.comments.timestamp}
            comment={vid.comments.comment}
            />
        );
        })}
    </ul>
    );
}

export default CommentList;