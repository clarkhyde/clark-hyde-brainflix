import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';


function VideoContent({title, image, channel, description, views, likes, duration, timestamp}){

    return(
        <>
        <li><video controls poster ={image}></video></li>
        <li>{title}</li>
        <li>By {channel}</li>
        <li>{timestamp}</li>
        <li><img src={viewsIcon}/>{views}</li>
        <li><img src={likesIcon}/>{likes}</li>
        <li>{description}</li>
        </>
    );


    {/*<video controls><img src={vids.image}></img></video>
    <h1>{vids.title}</h1>
    <h3></h3>
    <h3></h3>
    <p></p> */}   

}


export default VideoContent;