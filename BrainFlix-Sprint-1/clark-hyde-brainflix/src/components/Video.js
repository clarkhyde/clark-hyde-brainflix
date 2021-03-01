import '../styles/Video.scss'

function Video({thumbs}) {
    let image = thumbs[0].image;
    return(
        <video className="video-display__vid" controls poster ={image}>Your browser does not support the video tag.</video>
    );
}

export default Video;