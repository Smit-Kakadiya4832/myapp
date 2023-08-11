import React from 'react';
import HRLogo from './images/HRLogo.png'; // Adjust the path to your image
import './style.css'; // Import your CSS file

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="row">
                    {/* <div className="logo">

                    </div> */}
                    <div className="menu">
                        <ul className="row">
                            <li><img src={HRLogo} alt="Logo" className="logo" /></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Skills</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Review</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
