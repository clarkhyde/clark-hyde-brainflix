import logo from './logo.svg';
import './styles/App.scss';
import Nav from './components/Nav';
import videoDetails from './Assets/Data/video-details.json';
import React, { Component } from 'react';
import Video from './components/Video';

class App extends Component {
  state = {
  vids: videoDetails
 };

  render() {
    return (
      <main>

    {/*    <Nav />*/}

         <Video 
          vids={this.state.vids}/> 

     {/*   <CommentList
          vids={this.state.vids}
    /> */}

      </main>
    );
  }
}



export default App;
