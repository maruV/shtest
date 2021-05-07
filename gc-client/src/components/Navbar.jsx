import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component{
    render(){
        return (
            <div className="mainNav">
                <div className="navBarContainer">
                    <div className="HomeLinkContainer">
                        <Link exact to="/" ><p> Home This will be an img tag</p></Link>
                    </div>

                    <div className="bbLinkContainer">
                        <NavLink to="/bulkbuy" activeStyle={{color:"#f6a500"}} ><p> Bulk Buy Gift Cards </p></NavLink>
                    </div>

                    <div className="rLinkContainer">
                        <NavLink to="/register" activeStyle={{color:"#f6a500"}} ><p> Sell Gift Cards </p></NavLink>
                    </div>

                    <div className="LinkContainer">
                        <NavLink to="/notImplemented" activeStyle={{color:"#f6a500"}} ><p> Sell Gift Cards </p></NavLink>
                    </div>
                </div>

                <div className="navBarContainer static-push">
                </div>

            </div>
        )
    }
}

export default Navbar;