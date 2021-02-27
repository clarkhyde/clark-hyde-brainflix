import '../styles/Comment.scss';

function Comment({id, name, timestamp, comment}){
    return(
        <li>
            <img></img>
            <h3> {name}</h3>
            <h3> {timestamp}</h3>
            <p> {comment}</p>
        </li>
    );
}


export default Comment;