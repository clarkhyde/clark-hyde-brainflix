import '../styles/Form.scss';
import mohan from '../Assets/Images/Mohan-muruge.jpg'


function Form(){
    return(
        <>
        
    <form className ="comment-form">
        <h2 className="comment-form__counter">3 Comments</h2>
        <img src ={mohan} className="comment-form__image"></img>
        <h3 className="comment-form__heading">JOIN THE CONVERSATION</h3>
        <textarea type ="text" className="comment-form__text-input" name="commentInput" placeholder="That was eaily the most spectacular BMX moment ever."></textarea>
        <button className ="comment-form__button">COMMENT</button>
    </form>
    </>
    );
}


export default Form;