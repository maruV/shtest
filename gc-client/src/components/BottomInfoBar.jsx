import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class BottomInfoBar extends Component{
    render(){
        return (
            
            <div className="infoBarContainer">

                <div className="linksContainer">
                    <div><p> QUICK LINKS</p></div>
                </div>

                <div className="linksContainer">
                    <div><p> SERVICES </p></div>
                </div>

                <div className="linksContainer">
                    <div><p> USEFUL LINKS </p></div>
                </div>

                <div className="linksContainer">
                    <div><p> CONTACT </p></div>
                </div>

                <div className="linksContainer">
                    <div><p> Social Media Icons </p></div>
                </div>

            </div>

        )
    }
}

export default BottomInfoBar;