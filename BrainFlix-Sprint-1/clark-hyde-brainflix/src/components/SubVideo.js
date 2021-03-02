import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';
import '../styles/SubVideo.scss';


function SubVideo({title, image, id, channel, description, views, likes, timestamp}){

    return(
        <>
        <div className="video-info">
            <h1 className="video-display__title">BMX Rampage: 2018 Highlights</h1>
            <ul className="video-display" id={id}>
                <li className="video-display__channel">By Red Cow</li>
                <li className="video-display__timestamp">12/18/2018</li>
                <li className="video-display__views"><img className="video-display__icon" src={viewsIcon}/>1,001,023</li>
                <li className="video-display__likes"><img className="video-display__icon" src={likesIcon}/>110,985</li>
            </ul>
            <p className="video-display__description">{description}</p>
        </div>
        </>
        ); 

}


export default SubVideo;