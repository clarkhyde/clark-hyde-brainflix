import {Link} from 'react-router-dom';
import '../styles/UploadPageButtons.scss';

function UploadPageButtons(){

    return(
        <div className="upload-form__buttons" id="upload-page__buttons">
            <button 
            className="upload-form__publish"
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
    </div>
    );
}


export default UploadPageButtons;