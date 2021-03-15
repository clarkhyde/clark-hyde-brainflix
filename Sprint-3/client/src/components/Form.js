import '../styles/Form.scss';
import mohan from '../Assets/Images/Mohan-muruge.jpg'

function Form(){
        return(
            <>
                <h2 
                    className="comment-form__counter"> 3 Comments</h2>
                <h3 
                    className="comment-form__heading">JOIN THE CONVERSATION</h3>
            <form  
                className ="comment-form">
                <div><img src ={mohan} 
                    className="comment-form__image" alt="Profile"/></div>
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