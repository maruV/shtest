import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class BottomInfoBar extends Component{
    render(){
        return (
            <div className="bottomBarContainer">
                <div className="infoBarContainer">
                    <div className="linksContainer">
                        <div className="links">
                            <div><p> QUICK LINKS</p></div>
                        </div>

                        <div className="links">
                            <div><p> SERVICES </p></div>
                        </div>

                        <div className="links">
                            <div><p> USEFUL LINKS </p></div>
                        </div>

                        <div className="links">
                            <div><p> CONTACT </p></div>
                        </div>
                    </div>

                    <div className="IconsContainer">
                        <div><p> Social Media Icons </p></div>
                    </div>

                </div>

                <div className="copyrightContainer">
                    <p>Copyright @ 2021 Your Gift Card Warehouse</p>
                </div>

            </div>
        )
    }
}

export default BottomInfoBar;