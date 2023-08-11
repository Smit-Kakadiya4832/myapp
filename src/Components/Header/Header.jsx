import React from 'react';
import HRLogo from './images/HRLogo.png';  // Adjust the path to your image
import TeamLeader from './images/TeamLeader.jpg';
import './style.css'; // Import your CSS file

const Header = () => {
    console.log("Hello Header");
    return (
        <>
            <section className="About">
                <header>
                    <div className="container">
                        <div className="rowr">
                            {/* <div className="logo">

                    </div> */}
                            <div className="menu">
                                <ul className="rowr">
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
                <div className="rowr">
                    <img src={TeamLeader} alt="TL" className="Tl" />
                    {/* <h1>Welcome To HR Solution</h1> */}
                </div>
            </section>
        </>
    );
};

export default Header;
