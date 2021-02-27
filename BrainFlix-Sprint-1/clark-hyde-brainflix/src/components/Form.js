import '../styles/Form.scss';


function Form(){
    return(
        <form className ="comment-form">
        <img src ="#" className="comment-form__image"></img>
        <h3 className="comment-form__heading">JOIN THE CONVERSATION</h3>
        <input type ="text" className="comment-form__text-input" name="commentInput" placeholder="That was eaily the most spectacular BMX moment ever."></input>
        <button className ="comment-form__button">COMMENT</button>
    </form>
    );
}


export default Form;