
import React, { Component } from "react";
import SpeechRecognition from 'react-speech-recognition'
let clearTransit = false;
let currentId = 'name';

class FormComp extends Component {
	constructor(){
		super();
		this.blur = this.blur.bind(this);
		this.startListening = this.startListening.bind(this);
		this.state = { currentTarget: 'name'};
	}

	blur(event){
		console.log("Eventtt");
		console.log(event.currentTarget.id);
		let currentTargetedElem = event.currentTarget.id;
		this.setState({ currentTarget: currentTargetedElem});
		currentId = currentTargetedElem;
		clearTransit = true;
		this.props.resetTranscript();
	}

	clear(){
		document.getElementById('name').value = '';
		document.getElementById('desc').value = '';
	}

	monitorAudio(){

	}

	startListening(){
		const { startListening, stopListening } = this.props
		startListening();
	}


	render(){

		 const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening, stopListening } = this.props

		  
		    if( startListening ){
		    	if(clearTransit){
		    		//transcript = null;
		    		clearTransit = false;
		    		this.props.resetTranscript();
		    	}
		    	if(transcript.includes('reset') ){
		    		this.props.resetTranscript();
		    		this.clear();
		    		stopListening();
		    	}
		    	if(transcript.includes('submit') ){
		    		this.props.resetTranscript();
		    		alert("From submitted successfully");
		    		this.clear();
		    		stopListening();
		    	}

		    	let currentTargetedElem = currentId; 
		    	console.log(currentTargetedElem);
		    	if(document.getElementById(currentTargetedElem) && transcript != '' && transcript != undefined && (!transcript.includes('reset')) && (!transcript.includes('submit')))	{
		        	document.getElementById(currentTargetedElem).value = transcript;
		   		}
		    }

		return (
			<div>
				<h1> Create a Campaign </h1>
				<form onSubmit={this.handleSubmit} onClick={this.startListening}>
			        <label>
			          Name:
			        </label> <br/>
			          <input type="text" id="name" ref={(input) => this.input = input} onMouseEnter={this.blur} autoComplete="off"/>
			        
			        <br/>
			        <label>
			          Description:
			        </label><br/>
			          <textarea rows = "5" cols = "50" id="desc" ref={(input) => this.input = input} onMouseEnter={this.blur} autoComplete="off"/>
			        <br/>
			        <input type="submit" value="Submit" />
			    </form>
		    </div>
		)
	}
}

export default SpeechRecognition(FormComp)
