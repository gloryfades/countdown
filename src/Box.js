import React from "react";

class Box extends React.Component{
	constructor(props){
		super(props);
		this.state = {enum : this.props.enum, number: this.props.num};
	}
	render(){
		return (
			<div className="Box">
				<h2> {this.props.num} </h2>
				<p className="Enum">{this.props.enum}</p>
			</div>
		)
	}
}

export default Box;