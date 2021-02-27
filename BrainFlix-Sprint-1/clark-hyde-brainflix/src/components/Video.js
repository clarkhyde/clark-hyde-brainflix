import '../styles/Video.scss';
import VideoContent from './VideoContent';

function Video({vids}) {

    return ( 
        
        <div className="video-section">
            {vids.map((vid) => {
                return (
                    <VideoContent
                    key={vid.id}
                    id={vid.id}
                    title={vid.title}
                    channel={vid.channel}
                    image={vid.image}
                    description={vid.description}
                    views={vid.views}
                    likes={vid.likes}
                    duration={vid.duration}
                    timestamp={vid.timestamp}
                    />
                );
            })}
        </div>
        );
}


export default Video;