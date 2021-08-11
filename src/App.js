import React from 'react';
import Header from './header';
import Footer from './footer';
import Login from './login';
import Profile from './profile';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './bestbook';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends React.Component {

  render() {

    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
  
            <Header />
            <Switch>
              <Route exact path="/">
              {isAuthenticated ? <BestBooks /> : <Login />}
              </Route>
              <Route exact path="/Profile">
              {this.props.auth0.isAuthenticated && <Profile />}
              </Route>
            </Switch>
            <Footer />
        
        </Router>
      </>
    );
  }
}

export default withAuth0(App);