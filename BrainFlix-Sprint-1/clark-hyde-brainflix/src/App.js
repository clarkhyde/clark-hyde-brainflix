import logo from './logo.svg';
import './styles/App.scss';
import Nav from './components/Nav';
import videoDetails from './Assets/Data/video-details.json';
import ThumbnailDetails from './Assets/Data/videos.json';
import React, { Component } from 'react';
import VideoInfo from './components/VideoInfo';
import VideoHolder from './components/VideoHolder';
import CommentList from './components/CommentList';
import Thumbnails from './components/Thumbnails';

class App extends Component {
  state = {
  thumbs: ThumbnailDetails
 };

  render() {
    return (
      <main>

      {/*  <Nav /> */}

     {/*     <VideoHolder /> */}
     {/*    <VideoInfo 
          vids={this.state.vids}/> */} 
          <Thumbnails 
          thumbs={this.state.thumbs}/>
    {/*  <CommentList
        vids={this.state.vids} /> */}


      </main>
    );
  }
}



export default App;
