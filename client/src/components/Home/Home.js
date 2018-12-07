import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <Link to='/signup'>
              <StyledButton>Sign Up</StyledButton>
          </Link>
          <Link to='/login'>
              <StyledButton>Log In</StyledButton>
          </Link>
        </ButtonWrapper>
      </HomeWrapper>
    );
  }
}
