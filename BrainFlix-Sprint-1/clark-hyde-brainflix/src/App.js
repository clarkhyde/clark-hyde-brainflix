import logo from './logo.svg';
import './styles/App.scss';
import Nav from './components/Nav';
import ThumbnailDetails from './Assets/Data/video-details.json';
import React, { Component } from 'react';
import MainBody from './components/MainBody';
import Video from './components/Video';

class App extends Component {

  state = {
  thumbs: ThumbnailDetails
 };

 /*
 switchMainImage = (e,id) =>{
   e.preventDefault();
  const vidId = e.target.id.value;
  console.log(vidId);

  const newStateArray = this.state.thumbs.map((thumb)=>{
    if (thumb.id ===id) {
  //    thumb.image = image;
      return thumb;
    } 
  });

  this.setState({
    thumbs:newStateArray
  }); 


 } */

  render() {
    return (
      <body>

          <Nav/>
          <MainBody
          thumbs={this.state.thumbs}
          handleClick={this.switchMainImage}/> 



      </body>
    );
  }
}



export default App;
