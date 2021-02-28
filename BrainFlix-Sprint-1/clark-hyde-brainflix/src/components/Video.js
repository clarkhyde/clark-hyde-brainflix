import '../styles/Video.scss'

function Video({image}) {
    return(
        <video className="video-display__vid" controls poster ={image}>Your browser does not support the video tag.</video>
    );
}

export default Video;