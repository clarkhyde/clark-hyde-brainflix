import logo from './logo.svg';
import './styles/App.scss';
import Nav from './components/Nav';
import ThumbnailDetails from './Assets/Data/videos.json';
import React, { Component } from 'react';
import Thumbnails from './components/Thumbnails';

class App extends Component {
  state = {
  thumbs: ThumbnailDetails
 };

  render() {
    return (
      <body>

      {/*  <Nav />  */}


          <Thumbnails 
          thumbs={this.state.thumbs}/> 



      </body>
    );
  }
}



export default App;
