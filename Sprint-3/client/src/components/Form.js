import '../styles/Form.scss';
import mohan from '../Assets/Images/Mohan-muruge.jpg'
import axios from 'axios';
import {  APIUrl } from './Util';

function Form(mainVideo){
    const commentSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const commentData = form.comment.value;
        const commentID = mainVideo.mainVideo.id;
        // axios.post(`${APIUrl}/videos/${commentID}/comments`,{
        //     name: "test user",
        //     comment:commentData
        // })
        //  .then((response)=>{
        //    console.log(response);
        //  })
      }

        return(
            <>
                <h2 /* mainVideo.mainVideo.comments.length --seemingly for no reason this will work and render the number of comments, but other times it will display a message about can't do something with length of undefined.*/
                    className="comment-form__counter">3 Comments</h2>
                <h3 
                    className="comment-form__heading">JOIN THE CONVERSATION</h3>
            <form  
                onSubmit={commentSubmit}
                className ="comment-form">
                <img src ={mohan} 
                    className="comment-form__image" alt="Profile"/>
                <input 
                    type ="text" 
                    className="comment-form__text-input" 
                    name="comment" 
                    placeholder="Write comment here"/>
                <button 
                    className ="comment-form__button">COMMENT</button>
            </form>
            </>
        );
}


export default Form;