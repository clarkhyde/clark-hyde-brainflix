import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';
import '../styles/SubVideo.scss';


function SubVideo({subVideoInfo}){
let formattedDate= new Date(subVideoInfo.timestamp).toLocaleDateString("en-US");
    return(
        <>
        <div className="video-info">
            <h1 className="video-display__title">{subVideoInfo.title}</h1>
            <ul className="video-display" >
                <li className="video-display__channel">{subVideoInfo.channel}</li>
                <li className="video-display__timestamp">{formattedDate}</li>
                <li className="video-display__views"><img className="video-display__icon" src={viewsIcon}/>{subVideoInfo.views}</li>
                <li className="video-display__likes"><img className="video-display__icon" src={likesIcon}/>{subVideoInfo.likes}</li>
            </ul>
            <p className="video-display__description">{subVideoInfo.description}</p>
        </div>
        </>
        ); 

}


export default SubVideo;