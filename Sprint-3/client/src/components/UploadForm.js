import React, { Component } from 'react';
import uploadImage from '../Assets/Images/Upload-video-preview.jpg';
import '../styles/UploadForm.scss';
import UploadPageButtons from './UploadPageButtons';
import Modal from './Modal';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

class UploadForm extends Component {

    state = {
        title: [],
        description: [],
        show: false,
    }

    updateTitle = (event) => {
        this.setState({
            title: event.target.value,
        })
    }

    updateDescription = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

     postVideo =(event) =>{
         event.preventDefault();
         console.log(event.target.inputTitle.value);
         console.log(event.target.inputDescription.value);
        axios.post('http://localhost:8080/upload',{
            id: uuidv4(),
            title: event.target.inputTitle.value,
            channel: "Best Channel",
            description: event.target.inputDescription.value,
            views: 9567457,
            likes: 900001,
            duration: "56:05",
            video: "https://project-2-api.herokuapp.com/stream",
            timestamp: 1545168149060,


        })


         this.setState({
            show: true,
        });
        console.log(event);
        document.getElementById("form-upload").style.display="none";
        document.getElementById("upload-page__buttons").style.display="none";
     }

    render() {
        return (
            <>
            <Modal show={this.state.show}/>
                <form
                    className="upload-form"
                    id="form-upload"
                    onSubmit={this.postVideo}
                >
                    <div>
                        <h3 className="upload-form__thumb-title">VIDEO THUMBNAIL</h3>
                        <img className="upload-form__thumb-image" src={uploadImage} alt="upload image" />
                    </div>
                    <div>
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
                    </div>
                </form>
                <UploadPageButtons/>
            </>
        );
    }
}

export default UploadForm;