import React, { Fragment } from "react";

import Stories from "react-insta-stories";
import stories from "./stories";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  getStories(filter) {
    return (
      <Stories
        stories={stories[filter]}
        defaultInterval={1500}
        width={432}
        height={768}
      />
    );
  }
  render() {
    console.log(this.props.filter, stories[this.props.filter]);
    return <Fragment>{this.getStories(this.props.filter)}</Fragment>;
  }
}
