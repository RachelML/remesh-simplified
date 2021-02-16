import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';


import CreateConversation from './components/CreateConversation'
import ViewConversation from './components/ViewConversation'



class App extends Component {


  render() {
    return (
      <div>
        <header>
          <h1>Remesh Simplified</h1>
        </header>
       <CreateConversation />
       <ViewConversation />
      </div>
    );
  }
}

export default withRouter(App);