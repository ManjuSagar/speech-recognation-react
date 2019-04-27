import React, {Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'

const inputValues = ['yes', 'ok', 'start', 'begin', 's'];

class Dictaphone extends Component {

  constructor(){
    super();
  }

  render() {
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, startListening } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    if( startListening ){
      console.log("Started listinig");
      console.log(transcript);
      if (inputValues.indexOf(transcript) > -1) {
        window.location.pathname = 'form';
      }
    }


    return (
      <div>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    )
  }
}

export default SpeechRecognition(Dictaphone)