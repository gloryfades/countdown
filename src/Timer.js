import React from "react";
import Box from './Box'
class Timer extends React.Component{
	constructor(props){
		super(props);
		this.state ={ 
			'days': this.props.time.days, 
			'hours': this.props.time.hours,
			'mins': this.props.time.mins,
			'secs': this.props.time.secs,
			'seconds': this.props.seconds
		};
	}
	render(){
		return (
			      <div className="Timer">
			        <Box enum="Days" num={this.props.time.days}/>
			        <Box enum="Hours" num={this.props.time.hours}/>
			        <Box enum="Minutes" num={this.props.time.mins}/>
			        <Box enum="Seconds" num={this.props.time.secs}/>
			      </div>
		)
	}
}

export default Timer;