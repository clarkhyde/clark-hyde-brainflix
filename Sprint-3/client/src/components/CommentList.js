import Comment from './Comment';
import {v4 as uuidv4} from 'uuid';


function CommentList({mainVideo, deleteComment}) {
    console.log(mainVideo.comments);
    return (
        mainVideo.comments ? (
        <div>
                {mainVideo.comments.sort((a,b)=>b.timestamp-a.timestamp).map((displayedComment)=>{
                return(
                    <Comment
                    key={uuidv4()}
                    name={displayedComment.name}
                    comment={displayedComment.comment}
                    timestamp={displayedComment.timestamp}
                    commentId={displayedComment.id}
                    videoId={mainVideo.id}
                    deleteComment={deleteComment}
                    />
                );
            })}    
        </div>) : <div>Loading</div>
    );
};

export default CommentList;