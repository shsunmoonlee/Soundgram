import React, { Fragment } from "react";
// import ReactAudioPlayer from 'react-audio-player';

import Stories from "components/Stories";
import AudioController from "components/AudioController";
import styled from "styled-components";
import AudioPlayer from "components/AudioPlayer";
import { Piano, KeyboardShortcuts, MidiNumbers } from "react-piano";
import "react-piano/dist/styles.css";
const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "Original",
      storyEnded: false
    };
  }
  chooseFilter(filter) {
    this.setState({ filter });
  }
  onStoryStart(event) {
    console.log("onStoryStart");
    // this.setState({ storyEnded: false });
  }
  onStoryEnd(event) {
    console.log("onStoryEnd");

    // console.log("story ended", event);
    this.setState({ storyEnded: true });
    setTimeout(() => this.setState({ storyEnded: false }));
  }
  render() {
    const firstNote = MidiNumbers.fromNote("c3");
    const lastNote = MidiNumbers.fromNote("f5");
    const keyboardShortcuts = KeyboardShortcuts.create({
      firstNote: firstNote,
      lastNote: lastNote,
      keyboardConfig: KeyboardShortcuts.HOME_ROW
    });
    return (
      <Wrapper>
        <AudioController
          filter={this.state.filter}
          chooseFilter={this.chooseFilter.bind(this)}
        />
        <br />
        <div>
          <Piano
            noteRange={{ first: firstNote, last: lastNote }}
            playNote={midiNumber => {
              // Play a given note - see notes below
            }}
            stopNote={midiNumber => {
              // Stop playing a given note - see notes below
            }}
            width={375}
            keyboardShortcuts={keyboardShortcuts}
          />
        </div>
        <br />
        <Stories
          onStoryEnd={this.onStoryEnd.bind(this)}
          onStoryStart={this.onStoryStart.bind(this)}
          filter={this.state.filter}
        />

        <AudioPlayer
          storyEnded={this.state.storyEnded}
          filter={this.state.filter}
        />
      </Wrapper>
    );
  }
}

export default Home;
