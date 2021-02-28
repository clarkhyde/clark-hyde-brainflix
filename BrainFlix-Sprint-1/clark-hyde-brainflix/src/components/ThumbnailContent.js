import '../styles/ThumbnailContent.scss';

function ThumbnailContent({id, title, channel, image}) {
    return(

        <div className="thumbnails__card" id={id}>
            <img className="thumbnails__image" src={image}></img>
            <ul className="thumbnails__list">
                <li className="thumbnails__title">{title}</li>
                <li className="thumbnails__channel">{channel}</li>
            </ul>
        </div>
    );
}


export default ThumbnailContent;