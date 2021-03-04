import '../styles/Home.scss';
//import ThumbnailDetails from '../Assets/Data/video-details.json';
import React, { Component } from 'react';
import Thumbnails from './Thumbnails';
import Video from './Video';
import SubVideo from './SubVideo';
import Form from './Form';
import CommentList from './CommentList';
import axios from 'axios';
import { APIKey, APIUrl } from './Util';


class Home extends Component {
  state = {
    thumbs: [],
    mainVideo: [],
    displayedComments: []
  };

componentDidMount(){

  axios.get(`${APIUrl}videos/${APIKey}`)
  .then((response)=>{
    
    this.setState({
      thumbs:response.data
    })

    const mainVideoId = response.data[0].id;
    
    axios.get(`${APIUrl}videos/${mainVideoId}/${APIKey}`)
    .then((response)=>{

       this.setState({
         mainVideo: response.data,
       })
    })

    axios.get(`${APIUrl}videos/${mainVideoId}/${APIKey}`)
    .then((response)=>{
   //   console.log(response);
      this.setState({
        displayedComments: response.data.comments
      })
    })

  })
 



}

  updateThumbnails = (id) => {
  //  console.log("check it out", id);

    this.setState({
    //  mainVideo: ThumbnailDetails.find((vid) => vid.id === id)
    })

  }

  render() {
    let remainingThumbnails = this.state.thumbs.filter((thumb) => {
      return thumb.id !== this.state.mainVideo.id;

    })
console.log(this.state.displayedComments);

    return (
      <>
          <Video
            mainVideo={this.state.mainVideo}
            />
          <main className="mainbody">
            <div className="body-left">
            <SubVideo
                mainVideo={this.state.mainVideo} 
                />
            <Form />
             <CommentList
                displayedComments={this.state.displayedComments} 
                /> 
            </div>
            <Thumbnails
              thumbs={remainingThumbnails}
              handleClick={this.updateThumbnails}
              />
        </main>
      </>
    );
  }
}

export default Home;
