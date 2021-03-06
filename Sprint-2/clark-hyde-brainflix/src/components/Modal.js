import React from "react";
import {Link} from 'react-router-dom';
export default class Modal extends React.Component {
  render() {
      if(!this.props.show){
          return null;
      }
    return (
        <div>
    <h1>Submission successful. Click the below link to return home.</h1>
    <Link to="/">Return Home</Link>   
        </div>
        );
  }
}