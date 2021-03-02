import logo from './logo.svg';
import './styles/App.scss';
import Nav from './components/Nav';
import ThumbnailDetails from './Assets/Data/video-details.json';
import React, { Component } from 'react';
import Thumbnails from './components/Thumbnails';
import Video from './components/Video';
import SubVideo from './components/SubVideo';
import Form from './components/Form';
import Comment from './components/Comment';
import CommentList from './components/CommentList';

class App extends Component {

  state = {
  thumbs: ThumbnailDetails,
  mainVideo: ThumbnailDetails[0],
  displayedComments: ThumbnailDetails[0].comments,
  subVideoInfo: ThumbnailDetails[0]
 };


  render() {
    return (
      <body>

          <Nav/>
          <Video 
          mainVideo={this.state.mainVideo}/>

          <main className="mainbody">
            
            <div className="body-left">
          <SubVideo
          subVideoInfo={this.state.subVideoInfo} />
          <Form/>
          <CommentList
          displayedComments={this.state.displayedComments}/>
          </div>
            <Thumbnails 
            thumbs={this.state.thumbs}
            />
          </main>
         

      </body>
    );
  }
}



export default App;
