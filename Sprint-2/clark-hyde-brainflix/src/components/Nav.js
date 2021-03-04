import react from 'react';
import '../styles/Nav.scss';
import logo from '../Assets/Logo/Logo-brainflix.svg';
import plus from '../Assets/Icons/Icon-upload.svg';
import profileImage from '../Assets/Images/Mohan-muruge.jpg';
import { NavLink } from "react-router-dom";

function Nav()  {  
        return (
            <nav className ="nav">
                <NavLink exact to="/"><img src={logo} className = "nav__image" alt="Brainflix"/></ NavLink>
                <ul className = "nav-right">
                    <li className = "nav-right__search">
                        <input type="text" className ="nav-right__input" placeholder= "           Search"></input>
                    </li>
                    <li className = "nav-right__upload">
                        <NavLink to="/upload"><a href = "#"><img src={plus}></img>   UPLOAD</a></NavLink>
                    </li>
                    <li className = "nav-right__profile">
                        <img src={profileImage} className = "nav-right__image"></img>
                    </li>
                </ul>
            </nav>
        );
}

export default Nav;