import {Link} from 'react-router-dom';
import '../styles/UploadPageButtons.scss';

function UploadPageButtons(props){

    return(
        <>
        <button 
        className="upload-form__publish"
        onClick={props.handleClick}
        form="form-upload"
        >
        PUBLISH
    </button>
    <Link 
        className="upload-form__cancel" 
        to ="/"
        >
        CANCEL
    </Link>
    </>
    );
}


export default UploadPageButtons;