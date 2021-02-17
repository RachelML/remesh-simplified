import React from 'react';
import { withRouter } from 'react-router';

function ViewConversation(props) {
    console.log(props.conversations)

    return (
        
      <div>
          <h2>A list of conversations:</h2>
           {props.conversations.map(conversation => (
          <div
            key={conversation.id}
            onClick={(e) => {
              props.history.push(`/conversations/${conversation.id}`);
            }}>
            <h3>
              <p>{conversation.title}</p>
            </h3>
          </div>
        ))}
      

        <div
        onClick={() => {
          props.history.push('/new/conversation');
          window.scrollTo(0, 0);
        }}>
    
        <button>Create a new conversation</button>
      </div>
          
       
      </div>
    )
  }
  

export default withRouter(ViewConversation)