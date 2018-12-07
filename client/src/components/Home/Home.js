import React, { Component } from "react";

import {
  HomeWrapper,
  StyledH1,
  StyledP,
  ButtonWrapper,
  StyledButton
} from "./Home.styled";

export default class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <div>
          <StyledH1>IronProfile</StyledH1>
          <StyledP>
            Today we create an app with authoritation, adding some cool styles!
          </StyledP>
        </div>
        <ButtonWrapper>
          <StyledButton>Sign Up</StyledButton>
          <StyledButton>Log In</StyledButton>
        </ButtonWrapper>
      </HomeWrapper>
    );
  }
}
