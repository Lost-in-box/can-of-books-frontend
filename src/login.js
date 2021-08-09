import React from 'react';
import { Card } from 'react-bootstrap';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return (
      <>
        <div className="grid">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <LoginButton />
            </Card.Body>
          </Card>
        </div>
      </>
    );
  }
}

export default Login;