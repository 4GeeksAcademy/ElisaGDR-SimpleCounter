import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export const Counter = (props) => {
    return (
        <div className="BigDiv">
            <div className="icon"><i className="far fa-clock"></i></div>
            <div className="six">{props.digitSix % 10}</div>
            <div className="five">{props.digitFive % 10}</div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
};

Counter.proptypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
}

let counter = 0;
setInterval(function(){
    const six = Math.floor((counter / 100000)% 10);
    const five = Math.floor((counter / 10000)% 10);
    const four = Math.floor((counter / 1000)% 10);
    const three = Math.floor((counter / 100)% 10);
    const two = Math.floor((counter / 10)% 10);
    const one = Math.floor((counter / 1)% 10);
   
    ReactDOM.render(<Counter 
        digitOne={one} 
        digitTwo={two} 
        digitThree={three} 
        digitFour={four} 
        digitFive={five} 
        digitSix={six}/>, 
    document.querySelector("#app")); 
    counter++;
},1000);
