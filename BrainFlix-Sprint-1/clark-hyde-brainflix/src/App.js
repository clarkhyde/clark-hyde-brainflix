import logo from './logo.svg';
import './styles/App.scss';
import Nav from './components/Nav';
import videoDetails from './Assets/Data/video-details.json';
import React, { Component } from 'react';
import VideoInfo from './components/VideoInfo';

class App extends Component {
  state = {
  vids: videoDetails
 };

  render() {
    return (
      <main>

    {/*    <Nav />*/}
         <VideoInfo 
          vids={this.state.vids}/> 

     {/*   <CommentList
          vids={this.state.vids}
    /> */}

      </main>
    );
  }
}



export default App;
