// /client/App.js
import React, { Component, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";

import MusicFilter from "containers/MusicFilter";
import { SetCurrentUser } from "actions";
import antdCSS from "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
  ${antdCSS}
  body {
  margin: 0;
  padding: 0;
  font-family: "Circular", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000;
  font-feature-settings: normal !important;
  -webkit-font-feature-settings: normal !important;    
  box-sizing:border-box;
  }
  div, nav, span, a {    
    font-family: "Circular", sans-serif;
    box-sizing: border-box;
  }
`;
const AppWrapper = styled.div`
  /* padding-top: 51px; */
  /* background-color: #ffa2a2; */
  width: 100%;
  height: 100%;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    if (true) {
      return (
        <Fragment>
          <GlobalStyle />
          <AppWrapper className="App">
            <br />
            <br />
            <Switch>
              <Route exact path="/" component={MusicFilter} />
            </Switch>
          </AppWrapper>
        </Fragment>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
