import React, { Component } from 'react';
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

                <UploadForm />      
            </div>
        );
    }
}

export default UploadPage;