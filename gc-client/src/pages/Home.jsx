import React, {Component} from 'react';

import Sellinfo from "../components/Sellinfo";

import CutEllipse from "../assets/cutellipse.png";
import Ellipse from "../assets/fullellipse.png";
import Shadow from "../assets/pictures/shadow.png";
import Star from "../assets/stars.png";
import Leftlady from "../assets/pictures/leftlady.png";
import Bulkblack from "../assets/bulkblack.png"; 

import homeright from "../assets/pictures/homemainright.png";
import homeleft from "../assets/pictures/homemainleft.png";
import Homemiddle from "../assets/pictures/homemiddle.png";

import bulkicon from "../assets/bulkicon.png";
import Discount from "../assets/discountlogo.png";
import Safety from "../assets/safetylogo.png";
import Delivery from "../assets/instantdelivery.png";
import B2b from "../assets/b2b.png";
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render(){
        return (
            <div className="homeBlock">
                <div className="topContainer">

                    <div className="slantContentContainer">
                        <div className="orangeBox">
                            <img src={homeleft} />
                        </div>
                        <div className="videoContainer">
                            <img src={homeright} />
                        </div>
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
                            
                            <div className="wrapper1">
                                <img src={CutEllipse}/>
                            </div>
                            <div className="wrapper2">
                                <img src={Ellipse} />
                            </div>
                            <div className="wrapper3">
                                <img src={Ellipse} />
                            </div>
                        </div>
                        
                    </div>

                    <div className="bottomTextContainer">
                        <div className="catchphraseContainer">
                            <p><b>Peace of Mind</b> with every bulk purchase...</p>
                        </div>
                        <div className="featuresContainer">
                            <div className="feature">
                                <div className="iconWrapper"><img src={Discount}/></div>
                                <div className="headerWrapper"><p> Huge Discounts </p></div>
                                <div className="textWrapper"><p> As much as 30% off the RRP </p></div>
                            </div>
                            <div className="feature">
                                <div className="iconWrapper"><img src={Safety}/></div>
                                <div className="headerWrapper"><p> Safe and Secure </p></div>
                                <div className="textWrapper"><p> Securely electronically delivered </p></div>
                            </div>
                            <div className="feature">
                                <div className="iconWrapper"><img src={Delivery}/></div>
                                <div className="headerWrapper"><p> Instant Delivery </p></div>
                                <div className="textWrapper"><p> Get your order fast via email </p></div>
                            </div>
                            <div className="feature">
                                <div className="iconWrapper"><img src={B2b}/></div>
                                <div className="headerWrapper"><p> B2B Specialists </p></div>
                                <div className="textWrapper"><p> Lorem Ipsum dolor sit amet </p></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="middleContainer">
                    <div className="midImageWrapper">
                        <img src={Homemiddle} />
                    </div>
                    <div className="purpleContainer">
                        <div className="headerContainer">
                            <p><b> Save time and energy by bulk buying </b></p>
                            <p> the gift cards you need with up to 30% off! </p>
                        </div>

                        <div className="componentContainer">
                            <div className="categoryContainer">
                                <div className="title" > <button class="b1" > Fashion </button></div>
                                <div className="title"> <button class="b1"> Food </button></div>
                                <div className="title"> <button class="b1"> Travel </button></div>
                                <div className="title"> <button class="b1"> Home & Garden </button></div>
                                <div className="title"> <button class="b1"> and more > </button></div>
                            </div>
                            <div className="shadowContainer">
                                <img src={Shadow} />
                            </div>
                            <div className="optionsContainer">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="lastContainer">

                    <div className="reviewsBox">

                        <div className="reviewtitleContainer">
                            <div className="rt1">
                                <p id="r1"> Don't just take our word for it </p>
                            </div>
                            <div className="rt2">
                                <p id="r2">here's what our loyal customers say...</p>
                            </div>
                        </div>

                        <div className="reviewsContainer">

                            <div className="review">
                                <div className="starimgWrapper">
                                    <img src={Star}/>
                                </div>
                                <div className="mainText">
                                    <p> Wow... they have </p>
                                    <p> everything you could</p>
                                    <p> need! </p>
                                </div>
                                <div className="boilerText">
                                    <p> Jerry, GiftCards4U </p>
                                </div>
                            </div>

                            <div className="review">
                                <div className="starimgWrapper">
                                    <img src={Star}/>
                                </div>
                                <div className="mainText">
                                    <p> Review Heading </p>
                                </div>
                                <div className="boilerText">
                                    <p> lorem ipsum </p>
                                </div>
                            </div>

                            <div className="review">
                                <div className="starimgWrapper">
                                    <img src={Star}/>
                                </div>
                                <div className="mainText">
                                    <p> Review Heading </p>
                                </div>
                                <div className="boilerText">
                                    <p> lorem ipsum </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="brandsContainer">
                        <div className="brandsLeft">
                            <div className="brandsImageWrapper">
                                <img src={Leftlady} />
                            </div>
                        </div>

                        <div className="brandsRight">
                            <div className="firstLine">
                                <div className="bulkImgWrapper">
                                    <img src ={Bulkblack} />
                                </div>
                                <div className="bulkText">
                                    <p> Bulk Buy Gift Cards </p>
                                </div>
                            </div>
                            
                            <div className="secondLine">
                                <p><b> 1000's of brands </b></p>
                                <p> ready for You </p>
                            </div>

                            <div className="thirdLines">
                                <p> Cras mattis consectetur purus sit </p>
                                <p> amet fermentum. Etiam porta sem </p>
                                <p> malesuada magna mollis euismod.</p>
                            </div>

                            <div className="htbWrapper">
                                <button> HOW TO BUY </button>
                            </div>
                        </div>
                    </div>

                    
                </div>

                <div className="SellComponentBox">
                    <Sellinfo />
                </div>
            </div>
        )


    }
}

export default Home;