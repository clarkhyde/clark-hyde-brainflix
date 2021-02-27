import logo from './logo.svg';
import './styles/App.scss';
import Nav from './components/Nav';
import videoDetails from './Assets/Data/video-details.json';
import CommentSection from './components/CommentSection';
import CommentList from './components/CommentList';
import React, { Component } from 'react';
import Video from './components/Video';

class App extends Component {
  state = {
  vids: videoDetails
 };

  render() {
    return (
      <body className= "body">

    {/*    <Nav />*/}
          <Video 
          vids={this.state.vids}/>
     {/*}   <CommentList
          vids={this.state.vids}
    /> */}

      </body>
    );
  }
}



export default App;
