import '../styles/Form.scss';
import mohan from '../Assets/Images/Mohan-muruge.jpg'


function Form(){
    return(
        <>
        <h2 className="comment-form__counter">3 Comments</h2>
        <h3 className="comment-form__heading">JOIN THE CONVERSATION</h3>
    <form className ="comment-form">
        <img src ={mohan} className="comment-form__image"></img>
        <textarea type ="text" className="comment-form__text-input" name="commentInput" placeholder="That was eaily the most spectacular BMX moment ever."></textarea>
        <button className ="comment-form__button">COMMENT</button>
    </form>
    </>
    );
}


export default Form;