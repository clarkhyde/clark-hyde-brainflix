import Comment from './Comment';


function CommentList({displayedComments}) {
 //   console.log(displayedComments);

    return (
        <div>
                {displayedComments.map((displayedComment)=>{
                return(
                    <Comment
                    name={displayedComment.name}
                    comment={displayedComment.comment}
                    timestamp={displayedComment.timestamp}
                    />
                );
            })}    
        </div>
    );
};

export default CommentList;