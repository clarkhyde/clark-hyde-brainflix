import '../styles/ThumbnailContent.scss';
import { Link } from "react-router-dom";


function ThumbnailContent({id, title, channel, image, handleClick, key}) {

    return(

    
        <div className="thumbnails__card" id={id}>
        <Link to={"/video-details/"+ id} id={id}>   
            <img className="thumbnails__image" src={image} id={id}></img>
        </Link>
            <ul className="thumbnails__list">
                <li className="thumbnails__title">{title}</li>
                <li className="thumbnails__channel" >{channel}</li>
            </ul>
            
        </div> 
    );
}


export default ThumbnailContent;