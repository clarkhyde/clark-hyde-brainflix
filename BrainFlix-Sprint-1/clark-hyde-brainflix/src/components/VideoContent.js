import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';
import '../styles/VideoContent.scss';


function VideoContent({title, image, id, channel, description, views, likes, timestamp}){

    return(
        <ul id={id}>
            <li className="video-display__video"><video controls poster ={image}>Your browser does not support the video tag.</video></li> 
            <li className="video-display__title">{title}</li>
            <li className="video-display__channel">By {channel}</li>
            <li className="video-display__timestamp">{timestamp}</li>
            <li className="video-display__views"><img src={viewsIcon}/>{views}</li>
            <li className="video-display__likes"><img src={likesIcon}/>{likes}</li>
            <li className="video-display__description">{description}</li>
        </ul>
    ); 

}


export default VideoContent;