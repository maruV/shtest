import React, {Component} from 'react';


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
                                <p>icon</p>
                                <p>Buy Gift Cards</p>
                            </div>
                            <div className="homeTextContainer">
                                <div className="headerText">
                                    <p><b>Gift Card Solutions</b></p>
                                    <p>for your Business</p>
                                </div>
                                <div className="infoText">
                                    <p></p>
                                </div>
                            </div>
                            <div>
                                <button>BUY GIFT CARDS</button>
                                <button>REGISTER TODAY</button>
                            </div>
                        </div>
                        <div className="rightContainer">
                            <p>Right Orange icon</p>
                        </div>
                        <div className="bottomTextContainer">
                            <div>
                                <p><b>Peace of Mind</b> with every bulk purchase...</p>
                            </div>
                            <div>
                                <div><p>Huge Discounts</p></div>
                                <div><p>Safe and Secure</p></div>
                                <div><p>Instant Delivery</p></div>
                                <div><p>B2B Specialists</p></div>
                            </div>
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