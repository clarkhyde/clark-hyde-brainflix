import '../styles/Thumbnails.scss';
import ThumbnailContent from './ThumbnailContent';



function Thumbnails({thumbs}){
    return(
        <div className="thumbnails">
            <h2 className="thumbnails__header">NEXT VIDEO</h2>
            {thumbs.map((thumb)=>{
                return(
                    <ThumbnailContent 
                        id={thumb.id}
                        title={thumb.title}
                        channel={thumb.channel}
                        image={thumb.image}
                    />
                )
            })}
        </div>
    );
}

export default Thumbnails;