import React from "react";

class Input extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div>
				
				<form className='Input'>
					<h2> Timer Settings </h2>
					<p>Set the countdown timer</p>
				  <label>
				    Days:
				    <input type="number" placeholder="(0-) Days" min = "0" name="Days" />
				  </label>
				  <label>
				    Hours:
				    <input type="number" placeholder="(0-24) Hours Seconds" min = "0" max = "24" name="Hours" />
				  </label>
				  <label>
				    Minutes:
				    <input type="number" placeholder="(0-60) Minutes"min = "0" max ="60" name="Minutes" />
				  </label>
				  <label>
				    Seconds:
				    <input type="number" placeholder="(0-60) Seconds"min = "0" max = "60" name="Seconds" />
				  </label>
				  <input type="submit" value="Set" />
				</form>
			</div>
		)
	}
}

export default Input;