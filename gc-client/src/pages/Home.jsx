import React, {Component} from 'react';

import bulkicon from "../assets/bulkicon.png";

class Home extends Component {
    render(){
        return (
            <div className="homeBlock">
                <div className="topContainer">

                    <div className="slantContentContainer">
                        <div className="orangeBox"></div>
                        <div className="videoContainer"></div>
                    </div>

                    <div className="introTextContainer">
                        <div className="leftContainer">
                            <div className="titleContainer">
                                <div className="imagewrapper">
                                    <img src={bulkicon} />
                                </div>
                                
                                <div className="t1"><p> Bulk Buy Gift Cards </p></div>
                            </div>
                            <div className="homeTextContainer">
                                <div className="headerText">
                                    <p id="h1"><b>Gift Card Solutions</b></p>
                                    <p id="h2">for your Business</p>
                                </div>
                                <div className="infoText">
                                    <p> Cras mattis consectetur purus sit amet </p>
                                    <p> fermentum. Etiam porta sem malesuada </p>
                                    <p> magna mollis euismod. </p>
                                </div>
                            </div>
                            <div className="buttonsContainer">
                                <button id="b1">BUY GIFT CARDS</button>
                                <button id="b2">REGISTER TODAY</button>
                            </div>
                        </div>
                        <div className="rightContainer">
                            <p>Right Orange icon</p>
                        </div>
                        
                    </div>

                    <div className="bottomTextContainer">
                        <div className="catchphraseContainer">
                            <p><b>Peace of Mind</b> with every bulk purchase...</p>
                        </div>
                        <div className="featuresContainer">
                            <div><p>Huge Discounts</p></div>
                            <div><p>Safe and Secure</p></div>
                            <div><p>Instant Delivery</p></div>
                            <div><p>B2B Specialists</p></div>
                        </div>
                    </div>
                </div>
                
                <div className="middleContainer">
                    Middle Container
                </div>

                <div className="lastContainer">Purple Container</div>
            </div>
        )


    }
}

export default Home;