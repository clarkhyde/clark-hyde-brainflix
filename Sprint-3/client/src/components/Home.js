import '../styles/Home.scss';
import React, { Component } from 'react';
import Thumbnails from './Thumbnails';
import Video from './Video';
import SubVideo from './SubVideo';
import Form from './Form';
import CommentList from './CommentList';
import axios from 'axios';
import { APIUrl } from './Util';


class Home extends Component {
  state = {
    thumbs: [],
    mainVideo: [],
  };

componentDidMount(){
  //const { videoId } = this.props.match.params;
   this.informationGetter();
}

componentDidUpdate(prevProps){
  const { videoId } = this.props.match.params;

  if(prevProps.match.params.videoId !== videoId){
    if(!videoId){
      this.informationGetter();
    }  else{ 
        axios.get(`${APIUrl}/videos/${videoId}`)
        .then((response)=>{
          this.setState({
            mainVideo: response.data[0],
          })
        })
      } 
    }
}

likeIncrementer = (mainVideoId) =>{
  console.log(mainVideoId);
  axios.post(`${APIUrl}/videos/${mainVideoId}/likes`,{
    id:mainVideoId,
  })
  .then(response=>{
    this.setState({
      mainVideo: response.data[0]
    })
    console.log(response);
  })
}

// commentSubmit = (event)=>{
//   event.preventDefault();
//   const form = event.target;
//   const commentData = form.comment.value;
//   const commentID = mainVideo.mainVideo.id;
//   // axios.post(`${APIUrl}/videos/${commentID}/comments`,{
//   //     name: "test user",
//   //     comment:commentData
//   // })
//   //  .then((response)=>{
//   //    console.log(response);
//   //  })
// }

 deleteComment = (commentId,videoId) => {
   axios.delete(`${APIUrl}/videos/${videoId}/comments/${commentId}`)
   .then(response =>{
     console.log(response);

       this.setState({
         mainVideo:response.data
       })
   })
 }


informationGetter = () =>{
  axios.get(`${APIUrl}/videos`)
  .then((response)=>{
    this.setState({
      thumbs:response.data
    })
    const mainVideoId = response.data[0].id;
    axios.get(`${APIUrl}/videos/${mainVideoId}`)
    .then((response)=>{
       this.setState({
         mainVideo: response.data[0],
       })
    })
  })
}


  render() {
    if (this.state.mainVideo === null) {
       return <main>Loading...</main>;
    }
    const mainVideo = this.state.mainVideo;

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
                likeIncrementer ={this.likeIncrementer}
                />
            <Form
            mainVideo={this.state.mainVideo}
            commentSubmit={this.commentSubmit}
            />
             <CommentList
                mainVideo={this.state.mainVideo} 
                deleteComment={this.deleteComment}
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
