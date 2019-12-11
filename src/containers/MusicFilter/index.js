import React, { Fragment } from "react";
import Stories from "components/Stories";
import AudioController from "components/AudioController";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
`;
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "Original"
    };
  }
  chooseFilter(filter) {
    this.setState({ filter });
  }
  render() {
    return (
      <Wrapper>
        <Stories filter={this.state.filter} />
        <AudioController
          filter={this.state.filter}
          chooseFilter={this.chooseFilter.bind(this)}
        />
      </Wrapper>
    );
  }
}

export default Home;
