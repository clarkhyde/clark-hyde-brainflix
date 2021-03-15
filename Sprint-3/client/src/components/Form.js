import '../styles/Form.scss';
import mohan from '../Assets/Images/Mohan-muruge.jpg'
import axios from 'axios';
import {  APIUrl } from './Util';

function Form(mainVideo,commentSubmit){
//if(!mainVideo.mainVideo.comments)

        return(
            <>
                <h2 
                    className="comment-form__counter"> 3 Comments</h2>
                <h3 
                    className="comment-form__heading">JOIN THE CONVERSATION</h3>
            <form  
                onSubmit={()=>{commentSubmit()}}
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