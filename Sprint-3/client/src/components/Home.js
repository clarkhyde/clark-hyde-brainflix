import '../styles/Home.scss';
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

informationGetter = () =>{
  axios.get(`http://localhost:8080/videos`)
  .then((response)=>{

    this.setState({
      thumbs:response.data
    })

    const mainVideoId = response.data[0].id;
    
    axios.get(`http://localhost:8080/videos/${mainVideoId}`)
    .then((response)=>{
       this.setState({
         mainVideo: response.data[0],
         displayedComments: response.data[0].comments.sort((a,b)=>b.timestamp-a.timestamp)
       })
    })
  })
}

componentDidMount(){

  this.informationGetter();

}

componentDidUpdate(prevProps){
  const { videoId } = this.props.match.params;


if(!videoId){
  this.informationGetter();
} else  if(prevProps.match.params.videoId !== videoId){
      // console.log(prevProps.match.params.videoId);
      // console.log(videoId);
      axios.get(`http://localhost:8080/videos/${videoId}`)
      .then((response)=>{
        console.log(response.data[0]);
        this.setState({
          mainVideo: response.data[0],
          displayedComments: response.data[0].comments.sort((a,b)=>b.timestamp-a.timestamp)
        })
      })
    } 


  // prevProps.match.params &&  axios.get(`http://localhost:8080/videos/${videoId}`)
  // .then((response)=>{
  //   console.log(videoId);
  //   this.setState({
  //     mainVideo: response.data[0],
  //     displayedComments: response.data[0].comments.sort((a,b)=>b.timestamp-a.timestamp)
  //   })
  // });  
}


  render() {
    let remainingThumbnails = this.state.thumbs.filter((thumb) => {
      return thumb.id !== this.state.mainVideo.id;


    })

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
            <Form
            mainVideo={this.state.mainVideo}
            />
             <CommentList
                displayedComments={this.state.displayedComments} 
                /> 
            </div>
            <Thumbnails
              thumbs={remainingThumbnails}
              />
        </main>
      </>
    );
  }
}

export default Home;
