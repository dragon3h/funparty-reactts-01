import React from 'react';

import './login.styles.scss';
import FormInput from '../shared/form-input/form-input.component';
import CustomBtn from '../shared/custom-button/custom-button.component';

type LoginProps = {};

type LoginState = {
  email: string,
  password: string
};

class Login extends React.Component<LoginProps, LoginState> {
  state = {
    email: '',
    password: '',
  };
  
  handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const {name, value} = event.currentTarget;
    this.setState((state) => {
      return {
        email: name === 'email' ? value:state.email,
        password: name === 'password' ? value:state.password
      };
    });
  };
  
  render() {
    return (
        <div className="login">
          <FormInput handleChange={this.handleChange} label={'Email'} name="email" value={this.state.email}
                     attrType={'email'} required/>
          <FormInput handleChange={this.handleChange} label={'Password'} name="password" value={this.state.password}
                     attrType={'password'}/>
          <CustomBtn type="submit">Login</CustomBtn>
        </div>
    );
  }
}

export default Login;