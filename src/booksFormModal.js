import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export class BookForm extends Component {
  render() {
    return (
      <>
      <>
      <h1>Add New Book!</h1>
      </>
      <Form onSubmit={(e)=>{this.props.addBook(e)}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Book name</Form.Label>
          <Form.Control onChange={(e)=> this.props.updateBookName(e)} type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={(e)=> this.props.updateBooDescription(e)} type="text" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Status</Form.Label>
          <Form.Control onChange={(e)=> this.props.updateBookStatus(e)} type="text"/>
        </Form.Group>
        <Button variant="primary" type="submit">
          ADD 
  </Button>
      </Form>
      </>
    );
  }
}

export default BookForm;