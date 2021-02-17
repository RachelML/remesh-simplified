import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';


import CreateConversation from './components/CreateConversation'
import ViewConversation from './components/ViewConversation'
import ConversationPage from './components/ConversationPage'



import {
  createConversation,
  readAllConversations
 
} from './services/api-helper'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      conversationForm: {
        title: ""

        
      },
      
    };
  }
  
  async componentDidMount() {
    this.getConversations()
  }


  getConversations = async () => {
    const conversations = await readAllConversations();
    this.setState({
      conversations
    })
  }


  newConversation = async (e) => {
    e.preventDefault();
    const conversation = await createConversation(this.state.conversationForm);
    this.setState(prevState => ({
      conversations: [...prevState.conversations, conversation],
      conversationForm: {
        title: ""
      }
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      conversationForm: {
        ...prevState.conversationForm,
        [name]: value
      }
    }))
  }



  render() {
    return (
      <div>
        <header>
          <h1>Remesh Simplified</h1>
        </header>
        <Route
          path="/new/conversation"
          render={() => (
            <CreateConversation
              handleFormChange={this.handleFormChange}
              conversationForm={this.state.conversationForm}
              newConversation={this.newConversation} />
          )} />
       <Route
          exact path="/"
          render={() => (
            <ViewConversation
              conversations={this.state.conversations}
              conversationForm={this.state.conversationForm}
              newConversation={this.newConversation} />
          )}
        />

          <Route
          path="/conversations/:id"
          render={(props) => {
            const { id } = props.match.params;
            const conversation = this.state.conversations.find(el => el.id === parseInt(id));
            return <ConversationPage
              id={id}
              conversation={conversation}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              conversationForm={this.state.conversationForm}
               />
          }}
        />


      </div>
    );
  }
}

export default withRouter(App);