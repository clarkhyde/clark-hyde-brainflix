import '../styles/Video.scss'

function Video({mainVideo}) {
 //   console.log(mainVideo.image);
    let displayedVideo = mainVideo.image;
    return(
        <video className="video-display__vid" controls poster={displayedVideo}>Your browser does not support the video tag.</video>
    );
}

export default Video;