import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';
import '../styles/VideoContent.scss';


function VideoContent({title, image, id, channel, description, views, likes, timestamp}){
    let formattedTime= new Date(timestamp).toLocaleDateString("en-US");


    return(
        <>
        <div className="video-display__video"><video className="video-display__vid" controls poster ={image}>Your browser does not support the video tag.</video></div> 
        <h1 className="video-display__title">{title}</h1>
        <ul className="video-display" id={id}>
            <li className="video-display__channel">By {channel}</li>
            <li className="video-display__timestamp">{formattedTime}</li>
            <li className="video-display__views"><img className="video-display__icon" src={viewsIcon}/>{views}</li>
            <li className="video-display__likes"><img className="video-display__icon" src={likesIcon}/>{likes}</li>
        </ul>
        <p className="video-display__description">{description}</p>
        </>
        ); 

}


export default VideoContent;