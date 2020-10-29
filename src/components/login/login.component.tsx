import React from 'react';
import {connect, ConnectedProps} from 'react-redux';

import './login.styles.scss';
import FormInput from '../shared/components/form-input/form-input.component';
import CustomBtn from '../shared/components/custom-button/custom-button.component';
import {SetCurrentUser} from '../../redux/user/user.actions';
import {UserLogin} from '../../redux/user/types';

type UserLoginState = {
  email: string
  password: string
}

const mapDispatchToProps = {
  setCurrentUser: SetCurrentUser
};

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type LoginProps = PropsFromRedux;

class Login extends React.Component<LoginProps, UserLoginState> {
  state: UserLoginState = {
    email: '',
    password: '',
  };
  
  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const email = this.state.email;
    const pass = this.state.password;
    const {setCurrentUser} = this.props;
    const currentUser = {
      email: email,
      password: pass
    };
    
    setCurrentUser(currentUser);
  };
  
  handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {name, value} = event.currentTarget;
    this.setState((state: UserLogin) => {
      return {
        email: name === 'email' ? value : state.email,
        password: name === 'password' ? value : state.password
      };
    });
  };
  
  render() {
    return (
        <div className="login">
          <h1>Login</h1>
          <form className="login-form" onSubmit={this.handleSubmit}>
            <FormInput handleChange={this.handleChange}
                       label={'Email'}
                       name="email"
                       value={this.state.email}
                       attrType={'email'}
                       autoComplete="username"
                       required/>
            <FormInput handleChange={this.handleChange}
                       label={'Password'}
                       name="password"
                       value={this.state.password}
                       attrType={'password'}
                       autoComplete="current-password"
                       required/>
                       
            <CustomBtn type="submit">Login</CustomBtn>
          </form>
        </div>
    );
  }
}

export default connector(Login);
