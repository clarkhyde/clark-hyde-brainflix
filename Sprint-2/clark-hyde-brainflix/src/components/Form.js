import '../styles/Form.scss';
import mohan from '../Assets/Images/Mohan-muruge.jpg'
import axios from 'axios';
import { APIKey, APIUrl } from './Util';

function Form(mainVideo){
    console.log(mainVideo.mainVideo.comments.length);
    const commentSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const commentData = form.comment.value;
        const commentID = mainVideo.mainVideo.id;
        axios.post(`${APIUrl}videos/${commentID}/comments/${APIKey}`,{
            name: "test user",
            comment:commentData
        })
         .then((response)=>{
           console.log(response);
         })
      }

        return(
            <>
                <h2 
                    className="comment-form__counter">{mainVideo.mainVideo.comments.length} Comments</h2>
                <h3 
                    className="comment-form__heading">JOIN THE CONVERSATION</h3>
            <form  
                onSubmit={commentSubmit}
                className ="comment-form">
                <img src ={mohan} 
                    className="comment-form__image" alt="Profile Image"/>
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