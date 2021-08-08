import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {
    console.log('app', this.props);
    return(
      <>
        <Router>
  
            <Header />
            <Switch>
              <Route exact path="/">
              </Route>
            </Switch>
            <Footer />
        
        </Router>
      </>
    );
  }
}

export default App;