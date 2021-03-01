import React, { Component } from 'react';
import videoInfo from '../Assets/Data/video-details.json';

class CommentList extends Component {

    state={
        details: videoInfo
    }
    render() {
        return (
            <div>
                <Commments 
                details={this.state.videoInfo}/>
            </div>
        );
    }
}

export default CommentList;