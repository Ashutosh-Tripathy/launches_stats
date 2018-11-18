import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Launches from './components/Launches';
import Launch from './components/Launch';
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <h1>SpaceX</h1>
          <Route exact path="/" component={Launches} />
          <Route exact path="/launch/:id" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
