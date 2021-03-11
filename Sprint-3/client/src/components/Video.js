import '../styles/Video.scss'

function Video({mainVideo}) {
    let displayedVideo = mainVideo.image;
    return(
        <video className="video-display__vid" controls poster={displayedVideo}>Your browser does not support the video tag.</video>
    );
}

export default Video;