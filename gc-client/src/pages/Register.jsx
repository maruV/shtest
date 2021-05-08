import React, {Component} from 'react';

import Logpurple from "../assets/pictures/loginpurple.png";

class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            pExt: 'IND +91',
            mExt: 'IND 91'
        }
    }

    render(){
        return (
            <div className="registerBlock">
                <div className="leftBlock">
                    <div className="formContainer">
                        <form>
                            <div className="titleText">
                                <p> Create an account</p>
                            </div>
                            <div className="underText">
                                <p> Choose Type of Account* </p>
                            </div>

                            <div className="selectAcContainer">
                                <div className="buyersContainer">
                                    <input type="radio" value="buyers" />
                                    <label for="buyers"> Buyers Account </label>
                                </div>
                                <div className="sellersContainer">
                                    <input type="radio" value="sellers" />
                                    <label for="sellers"> Sellers Account </label>
                                </div>
                            </div>

                            <div className="namesContainer">
                                <div className="fnameContainer">
                                    <div>
                                        <label>
                                            First Name*
                                        </label>
                                    </div>
                                    <div>
                                        <input />
                                    </div>
                                </div>

                                <div className="lnameContainer">
                                    <div>
                                        <label>
                                            Last Name*
                                        </label>
                                    </div>
                                    <div>
                                        <input />
                                    </div>
                                </div>
                                
                            </div>

                            <div className="emailContainer">
                                <div>
                                    <p> Email* </p>
                                </div>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div className="phoneContainer">
                                <div>
                                    <p> Phone number*</p>
                                </div>
                                <div className="phoneDropdown">
                                    <div className="extentions">
                                        <select value={this.state.pExt}>
                                            <option value='IND +91'> IND +91 </option>
                                            <option value='UK +44'> UK +44 </option>
                                            <option value='US +1'> US +1 </option>
                                        </select>
                                    </div>
                                    <div className="phoneNo">
                                        <input />
                                    </div>
                                </div>
                            </div>

                            <div className="mobileContainer">
                                <div>
                                    <p> Mobile number*</p>
                                </div>
                                <div className="mobileDropdown">
                                    <div className="mobileExtentions">
                                        <select value={this.state.mExt}>
                                            <option value='IND +91'> IND +91 </option>
                                            <option value='UK +44'> UK +44 </option>
                                            <option value='US +1'> US +1 </option>
                                        </select>
                                    </div>
                                    <div className="mobileNo">
                                        <input />
                                    </div>
                                </div>
                            </div>

                            <div className="birthDate">
                                <div> Date of Birth* </div>

                                <div className="daySelector">
                                    <select value={this.state.birthd}>
                                        <option value='01' > 01 </option>
                                        <option value='02' > 02 </option>
                                        <option value='03' > 03 </option>
                                        <option value='04' > 04 </option>
                                        <option value='05' > 05 </option>
                                        <option value='06' > 06 </option>
                                        <option value='07' > 07 </option>
                                        <option value='08' > 08 </option>
                                        <option value='09' > 09 </option>
                                        <option value='10' > 10 </option>
                                        <option value='11' > 11 </option>
                                        <option value='12' > 12 </option>
                                        <option value='13' > 13 </option>
                                        <option value='14' > 14 </option>
                                        <option value='15' > 15 </option>
                                        <option value='16' > 16 </option>
                                        <option value='17' > 17 </option>
                                        <option value='18' > 18 </option>
                                        <option value='19' > 19 </option>
                                        <option value='20' > 20 </option>
                                        <option value='21' > 21 </option>
                                        <option value='22' > 22 </option>
                                        <option value='23' > 23 </option>
                                        <option value='24' > 24 </option>
                                        <option value='25' > 25 </option>
                                        <option value='26' > 26 </option>
                                        <option value='27' > 27 </option>
                                        <option value='28' > 28 </option>
                                        <option value='29' > 29 </option>
                                        <option value='30' > 30 </option>
                                        <option value='31' > 31 </option>
                                    </select>
                                </div>

                                <div className="monthSelector">
                                    <select value={this.state.birthm}>
                                        <option value='January'> January </option>
                                        <option value='February'> February </option>
                                        <option value='March'> March </option>
                                        <option value='April'> April </option>
                                        <option value='May'> May </option>
                                        <option value='June'> June </option>
                                        <option value='July'> July </option>
                                        <option value='August'> August </option>
                                        <option value='September'> September </option>
                                        <option value='October'> October </option>
                                        <option value='November'> November</option>
                                        <option value='December'> December </option>
                                    </select>
                                </div>

                                <div className="yearSelector">
                                    <select name="birth-year">
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                        <option value="1933">1933</option>
                                        <option value="1932">1932</option>
                                        <option value="1931">1931</option>
                                        <option value="1930">1930</option>
                                        <option value="1929">1929</option>
                                        <option value="1928">1928</option>
                                        <option value="1927">1927</option>
                                        <option value="1926">1926</option>
                                        <option value="1925">1925</option>
                                        <option value="1924">1924</option>
                                        <option value="1923">1923</option>
                                        <option value="1922">1922</option>
                                        <option value="1921">1921</option>
                                        <option value="1920">1920</option>
                                        <option value="1919">1919</option>
                                        <option value="1918">1918</option>
                                        <option value="1917">1917</option>
                                        <option value="1916">1916</option>
                                        <option value="1915">1915</option>
                                        <option value="1914">1914</option>
                                        <option value="1913">1913</option>
                                        <option value="1912">1912</option>
                                        <option value="1911">1911</option>
                                        <option value="1910">1910</option>
                                        <option value="1909">1909</option>
                                        <option value="1908">1908</option>
                                        <option value="1907">1907</option>
                                        <option value="1906">1906</option>
                                        <option value="1905">1905</option>
                                </select>
                                </div>
                            </div>

                            <div className="passwordContainer">

                            </div>

                            <div className="passwordContainer2">

                            </div>

                            <div className="cnameContainer">

                            </div>

                            <div className="cnumberContainer">

                            </div>

                            <div className="a1Container">
                                <div>
                                    <p>Address* </p>
                                    <p> If no company provided, please enter residential address. </p>
                                </div>
                                <div>
                                    <label> Address line 1 </label>
                                </div>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div className="a2Container">
                                <div>
                                    <label> Address line 2 </label>
                                </div>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div className="cityContainer">
                                <div>
                                    <label> City </label>
                                </div>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div className="spContainer">
                                <div>
                                    <label> State/Province </label>
                                </div>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div className="zpContainer">
                                <div>
                                    <label> Postcode/Zipcode </label>
                                </div>
                                <div>
                                    <input />
                                </div>
                            </div>

                            <div className="CountryContainer">
                                <div className="countrylabel">
                                    <label> Country </label>
                                </div>
                                <div className="countryselectContainer">
                                    <select>
                                        <option> India </option>
                                        <option> United Kingdom </option>
                                        <option> USA </option>
                                    </select>
                                </div>
                            </div>

                            <div className="termsContainer">
                                <div className="termslinkContainer">
                                    <p> Do you accept our </p>
                                    <a href="www.google.com"> Terms and Conditions </a>
                                </div>
                                <div className="acceptradioContainer">
                                    <div>
                                        <input type="radio" />
                                    </div>
                                    <div>
                                        <label> I accept</label>
                                    </div>
                                </div>
                            </div>

                            <div className="captchaContainer">
                                Captcha
                            </div>

                            <div className="finalContainer">
                                <button type="submit"> Create Your Account </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="rightBlock">
                    <div className="staticloginBox">
                        <div className="staticPurpleWrapper">
                            <img src={Logpurple} />
                        </div>
                        <div className="logText">
                            <p> Do you have an </p>
                            <p> account with us? </p>
                        </div>
                        <div className="logbuttContainer">
                            <button> Login </button>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}

export default Register;