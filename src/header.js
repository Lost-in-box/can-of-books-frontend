import React from 'react';
import LogoutButton from './LogoutButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
    
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        {isAuthenticated &&
          <>
        <Link to="/profile">Profile</Link>
        </>
  }
        {isAuthenticated ?
          (
            <>
              <LogoutButton />
            </>
          ) : (
            <>
              {/* <LoginButton /> */}
            </>
          )
        }
      </Navbar>
    );
  }
}

export default withAuth0(Header);