import React from "react";

class Box extends React.Component{
	constructor(props){
		super(props);
		this.state = {enum : this.props.enum, number: this.props.num};
	}
	render(){
		return (
			<div className="Box">
				<h2> {this.state.number} </h2>
				<p className="Enum">{this.state.enum}</p>
			</div>
		)
	}
}

export default Box;