import React, { Component } from "react";
import ReactDOM from "react-dom";
import OriginalSound from "components/AudioPlayer/fields-of-gold-original.mp3";
import CrackSound from "components/AudioPlayer/fields-of-gold-crack.mp3";
import Destroyed from "components/AudioPlayer/Fields-Destroyed.mp3";
import Lofi from "components/AudioPlayer/Fields-LoFi.mp3";
import Melancholic from "components/AudioPlayer/Fields-Melancholic.mp3";
import Dreamy from "components/AudioPlayer/Fields-Dreamy.mp3";
/**
 * Use case: audio player with dynamic source in react
 *
 * Usage:
 *   <AudioPlayerDOM src={this.state.currentFile}/>
 *
 * Todo: make a better api, actually pass props through
 * Todo: use children instead of passing
 */
const sounds = {
  Original: OriginalSound,
  Vintage: CrackSound,
  Destroyed,
  Lofi,
  Melancholic,
  Dreamy
};
export default class AudioPlayerDOM extends Component {
  constructor(props) {
    super(props);
  }
  //     onTrackChange: function(source) {
  //         this.setState({ isPlaying: source },function(){
  //              this.refs.audio.pause();
  //              this.refs.audio.load();
  //              this.refs.audio.play();
  //         })
  //  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // Find some DOM nodes
    const element = ReactDOM.findDOMNode(this);
    const audio = element.querySelector("audio");
    const source = audio.querySelector("source");

    // When the url changes, we refresh the component manually so it reloads the loaded file
    if (this.props.filter !== prevProps.filter) {
      // Change the source
      source.src = sounds[this.props.filter];
      // Cause the audio element to load the new source
      audio.pause();
      audio.load();
      audio.play();
    }
    if (this.props.storyEnded) {
      audio.pause();
    }
  }
  render() {
    console.log("sounds source", sounds[this.props.filter]);
    return (
      <div>
        <audio autoPlay>
          <source src={sounds[this.props.filter]} />
        </audio>
      </div>
    );
  }
}
