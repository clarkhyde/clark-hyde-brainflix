import Comment from './Comment';
import {v4 as uuidv4} from 'uuid';


function CommentList({displayedComments, mainVideo, deleteComment}) {
    console.log(mainVideo.id);
    console.log(displayedComments);
    console.log(deleteComment);


    return (
        <div>
                {displayedComments.map((displayedComment)=>{
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
        </div>
    );
};

export default CommentList;