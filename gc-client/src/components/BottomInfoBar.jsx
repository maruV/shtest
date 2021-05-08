import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

import Twitter from "../assets/twitterlogo.png";
import Insta from "../assets/instalogo.png";
import Fb from "../assets/facebooklogo.png";

class BottomInfoBar extends Component{
    render(){
        return (
            <div className="bottomBarContainer">
                <div className="infoBarContainer">
                    <div className="linksContainer">
                        <div className="links">
                            <div className="header"><p> QUICK LINKS</p></div>
                            <div className="content">
                                <p> Buy Gift Cards </p>
                                <p> How to Buy </p>
                                <p> Sell Gift Cards </p>
                                <p> About Us </p>
                                <p> FAQ </p>
                                <p> Contact </p>
                            </div>
                        </div>

                        <div className="links">
                            <div className="header"><p> SERVICES </p></div>
                            <div className="content">
                                <p> Register to buy </p>
                                <p> Register to Sell </p>
                                <p> Login </p>
                            </div>
                        </div>

                        <div className="links">
                            <div className="header"><p> USEFUL LINKS </p></div>
                            <div className="content">
                                <p> Terms & Conditions</p>
                                <p> Privacy Policy </p>
                                <p> Cookies Policy </p>   
                            </div>
                        </div>

                        <div className="links">
                            <div className="header"><p> CONTACT </p></div>
                            <div className="content2">
                                <div>
                                    <p><b> +44 (0) 207 738 7788 </b></p>
                                    <p><b> Email Support </b></p>
                                    
                                </div>

                                <div>
                                    <p><b>Backoffice Consulting LTD,</b></p>
                                    <p id="p1"> 20 Molesworth Street, </p>
                                    <p id="p1"> Dublin, Ireland </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="IconsContainer">
                        <div className="logoscontainer">
                            <div className="logocontainer">
                                <img src={Fb} />
                            </div>
                            <div className="logocontainer">
                                <img src={Twitter} />
                            </div>
                            <div className="logocontainer">
                                <img src={Insta} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="copyrightContainer">
                    <p> Copyright © 2021 Your Gift Card Warehouse </p>
                </div>

            </div>
        )
    }
}

export default BottomInfoBar;