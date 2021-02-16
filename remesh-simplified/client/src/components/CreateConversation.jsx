
import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateConversation(props) {
    return (
      <div>
        <h2>Create a new conversation</h2>
        <form onSubmit={props.newTeacher}>
          <p>Title:</p>
          <input/>
            <p>Start Date:</p>
          <input/>
          <button>Submit</button>
        </form>
      </div >
    )
  }
  
  export default withRouter(CreateConversation);
  