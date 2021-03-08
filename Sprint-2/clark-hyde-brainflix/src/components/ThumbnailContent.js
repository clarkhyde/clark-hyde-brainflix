import '../styles/ThumbnailContent.scss';
import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';



function ThumbnailContent({id, title, channel, image}) {

    return(
        <Link to={"/video-details/"+ id} id={id}>
            <div className="thumbnails__card" id={id}>
            <img className="thumbnails__image" src={image} id={id} alt="thumbnail image"/>
            <ul className="thumbnails__list">
                <li key ={uuidv4()}className="thumbnails__title">{title}</li>
                <li className="thumbnails__channel" >{channel}</li>
            </ul>
        </div> 
        </Link>
    );
}


export default ThumbnailContent;