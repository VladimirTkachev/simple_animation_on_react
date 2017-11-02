import React, { Component } from 'react';
import './App.css';
import webicon from './img/webicon.png';
import purchaseicon from './img/purchaseicon.png';
import phoneicon from './img/phoneicon.png';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      btn1: "btn-1",
      btn2: "btn-2",
      btn3: "btn-3"
    }
    this.changeClass = this.changeClass.bind(this);
  }

  changeClass() {
    this.setState({
      btn1: "btn-1-a",
      btn2: "btn-2-a",
      btn3: "btn-3-a"
    })
  }
  
  render() {
    const {btn1, btn2, btn3} = this.state;
    return (
      <div className="wrap">
        <h1>Press Button</h1>
        <div className="wrp">
            <div className="red-btn" onClick={this.changeClass}></div>
            <div className='buttons'>
                <a href="https://github.com/VladimirTkachev" target="blank">
                  <img src={webicon} alt="web" className={btn1} />
                </a>
                <a href="https://vladimirtkachev.github.io" target="blank">
                  <img src={purchaseicon} alt="tickets" className={btn2} />
                </a>
                <a href="https://spb.hh.ru/resume/56b08789ff0184a6ae0039ed1f713733764f6f" target="blank">    
                  <img src={phoneicon} alt="phone" className={btn3} />
                </a>
            </div>
        </div>
      </div>
    );
  }
}

export default App;