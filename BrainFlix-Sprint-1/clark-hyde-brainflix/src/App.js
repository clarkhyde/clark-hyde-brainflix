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

class App extends Component {

  state = {
  thumbs: ThumbnailDetails,
  MainVideo: null
 };


  render() {
    return (
      <body>

          <Nav/>
          <Video 
          thumbs={this.state.thumbs}/>
          <main className="mainbody">
            <div>
          <SubVideo />
          <Form/>
          <Comment/>

          </div>
            <Thumbnails 
            thumbs={this.state.thumbs}
            />
          </main>


         {/* <MainBody
          thumbs={this.state.thumbs}/> */}
          



      </body>
    );
  }
}



export default App;
