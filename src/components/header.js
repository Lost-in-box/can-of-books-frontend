import React from 'react';
import LoginButton from './login'
import LogoutButton from './logout'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './header.css';
import Profile from '../screens/profile';

class Header extends React.Component {
    
  render() {
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Profile/>
        <LoginButton />
        <LogoutButton />
      </Navbar>
    );
  }
}

export default Header;