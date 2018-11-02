import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer.js';
import Input from './Input.js';
class App extends Component {
  constructor() {
    super();
    this.state = { 
      time: {},
      seconds:  0,
      resetSeconds: 0
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }
  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }
  componentDidUpdate(prevProps){

  }
  secondsToTime(secs){
    let days = Math.floor(secs/(24*60*60))

    let divisor_for_hours = secs % (24*60*60);
    let hours = Math.floor(divisor_for_hours / (60*60));

    let divisor_for_minutes = divisor_for_hours % (60*60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "days": days,
      "hours": hours,
      "mins": minutes,
      "secs": seconds
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
    console.log(seconds);
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    
    // Check if we're at zero.
    if (seconds == 0) { 
      clearInterval(this.timer);
    }
  }
  set(e){
    e.preventDefault();
    let time = {};
     time.days = document.getElementById('days').value;
     time.hours = document.getElementById('hours').value;
     time.mins = document.getElementById('mins').value;
     time.secs = document.getElementById('secs').value;
    let totalsecs = (time.days*24*60*60)+(time.hours*60*60)+(time.mins*60)+(time.secs*1);
    this.setState({time: time, seconds: totalsecs, resetSeconds: totalsecs});
  }
  render() {
    return (
      <div className="App">
        <Timer time = {this.state.time} seconds = {this.state.seconds}/>
        <button onClick={this.startTimer}>Start</button>
        <Input set={this.set.bind(this)} />
      </div>
    );
  }
}

export default App;
