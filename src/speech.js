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
      // console.log(transcript);
      let dd = 3;
      // let flag = this.compareArray(inputValues,transcript.split(" "));
      let flag = inputValues.filter(e => transcript.split(" ").indexOf(e) !== -1);
      console.log("Started listinig");
      console.log(transcript);
      if (flag.length > 0) {
        window.location.pathname = 'form';
      } 
    }


    return (
      <div>
        <h1 onClick={resetTranscript}> Campaign Monitoring</h1>
        <audio
          controls
          autoPlay={true}
          type="audio/wav"
          src="speech.wav"
          style={{"display":"none"}}>

    </audio>
      </div>
    )
  }

  compareArray(_arr1, _arr2) {
    // function arraysEqual(_arr1, _arr2) {
      if (!Array.isArray(_arr1) || !Array.isArray(_arr2) || _arr1.length !== _arr2.length)
        return false;
      var arr1 = _arr1.concat().sort();
      var arr2 = _arr2.concat().sort();
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
          return false;
      }
      return true;
    }
  // }
}

export default SpeechRecognition(Dictaphone)