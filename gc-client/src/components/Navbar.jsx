import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import mainlogo from "../assets/mainlogo.png";

class Navbar extends Component{
    render(){
        return (
            <div className="navBarContainer">
                
                <div className="leftnavContainer">
                    <div className="HomeLinkContainer">
                        <NavLink exact to="/" >
                            <img src={mainlogo} />
                        </NavLink>
                    </div>
                </div>

                <div className="rightnavContainer">

                    <div className="bbLinkContainer">
                        <NavLink to="/BulkBuy" activeStyle={{color:"#f6a500"}} ><p> Bulk Buy Gift Cards </p></NavLink>
                    </div>

                    <div className="rLinkContainer">
                        <NavLink to="/NotImplemented" activeStyle={{color:"#f6a500"}} ><p> Sell Gift Cards </p></NavLink>
                    </div>
                    <div className="niLinkContainer">
                        <NavLink to="/Register" activeStyle={{color:"#f6a500"}} ><p> Account </p></NavLink>
                    </div>
                    <div className="niLinkContainer">
                        <NavLink to="/NotImplemented" activeStyle={{color:"#f6a500"}} ><p> # </p></NavLink>
                    </div>
                </div>
            </div>

        )
    }
}

export default Navbar;