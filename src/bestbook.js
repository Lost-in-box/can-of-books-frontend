import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';
import BookForm from './booksFormModal';
import UptadeBookForm from './updateBookForm';
import MyCarousel from './myCarousel';


class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBooks: false,
      showForm: false,
      bookName: '',
      bookDescription: '',
      bookStatus: '',
      showUpdatingForm:false,
      index:0
    }
  }


  componentDidMount = async () => {
    console.clear()
    const { user } = this.props.auth0;
    try {
 
      const params = {
        email: user.email,
      }
      const books = await axios.get(`${process.env.REACT_APP_BACK_END_URL}/user`, { params });

      this.setState({
        books: books.data,
        showBooks: true
      });
 
    } catch (error) {
      console.log(error);
    }
  }


  revealFrom = ()=> this.setState({showForm : true});

  updateBookName = (e)=> this.setState({bookName: e.target.value});
  updateBooDescription = (e)=> this.setState({bookDescription: e.target.value}); 
  updateBookStatus = (e)=> this.setState({bookStatus: e.target.value}); 


  addBook = async (e)=>{
    e.preventDefault();
    const {user} = this.props.auth0
    const reqData = {
      bookName: this.state.bookName,
      bookDescription: this.state.bookDescription,
      bookStatus: this.state.bookStatus,
      email: user.email
    }


    const newBook = await axios.post(`${process.env.REACT_APP_BACK_END_URL}/user`, reqData);

    this.setState({
      books: newBook.data
    });
  }


  deleteBook = async (index)=>{
   

    
    const arrOfBooks = this.state.books.filter((book, idx)=>{
      return idx !== index;
    });
 

    this.setState({
      books: arrOfBooks
    });
    
    const {user} = this.props.auth0
    const query = {
      email: user.email
    }
    await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/user/${index}`, {params: query});
  }

 
  showUpdateForm = (idx) => {
    const booksArray = this.state.books.filter((value, index) => {
      return index === idx
    });
   
    this.setState({
      index: idx,
      bookName: booksArray[0].name,
      bookDescription: booksArray[0].description,
      bookStatus:booksArray[0].status,
      showUpdatingForm: true,
    });
  }

updateBooks = async (e) => {
  e.preventDefault();
  const {user} = this.props.auth0
  const reqBody = {
    bookName: this.state.bookName,
    bookDescription: this.state.bookDescription,
    bookStatus: this.state.bookStatus,
    email: user.email
}

const updatedBooks = await axios.put(`${process.env.REACT_APP_BACK_END_URL}/user/${this.state.index}`, reqBody);
this.setState({
  books: updatedBooks.data
});
}

  render() {
    return (
      <>
        <>
          {this.componentDidMount}
          <Jumbotron>
            <h1>My Favorite Books</h1>
            <p>
              This is a collection of my favorite books
              </p>
            <Button onClick={this.revealFrom} variant="outline-primary">Add a Book</Button><br/><br/>
            {this.state.showForm &&
              <>
                <BookForm
                  updateBookName={this.updateBookName}
                  updateBooDescription={this.updateBooDescription}
                  updateBookStatus={this.updateBookStatus}
                  addBook={this.addBook}
                /><br/><br/>
              </>
              }
                 {this.state.showUpdatingForm &&
              <>
                <UptadeBookForm
                  updateBookName={this.updateBookName}
                  updateBooDescription={this.updateBooDescription}
                  updateBookStatus={this.updateBookStatus}
                  addBook={this.addBook}
                  bookName={this.state.bookName}
                  bookDescription={this.state.bookDescription}
                  bookStatus={this.state.bookStatus}
                  updateBooks={this.updateBooks}
                /><br/><br/>
              </>
              }
              <>
                <MyCarousel 
                showBooks={this.state.showBooks}
                books={this.state.books}
                showUpdateForm={this.showUpdateForm}
                deleteBook={this.deleteBook}
                />
              </>
          </Jumbotron>
        </>
      </>
    )
  }
}

export default withAuth0(MyFavoriteBooks);