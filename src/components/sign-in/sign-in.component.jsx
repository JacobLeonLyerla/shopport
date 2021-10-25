import React, { Component } from "react";

import FormInput from "../form-imput/form-imput.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    event.preventDefault();
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="email"
            value={this.state.email}
            handleChange={this.handleChange}
            requried
          />

          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            handleChange={this.handleChange}
            requried
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
