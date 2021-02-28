import '../styles/Comment.scss';
import fillerimage from '../Assets/Images/fillerimage.PNG'

function Comment() {
    return(
        <ul className="comments">
            <li className="comments__item">
                <img className="comments__image" src={fillerimage}></img>
                <span className="comments__name">Michael Lyons</span>
                <span className="comments__date">12/18/2018</span>
                <p className="comments__comment">They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is simple the greatest opening of a concert I have EVER witnessed.</p>
            </li>
            <li className="comments__item">
                <img className="comments__image" src={fillerimage}></img>
                <span className="comments__name">Gary Wong</span>
                <span className="comments__date">12/12/2018</span>
                <p className="comments__comment">Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can enjoy myself!</p>
            </li>
            <li className="comments__item">
            <img className="comments__image" src={fillerimage}></img>
                <span className="comments__name"> Theodore Duncan</span>
                <span className="comments__date">11/15/2018</span>
                <p className="comments__comment">How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see himI feel instantly happy! He's definitely my favorite ever!</p>

            </li>
        </ul>
    );
}

export default Comment;