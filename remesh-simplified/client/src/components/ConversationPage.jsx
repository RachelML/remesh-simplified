import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class ConversationPage extends Component {
    constructor(props) {
        console.log(props)
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

          <h2>A list of messages:</h2>
          {/* {this.props.messages.map(message => (
                 <div
                    key={message.id}
                    onClick={(e) => {
                    props.history.push(`/messages/${message.id}`);
                    }}>
                    <h3>
                    <p>{message.title}</p>
                    </h3>
                   </div>
                ))} */}

          
          
           
      </div>)
  }
}

export default withRouter(ConversationPage);

