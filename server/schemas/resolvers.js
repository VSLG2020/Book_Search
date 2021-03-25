const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
//const { saveBook } = require('../../client/src/utils/API');

const resolvers = {
  Query: {
    //me :user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    }
  },
    Mutation: {
     //login
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };
      },
      //addUser 
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      //saveBook
      saveBook: async(parent, args) => {
        if (context.user){
            const updatedUser = await User.findOneAndUpdate(
              { _id: context.user._id},
              { $addToSet: {savedBooks: input}},
              { new: true, runValidators: true}
            )
            return updatedUser;
        }
        throw new AuthenticationError('Log In Required');
      },
      //removeBook
      removeBook: async (parent, { bookId }, {user}) => {
        if (user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: user._id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true, runValidators: true }
          );
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
    }
    }
  };


module.exports = resolvers;

