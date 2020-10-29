import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.scss';
import Login from '../login/login.component';
import Home from '../home/home.component';
import { UserLogin } from '../../redux/user/types';

type AppProps = {
  currentUser: UserLogin
};

type AppState = {
  isAuth: boolean
};

class App extends React.Component<AppProps, AppState> {
  
  render() {
    let app;
    if (this.props.currentUser) {
      app = (
          <Home/>
      );
    } else {
      app = (
          <Login/>
      );
    }
    return (
        <div className="container">
          {app}
        </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.user
  };
};

export default connect(mapStateToProps)(App);
