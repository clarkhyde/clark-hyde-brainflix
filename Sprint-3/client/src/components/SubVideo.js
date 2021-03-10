import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';
import '../styles/SubVideo.scss';


function SubVideo({mainVideo}){
let formattedDate= new Date(mainVideo.timestamp).toLocaleDateString("en-US");
    return(
        <>
        <div className="video-info">
            <h1 className="video-display__title">{mainVideo.title}</h1>
            <ul className="video-display" >
                <li className="video-display__channel">{mainVideo.channel}</li>
                <li className="video-display__timestamp">{formattedDate}</li>
                <li className="video-display__views"><img className="video-display__icon" src={viewsIcon}/>{mainVideo.views}</li>
                <li className="video-display__likes"><img className="video-display__icon" src={likesIcon}/>{mainVideo.likes}</li>
            </ul>
            <p className="video-display__description">{mainVideo.description}</p>
        </div>
        </>
        ); 

}


export default SubVideo;