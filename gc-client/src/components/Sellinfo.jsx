import React, {Component} from 'react';

import Salesguy from "../assets/pictures/salesguy.png";
import Sell from "../assets/sellinglogo.png";

class Sellinfo extends Component{

    render(){
        return (
            <div className="SellinfoContainer">
                <div className="sellBox">
                    <div className="sboxLeftContainer">
                        <div className="antiskewContainer">
                            <div className="sbfirstLine">
                                <div className="selliconWrapper">
                                    <img src={Sell} />
                                </div>
                                <div className="sellTxt">
                                    <p> Sell Gift Cards </p>
                                </div>
                            </div>

                            <div className="sbsecondLine">
                                <p id ="sb1"> Have stock you </p>
                                <p id="sb2"> need to sell? </p>
                            </div>

                            <div className="sbthirdLine">
                                <p> Cras mattis consectetur purus sit </p>
                                <p> amet fermentum. Etiam porta sem </p>
                                <p> malesuada magna mollis euismod.</p>
                            </div>

                            <div className="sbbuttonWrapper">
                                <button id="sellB"> HOW TO SELL </button>
                            </div>
                        </div>
                    </div>

                    <div className="sboxRightContainer">
                        <div className="sellImageWrapper">
                            <img src={Salesguy} /> 
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Sellinfo;