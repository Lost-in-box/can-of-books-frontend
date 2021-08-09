import React from 'react';
import Header from './header';
import Footer from './footer';
import Login from './login';
import Profile from './profile';
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import profile from './profile';

class App extends React.Component {

  render() {
    // console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
  
            <Header />
            <Switch>
              <Route exact path="/">
              {isAuthenticated ? <Profile /> : <Login />}
              </Route>
              <Route exact path="/Profile">
                <Profile/>
              </Route>
            </Switch>
            <Footer />
        
        </Router>
      </>
    );
  }
}

export default withAuth0(App);