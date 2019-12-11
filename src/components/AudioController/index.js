import React, { Component } from "react";
import { Button } from "antd";
import styled from "styled-components";
import stories from "components/Stories/stories";
export const Wrapper = styled.section`
  .button {
    margin-left: 10px;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: Object.keys(stories).map(key => ({ name: key })),
      filter: { name: this.props.filter }
    };
  }
  chooseFilter(filter) {
    this.setState({ filter: { name: filter } });
    this.props.chooseFilter(filter);
  }
  render() {
    return (
      <Wrapper>
        {this.state.filters.map(option => (
          <Button
            className="button"
            type={this.state.filter.name === option.name ? "primary" : ""}
            onClick={this.chooseFilter.bind(this, option.name)}
          >
            {option.name}
          </Button>
        ))}
      </Wrapper>
    );
  }
}
