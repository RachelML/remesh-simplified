import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class ConversationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
      }


  render() {
     
    const { conversation } = this.props;
    return (
      <div>
        {conversation === undefined ? <h2>Loading . . .</h2> : (
          <div>
              <div>{conversation.title}</div>
              <button>create message</button>
            
             
          </div>)}
      </div>)
  }
}

export default withRouter(ConversationPage);