import React, { Component } from "react";
import AuthService from "../AuthService";

import { Redirect } from "react-router-dom";

import {
  StyledForm,
  FormWrapper,
  StyledH1,
  StyledInput,
  StyledLabel,
  InfoWrapper,
  StyledHello,
  StyledH2,
  ButtonWrapper,
  StyledP,
  StyledButton
} from "./Signup.styled";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      campus: "",
      course: "",
      signedUp: false
    };
    this.service = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password, campus, course } = this.state;

    this.service
      .signup(username, password, campus, course)
      .then(res => {
        this.setState({
          username: "",
          password: "",
          campus: "",
          course: "",
          signedUp: true
        });
        this.props.getUser(res);
      })
      .catch(err => console.log(err));
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return this.state.signedUp ? (
      <Redirect to="/profile" />
    ) : (
      <StyledForm onSubmit={e => this.handleFormSubmit(e)}>
        <FormWrapper>
          <StyledH1>Sign Up</StyledH1>
          <StyledLabel>Username</StyledLabel>
          <StyledInput
            name="username"
            type="text"
            value={this.state.username}
            onChange={e => this.handleChange(e)}
          />
          <StyledLabel>Password</StyledLabel>
          <StyledInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <StyledLabel>Campus</StyledLabel>
          <StyledInput
            name="campus"
            type="text"
            value={this.state.campus}
            onChange={e => this.handleChange(e)}
          />
          <StyledLabel>Course</StyledLabel>
          <StyledInput
            name="course"
            type="text"
            value={this.state.course}
            onChange={e => this.handleChange(e)}
          />
        </FormWrapper>
        <InfoWrapper>
          <div>
            <StyledHello>Hello!!</StyledHello>
            <StyledH2>Welcome to IronProfile!</StyledH2>
          </div>
          <ButtonWrapper>
            <StyledP>
              If you signup, you agree with all our terms and conditions where
              we can do whatever we want with the data!
            </StyledP>
            <StyledButton>Create the Account</StyledButton>
          </ButtonWrapper>
        </InfoWrapper>
      </StyledForm>
    );
  }
}
