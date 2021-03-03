import '../styles/Thumbnails.scss';
import ThumbnailContent from './ThumbnailContent';



function Thumbnails({thumbs, handleClick}){
  //  thumbs.splice(0,1);
    console.log("check it out yo", thumbs);
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
                        handleClick={handleClick}
                    />
                )
            })}
        </div>
    );
}

export default Thumbnails;