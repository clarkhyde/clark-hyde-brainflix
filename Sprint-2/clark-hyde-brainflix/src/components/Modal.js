import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Modal.scss';


export default class Modal extends React.Component {
  render() {
      if(!this.props.show){
          return null;
      }
    return (
        <div className="modal">
          <h1 className="modal__title">Submission successful. Click the below link to return home.</h1>
          <Link className="modal__home" to="/">Return Home</Link> 
        </div>
      );
  }
}