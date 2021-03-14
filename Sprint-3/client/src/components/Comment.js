import '../styles/Comment.scss';
import fillerimage from '../Assets/Images/fillerimage.PNG'

function Comment({name,comment,timestamp,videoId, commentId, deleteComment}) {
    console.log(deleteComment);
    let formattedTime = new Date(timestamp).toLocaleDateString("en-us");
    return(
        <ul className="comments">
        <li className="comments__item" id={`${commentId}`}>
            <img className="comments__image" src={fillerimage}></img>
            <span className="comments__name">{name}</span>
            <span className="comments__date">{formattedTime}</span>
            <p className="comments__comment">{comment}</p>
            <span onClick={() =>deleteComment(commentId, videoId)}>DELETE COMMENT</span>
        </li>

    </ul>

    );
}

export default Comment;