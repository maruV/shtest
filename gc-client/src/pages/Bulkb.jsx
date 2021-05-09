import React, {Component} from 'react';

import Sellinfo from "../components/Sellinfo";

import LeftOrange from "../assets/pictures/bbleftorange.png";
import PurpleStatic from "../assets/pictures/staticpurple.png";
import Ellipse from "../assets/fullellipse.png";
import Ladyright from "../assets/pictures/ladyright.png";
import Bulk from "../assets/bulkicon.png";
class Bulkb extends Component {
    render(){
        return (
            <div className="bbBlock">
                <div className="topContainer"> 

                    <div className="leftStatic">
                        <img src={LeftOrange} />
                    </div>
                    
                    <div className="rightStatic">
                        <div className="purpleWrapper">
                            <div className="pline1"> 15% </div>
                            <div className="pline2"> <p> off all Gift Cards </p></div>
                            <div className="stImgWrapper">
                                 < img src={PurpleStatic} /> 
                            </div>
                        </div>
                        <div className="bigEllipseWrapper">
                            <img src={Ellipse}/>
                        </div>
                        <div className="smallEllipseWrapper">
                            <img src={Ellipse}/>
                        </div>
                    </div>

                    <div className="bbtopleft">
                        <div className="bbtextContainer">
                            <div className="bbtext1">
                                <div className="bulkIconWrapper"> 
                                    <img src={Bulk} />
                                </div>
                                <div className="bulktextWrapper"> Bulk Buy Gift Cards </div>
                            </div>

                            <div className="bbtext2">
                                <p id="bb2"> The home of Bulk </p>
                                <p id="bb2"> Buying Gift Cards </p>
                                <p id="bb2bold"> for your Business </p>
                            </div>

                            <div className="bbtext3">
                                <p> Cras mattis consectetur purus sit amet </p>
                                <p> fermentum. Etiam porta sem malesuada </p>
                                <p> magna mollis euismod. </p>
                            </div>
                            
                            <div className="bbtext4">
                                <p> Check the balance of your gift card </p>
                            </div>
                        </div>
                    </div>

                    <div className="bbtopright">
                        <div className="rightLadyWrapper">
                            <img src={Ladyright} />
                        </div>
                    </div>
                </div>

                <div className="middleContainer"> Middle Container </div>
               
                <div className="bottomContainer"> 
                    <Sellinfo />
                </div>
            </div>
        )


    }
}

export default Bulkb;