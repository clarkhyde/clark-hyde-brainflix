import '../styles/Thumbnails.scss';
import ThumbnailContent from './ThumbnailContent';
import viewsIcon from '../Assets/Icons/Icon-views.svg';
import likesIcon from '../Assets/Icons/Icon-likes.svg';
import Form from './Form';
import Comment from './Comment';
import SubVideo from './SubVideo';

function Thumbnails({thumbs}){
    
    return(
        <div className="thumbnails">
            <h2 className="thumbnails__header">NEXT VIDEO</h2>
            {thumbs.map((thumb)=>{
                return(
                    <ThumbnailContent 
                        key={thumb.id}
                        id={thumb.id}
                        title={thumb.title}
                        channel={thumb.channel}
                        image={thumb.image}
                    />
                );
            })}
        </div>
    );
}

export default Thumbnails;