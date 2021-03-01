import '../styles/Comment.scss';
import fillerimage from '../Assets/Images/fillerimage.PNG'

function Comment({thumbs}) {
    console.log(thumbs);
    return(
        <ul className="comments">
        <li className="comments__item">
            <img className="comments__image" src={fillerimage}></img>
            <span className="comments__name"></span>
            <span className="comments__date"></span>
            <p className="comments__comment"></p>
        </li>

    </ul>

    );
}

export default Comment;