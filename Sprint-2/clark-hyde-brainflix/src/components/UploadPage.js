import React, { Component } from 'react';
import uploadImage from '../Assets/Images/Upload-video-preview.jpg';
import {Link} from 'react-router-dom';
import UploadForm from './UploadForm';

class UploadPage extends Component {
// state = {
//     title: [],
//     description: []
// }

// updateTitle = (event)=>{
//     this.setState({
//         title: event.target.value,
//     });
// };

// updateDescription = (event) =>{
//     this.setState({
//         description: event.target.value,
//     })
// }


// handleClick = () =>{
//     // need two if not this.states for if the fields are not filled out, then else do something!
//     if(!this.state.title){
//         alert("Upload requires title. Please enter title and try again.")
//         return;
//     }

//     if(!this.state.description){
//         alert("Upload requires description. Please enter description and try again.")
//     }
//     else{
//         console.log("You have been console logged because the button worked!")
//     }

// }

    render() {
        return (
            <div>   
                <h1 className="">Upload Video</h1>
                <h3 className="">VIDEO THUMBNAIL</h3>
                <img className="" src={uploadImage} alt="upload image"/>
                <UploadForm />
                {/* <form>
                    <label className="" for="inputTitle"> TITLE YOUR VIDEO</label>
                    <input className="" type="text" name="inputTitle"></input>
                    <label className="" for="inputDescription">ADD A VIDEO DESCRIPTION</label>
                    <input className="" type="text" name="inputDescription"></input>
                    <button className=""onClick={this.handleClick} >PUBLISH</button>
                    <Link to ="/">CANCEL</Link>
                </form> */}
                
            </div>
        );
    }
}

export default UploadPage;