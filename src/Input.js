import React from "react";

class Input extends React.Component{
	constructor(props){
		super(props);
	}
	// handleChange(num, e) {
	// 	switch(num){
	// 		case 0:
	// 		    this.setState({ days: e.target.value });
	// 			break;
	// 		case 1:
	// 			this.setState({ hours: e.target.value });
	// 			break;
	// 		case 2:
	// 			this.setState({ mins: e.target.value });
	// 			break;
	// 		case 3:
	// 			this.setState({ secs: e.target.value });
	// 			break;
	// 	} 
 //  	}
	render(){
		return (
			<div>
				<form className='Input'>
					<h2> Timer Settings </h2>
					<p>Input and set the countdown timer</p>
					<br/>
				 <div className='Set'>
				 	<div>
					  <label>Days:</label>
					  <br/>
					  <input type="number" id="days" placeholder="Days" min = "0" name="Days" />
					</div>
					<div>
					  <label>Hours:</label>
					  <br/>
					  <input type="number" id="hours"  placeholder="Hours" min = "0" max = "24" name="Hours" />
					</div>
					<div>
					  <label>Minutes:</label>
					  <br/>
					  <input type="number" id="mins" placeholder="Minutes"min = "0" max ="60" name="Minutes" />
					</div>
					<div>
					  <label>Seconds:</label>
					  <br/>
					  <input type="number" id="secs"  placeholder="Seconds"min = "0" max = "60" name="Seconds" />
					</div>
				 </div>
				 <input type="submit" 
				 onClick={this.props.set} value="Set" className='setButton'/>

				</form>
			</div>
		)
	}
}

export default Input;