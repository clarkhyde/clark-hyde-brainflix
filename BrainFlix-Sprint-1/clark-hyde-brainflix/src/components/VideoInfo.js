import '../styles/VideoInfo.scss';
import VideoContent from './VideoContent';
function VideoInfo({vids}) {

    return ( 
        <main>
            <div className="video-section">
                {vids.map((vid) => {
                    return (
                        <VideoContent
                        key={vid.id}
                        id={vid.id}
                        title={vid.title}
                        image={vid.image}
                        channel={vid.channel}
                        description={vid.description}
                        views={vid.views}
                        likes={vid.likes}
                        duration={vid.duration}
                        timestamp={vid.timestamp}
                        />

                );
            })}
        </div>
        </main>
        );
}


export default VideoInfo;