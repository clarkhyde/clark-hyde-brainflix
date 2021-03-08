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
      this.setState({
        displayedComments: response.data.comments.sort((a,b)=>b.timestamp-a.timestamp)
      })
    })
  })
}

componentDidUpdate(prevProps){
  const { videoId } = this.props.match.params;
 
  if(prevProps.match.params.videoId !== videoId){
    axios.get(`${APIUrl}videos/${videoId}/${APIKey}`)
    .then((response)=>{
    console.log(response.data);
      this.setState({
        mainVideo: response.data,
      })
    })

      axios.get(`${APIUrl}videos/${videoId}/${APIKey}`)
      .then((response)=>{

        this.setState({
          displayedComments: response.data.comments.sort((a,b)=>b.timestamp-a.timestamp),
        })
      })
    }
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
