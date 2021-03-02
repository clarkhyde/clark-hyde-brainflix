import '../styles/Thumbnails.scss';
import ThumbnailContent from './ThumbnailContent';



function Thumbnails({thumbs}){
    thumbs.splice(0,1);
    console.log(thumbs);
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