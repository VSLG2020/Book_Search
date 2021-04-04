import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks{
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

//wrapped the entire query code in a tagged template literal using the imported gql function. 
//We've also saved it as QUERY_THOUGHTS and exported it using the ES6 module export syntax.
//And just like that, we can import this query function by name and use it anywhere we need throughout the front end of the application.