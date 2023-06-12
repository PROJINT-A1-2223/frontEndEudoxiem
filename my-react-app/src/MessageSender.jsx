import React, { useState } from 'react';
export default MessageSender;
function MessageSender(){
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message:', message);
  const requestBody = {
    message: message
  };
  fetch('http:localhost:8080/logMyMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then((response) => response.json())
      .then((data) => {
        // Handle the response data here if needed
      })
      .catch((error) => {
        // Handle any errors here
      });
    };        
  return( 
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="message">Message:</label>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </p>
      <p>
      <button type="submit">Submit</button>
      </p>
    </form>
  );
  
}

