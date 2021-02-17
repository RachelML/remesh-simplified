
import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateConversation(props) {
    console.log(props.conversationForm)
    return (
      <div>
        <h2>Create a new conversation</h2>
        <form onSubmit={props.newConversation}>
          <p>Title:</p>
          <input
            type="text"
            name="title"
            value={props.conversationForm.title}
             onChange={props.handleFormChange} 
            />
          
            <p>Start Date:</p>
          <input/>
          <button>Submit</button>
        </form>
      </div >
    )
  }
  
  export default withRouter(CreateConversation);
  