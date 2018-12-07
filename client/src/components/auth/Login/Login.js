import React, { Component } from "react";
import AuthService from "../AuthService";

import { Link, Redirect } from "react-router-dom";

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
} from "./Login.styled";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
    this.service = new AuthService();
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const { username, password} = this.state;

    this.service
      .login(username, password)
      .then(res => {
        this.setState({
          username: "",
          password: "",
          loggedIn: true
        });
        return this.props.getUser(res);
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
    return this.state.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
      <StyledForm onSubmit={e => this.handleFormSubmit(e)}>
        <FormWrapper>
          <StyledH1>Log in</StyledH1>
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
          <StyledP>If you don't have an account yet, you can create your account <Link to="/signup">here</Link></StyledP>
        </FormWrapper>
        <InfoWrapper>
          <div>
            <StyledHello>Hello!!</StyledHello>
            <StyledH2>Awesome to have at IronProfile again!</StyledH2>
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
