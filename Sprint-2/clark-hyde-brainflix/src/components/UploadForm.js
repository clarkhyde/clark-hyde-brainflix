import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Modal from './Modal';
import uploadImage from '../Assets/Images/Upload-video-preview.jpg';

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
                <h3 className="">VIDEO THUMBNAIL</h3>
                <img className="" src={uploadImage} alt="upload image"/>
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
                    onChange={this.updateTitle}
                    value={this.state.title}
                />
                <label 
                    className="upload-form__description-label" 
                    for="inputDescription"
                    >
                    ADD A VIDEO DESCRIPTION
                </label>
                <input 
                    className="upload-form__description-input" 
                    type="text" 
                    name="inputDescription"
                    onChange={this.updateDescription}
                    value={this.state.description}
                />
                <Modal 
                    show={this.state.show} 
                />
            </form>
            <button 
                className="upload-form__publish"
                onClick={this.handleClick}
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
}

export default UploadForm;