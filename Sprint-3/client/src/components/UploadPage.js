import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import UploadForm from './UploadForm';
import '../styles/UploadPage.scss';

class UploadPage extends Component {


    render() {
        return (
            <>
            <div className="upload-page"> 
                <h1 className="upload-page__heading">Upload Video</h1>

                <UploadForm />      
            </div>

            </>
        );
    }
}

export default UploadPage;