import React, { Component } from 'react';

import Modal from './Modal';
import uploadImage from '../Assets/Images/Upload-video-preview.jpg';
import '../styles/UploadForm.scss';
import UploadPageButtons from './UploadPageButtons';


class UploadForm extends Component {

    state = {
        title: [],
        description: [],
        show: false,
    }

    
    updateTitle = (event)=>{
        this.setState({
            title: event.target.value,
        })
    }
    
    updateDescription = (event) =>{
        this.setState({
            description: event.target.value,
        })
    }
    
    
    handleClick = (event) =>{
        event.preventDefault();
        this.setState({
            show:true,
        });
        // need two if not this.states for if the fields are not filled out, then else do something!
        // if(this.state.title){
        //     alert("Upload requires title. Please enter title and try again.");
        //     return;
        // }
    
        // if(this.state.description){
        //     alert("Upload requires description. Please enter description and try again.")
        //     return;
        // }
       // else{
            console.log("You have been console logged because the button worked!");
       // }
    
    }
    render() {
        return (
            <>
            <form 
                className="upload-form"
                id="form-upload"
            >
                <h3 className="upload-form__thumb-title">VIDEO THUMBNAIL</h3>
                <img className="upload-form__thumb-image" src={uploadImage} alt="upload image"/>
                <label 
                    className="upload-form__title-label" 
                    for="inputTitle"
                    > 
                    TITLE YOUR VIDEO
                </label>
                <input 
                    className="upload-form__title-input" 
                    type="text" 
                    name="inputTitle"
                    placeholder="Add a title to your video"
                    onChange={this.updateTitle}
                    value={this.state.title}
                />
                <label 
                    className="upload-form__description-label" 
                    for="inputDescription"
                    >
                    ADD A VIDEO DESCRIPTION
                </label>
                <textarea 
                    className="upload-form__description-input" 
                    type="text" 
                    name="inputDescription"
                    placeholder="Add a description of your video"
                    onChange={this.updateDescription}
                    value={this.state.description}
                />
                <Modal 
                    show={this.state.show} 
                />
            </form>
            <UploadPageButtons 
            handleClick={this.handleClick}/>
            </>
        );
    }
}

export default UploadForm;