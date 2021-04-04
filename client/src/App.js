import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

//import apollo to make every request work with the Apollo server.
import { ApolloProvider} from '@apollo/react-hooks';

import ApolloClient from 'apollo-boost';



const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${ token}` : ''
      }
    });
  },
  // establish a new connection to the GraphQL server using Apollo.
  uri: 'http://localhost:3001/graphql'
});



function App() {
  return (
    //add Apollo tag here before router tag to pass the client variable 
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
