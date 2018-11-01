import React from "react";
import Box from './Box'
class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state ={ 
			'days': 1,//this.props.days, 
			'hours': 23,//this.props.hours,
			 'mins': 55,//this.props.mins,
			  'secs': 44,//this.props.secs
			  'seconds': (1*24*60*60)+(23*60*60)+(55*60)+44
		};

	}
	render(){
		return (
			      <div className="Timer">
			        <Box enum="Days" num={this.state.days}/>
			        <Box enum="Hours" num={this.state.hours}/>
			        <Box enum="Minutes" num={this.state.mins}/>
			        <Box enum="Seconds" num={this.state.secs}/>
			        <p>{this.state.seconds}</p>
			      </div>
		)
	}
}

export default Timer;