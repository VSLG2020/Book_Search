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

// Save_Book that will execute the saveBook 

// Remove_Book thta will execute the removeBook

