import React, { Component } from 'react';
import uploadImage from '../Assets/Images/Upload-video-preview.jpg';

class UploadPage extends Component {
    render() {
        return (
            <div>   
                <h1 className="">Upload Video</h1>
                <h3 className="">VIDEO THUMBNAIL</h3>
                <img className="" src={uploadImage} alt="upload image"/>
                <form>
                    <label className="" for="inputTitle"> TITLE YOUR VIDEO</label>
                    <input className="" type="text" name="inputTitle"></input>
                    <label className="" for="inputDescription">ADD A VIDEO Description</label>
                    <input className="" type="text" name="inputDescription"></input>
                    <button className="" >PUBLISH</button>
                    <button className="">CANCEL</button>
                </form>
                
            </div>
        );
    }
}

export default UploadPage;