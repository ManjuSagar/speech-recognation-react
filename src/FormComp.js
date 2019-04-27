
import React, { Component } from "react";
import SpeechRecognition from 'react-speech-recognition'
let clearTransit = false;

class FormComp extends Component {
	constructor(){
		super();
		this.blur = this.blur.bind(this);
		this.state = { currentTarget: 'name'};
	}

	blur(event){
		console.log("Eventtt");
		console.log(event.currentTarget.id);
		let currentTargetedElem = event.currentTarget.id;
		this.setState({ currentTarget: currentTargetedElem});
		clearTransit = true;
	}


	render(){

		 const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening } = this.props

		  
		    if( startListening ){
		    	if(clearTransit){
		    		//transcript = null;
		    		clearTransit = false;
		    		resetTranscript();
		    	}
		    	let currentTargetedElem = this.state.currentTarget; 
		    	console.log(currentTargetedElem);
		    	if(document.getElementById(currentTargetedElem) && transcript != '' && transcript != undefined)	{
		        	document.getElementById(currentTargetedElem).value = transcript;

		   		}
		    }

		return (
			<form onSubmit={this.handleSubmit}>
		        <label>
		          Name:
		          <input type="text" id="name" ref={(input) => this.input = input} onMouseEnter={this.blur}/>
		        </label>
		        <br/>
		        <label>
		          Description:
		          <input type="text" id="desc" ref={(input) => this.input = input} onMouseEnter={this.blur} />
		        </label>
		        <br/>
		        <input type="submit" value="Submit" />
		    </form>
		)
	}
}

export default SpeechRecognition(FormComp)
