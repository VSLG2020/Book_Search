// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type Query {
    me: User 
  }

 type User{
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
 },

 type Book{
     bookId: ID!
     authors: [String]
     description: String
     title: String
     image: String
     link: String
 },

 type Auth{
     token: ID!
     users: [User]
 },
 type BookInput{
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
 },
  type Mutation{
      login(email: String!, password: String!):Auth
      addUser(username: String!, email: String!, password: String!):Auth
      saveBook(input: String!): User
      removeBook(bookId: ID!):User
  },
`;

// export the typeDefs
module.exports = typeDefs;