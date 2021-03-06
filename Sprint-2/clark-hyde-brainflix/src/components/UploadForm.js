import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Modal from './Modal';


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
            <form>
                <label className="" for="inputTitle"> TITLE YOUR VIDEO</label>
                <input 
                className="" 
                type="text" 
                name="inputTitle"
                onChange={this.updateTitle}
                value={this.state.title}
                />
                <label className="" for="inputDescription">ADD A VIDEO DESCRIPTION</label>
                <input 
                className="" 
                type="text" 
                name="inputDescription"
                onChange={this.updateDescription}
                value={this.state.description}
                />
                <Modal show={this.state.show} />
                <button className=""onClick={this.handleClick}>PUBLISH</button>
                <Link to ="/">CANCEL</Link>
            </form>
        );
    }
}

export default UploadForm;