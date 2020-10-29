import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.scss';
import Page404 from '../404-page/404-page.component';
import Login from '../login/login.component';
import MainNavigation from '../../components/shared/components/navigation/main-navigation/main-navigation.component';
import Home from '../home/home.component';
import {UserLogin} from '../../redux/user/types';

type AppProps = {
  currentUser: UserLogin
};

type AppState = {
  isAuth: boolean
};

class App extends React.Component<AppProps, AppState> {
  
  render() {
    const isLoggedIn = this.props.currentUser;
    if (isLoggedIn) {
      return (
          <React.Fragment>
            <MainNavigation/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/" component={Page404}/>
            </Switch>
          </React.Fragment>
      );
    } else {
      return (
          <Switch>
            <Route path="/" component={Login}/>
          </Switch>
      );
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    currentUser: state.user
  };
};

export default connect(mapStateToProps)(App);
