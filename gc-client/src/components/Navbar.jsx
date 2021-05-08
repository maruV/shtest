import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

import mainlogo from "../assets/mainlogo.png";
import Bulkb from "../assets/bulkicon.png";
import Sellinglogo from "../assets/sellinglogo.png";
import Accountlogo from "../assets/accountlogo.png";
import Hmicon from "../assets/hmicon.png";

class Navbar extends Component{
    render(){
        return (
            <div className="navBarContainer">
                    
                <div className="leftnavContainer">
                    <div className="HomeLinkContainer">
                        <NavLink exact to="/" className="logolink">
                            <div className="homelogoWrapper">
                                <img src={mainlogo} />
                            </div>
                        </NavLink>
                    </div>
                </div>

                <div className="rightnavContainer">
                    <div className="linksbox">
                        <div className="LinkContainer">
                            <NavLink to="/BulkBuy" activeStyle={{color:"$orange"}} className="navlink">
                                <div className="linkWrapper">
                                    <div className="iconWrapper"><img src={Bulkb}/></div>
                                    <p> Bulk Buy Gift Cards </p>
                                </div>
                            </NavLink>
                        </div>

                        <div className="LinkContainer">
                            <NavLink to="/NotImplemented" activeStyle={{color:"$orange"}} className="navlink">
                                <div className="linkWrapper">
                                    <div className="iconWrapper"><img src={Sellinglogo}/></div>
                                    <p> Sell Gift Cards </p>  
                                </div>  
                            </NavLink>
                        </div>
                        <div className="LinkContainer">
                            <NavLink to="/Register" activeStyle={{color:"$orange"}} className="navlink">
                                <div className="linkWrapper">
                                    <div className="iconWrapper"><img src={Accountlogo}/></div>
                                    <p> Account </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>                    
                    <div className="hmiconWrapper">
                        <img src={Hmicon}/>
                    </div>
                        
                </div>
            </div>


        )
    }
}

export default Navbar;