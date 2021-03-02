import '../styles/Comment.scss';
import fillerimage from '../Assets/Images/fillerimage.PNG'

function Comment({thumbs}) {
    console.log(thumbs);
    return(
        <ul className="comments">
        <li className="comments__item">
            <img className="comments__image" src={fillerimage}></img>
            <span className="comments__name">Micheal Lyons</span>
            <span className="comments__date">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.</span>
            <p className="comments__comment">12/18/2018</p>
        </li>

    </ul>

    );
}

export default Comment;