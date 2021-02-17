import React from 'react';
import { withRouter } from 'react-router';

function ViewConversation(props) {
    console.log(props.conversations)

    return (
        
      <div>
           {/* {props.conversations.map(conversation => (
          <div
            key={conversation.id}
            onClick={(e) => {
              debugger;
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
          }}>
          <img
            alt="Create a new teacher"
            src="https://image.flaticon.com/icons/png/512/14/14980.png"
            className="plus-sign" />
          <h3>Create a new Conversation</h3>
        </div> 
           */}
       
      </div>
    )
  }
  

export default withRouter(ViewConversation)