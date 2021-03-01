import '../styles/MainBody.scss';
import ThumbnailContent from './ThumbnailContent';
import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';
import Form from './Form';
import Comment from './Comment';
import Video from './Video';

function Thumbnails({thumbs, handleClick}){
    
    return(
        <>
        <Video
        thumbs={thumbs}/>
        <main className="mainbody">
        <div className="video-info">
        <h1 className="video-display__title">BMX Rampage:2018 Highlights</h1>
        <ul className="video-display">
            <li className="video-display__channel">By Red Cow</li>
            <li className="video-display__timestamp">12/18/218</li>
            <li className="video-display__views"><img className="video-display__icon" src={viewsIcon}/>1,001,023</li>
            <li className="video-display__likes"><img className="video-display__icon" src={likesIcon}/>110,985</li>
        </ul>
        <p className="video-display__description">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
        
        <Form/>
        {thumbs.map((thumb)=>{
                return(
                    <Comment
                        thumbs={thumbs}
                    />
                );
            })}

    </div>
        <div className="thumbnails">
            <h2 className="thumbnails__header">NEXT VIDEO</h2>
            {thumbs.map((thumb)=>{
                return(
                    <ThumbnailContent 
                        key={thumb.id}
                        id={thumb.id}
                        title={thumb.title}
                        channel={thumb.channel}
                        image={thumb.image}
                        handleClick={handleClick}
                    />
                );
            })}
        </div>
        
        </main>
        </>
    );
}

export default Thumbnails;