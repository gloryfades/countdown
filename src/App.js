import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js';
import Input from './Input.js';
class App extends Component {
  constructor() {
    super();
    this.state = { 
      time: {
        'days': 1,//this.props.days, 
        'hours': 23,//this.props.hours,
        'mins': 55,//this.props.mins,
        'secs': 44,//this.props.secs
      },
      seconds:  (1*24*60*60)+(23*60*60)+(55*60)+44
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  secondsToTime(secs){
    let days = Math.floor(secs/(24*60*60))

    
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }
  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }
  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }
  render() {
    return (
      <div className="App">
        <Timer/>
        <button onClick={this.startTimer}>Start</button>
        <Input/>
      </div>
    );
  }
}

export default App;
