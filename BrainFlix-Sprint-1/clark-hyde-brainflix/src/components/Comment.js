import '../styles/Comment.scss';
import fillerimage from '../Assets/Images/fillerimage.PNG'

function Comment({name,comment,timestamp}) {
    let formattedTime = new Date(timestamp).toLocaleDateString("en-us");
    return(
        <ul className="comments">
        <li className="comments__item">
            <img className="comments__image" src={fillerimage}></img>
            <span className="comments__name">{name}</span>
            <span className="comments__date">{formattedTime}</span>
            <p className="comments__comment">{comment}</p>
        </li>

    </ul>

    );
}

export default Comment;