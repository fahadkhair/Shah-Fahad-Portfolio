import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function About() {
  const [text, setText] = useState();
  const [showMessage, setShowMessage] = useState(false);
  const [showText, setShowText] = useState(false);

  const onTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="input mt-5 d-flex justify-content-center align-items-center flex-column">
      <input
        value={text}
        onChange={onTextChange}
        placeholder="Type Here"
        className="form-control form-control-lg mt-4"
        style={{ width: '300px' }}
      />

      <div className="d-flex justify-content-center align-items-center mt-4">
        <button className="btn btn-primary mr-3" onClick={() => setShowMessage(!showMessage)}>
          {showMessage ? 'Hide Message' : 'Show Message'}
        </button>

        <button className="btn btn-danger" onClick={() => setShowText(!showText)}>
          {showText ? 'Message Visible' : 'Message Not Visible'}
        </button>
      </div>

      {showMessage && (
        
        <h5 className="mt-4 text-success"> 
          {isNaN(text) ? 'It is Text' : 'It is Number'}
        </h5>
      )}

      <div className="mt-4">
      Preview: <h2 className="text-primary p-3 border rounded" style={{ width: '300px' }}>
          {text}
        </h2>
      </div>
    </div>
  );
}

export default About;