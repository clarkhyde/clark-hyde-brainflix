import '../styles/VideoHolder.scss';
import Video from './Video';

function VideoHolder({vids}) {
    
    return(
        <div className="video-display__video">
            {vids.map((vid)=>{
                return(
                  <Video 
                  image={vid.image}
                  />  
                );

            })}
        </div>
    );
}

export default VideoHolder;