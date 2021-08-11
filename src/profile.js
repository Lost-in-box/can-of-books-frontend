import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Content from './content';
import BestBooks from './bestbook';
import BookForm from './booksFormModal';

class Profile extends Component {
  render() {

    const { user, isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated &&
      <div>
        <img src={user.picture} alt={user.name} />
        <div>Hello {user.name}</div>
        <div>Your Email: {user.email}</div>
        <BestBooks />
        <BookForm/>
      
        <Content />
      </div>
    );
  }
}

export default withAuth0(Profile);