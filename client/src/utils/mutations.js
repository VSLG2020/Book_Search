//import gql 
import gql from 'graphql-tag';


// need to create the mutations for 

// login_user that will execute the loginUser 

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;



// add_user thta will execute the addUser


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username:$username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;


// Save_Book that will execute the saveBook 

export const SAVE_BOOK = gql`
  mutation saveBook ($input: bookInput) {
    saveBook(input: $input){
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
  }
`;



// Remove_Book thta will execute the removeBook

export const REMOVE_BOOK = gql`
  mutation removeBook ($bookId: String!) {
   removeBook(bookId: $bookId){
        _id
        username
        email
        bookCount
        savedBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
  }
`;