import React, { useState } from 'react';
import '../ButtonChange/ButtonChange.css'; // Import the CSS file for custom styles

function ButtonChange() {
    const [message, setMessage] = useState('');
    const [btn, setBtn] = useState(false);

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const toggleMessage = () => {
        setMessage(prevMessage => prevMessage ? '' : 'This is a message');
    };

    const toggleButtonType = () => {
        setBtn(prevBtn => !prevBtn);
    };

    return (
        <div className="button-change-container">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={message}
                    onChange={handleInputChange}
                    placeholder="Enter a message"
                />
            </div>

            <div className="text-center mt-4">
                <button
                    className="btn-toggle"
                    onClick={toggleMessage}
                >
                    {message ? 'Hide Message' : 'Show Message'}
                </button>
            </div>

            {message && (
                <div className="alert alert-info mt-3">
                    {isNaN(message) ? 'It is a message' : 'It is not a message'}
                </div>
            )}

            <div className="text-center mt-5">
                <button
                    className="btn btn-toggle"
                    onClick={toggleButtonType}
                >
                    {btn ? 'Old Button' : 'New Button'}
                </button>
            </div>

            {btn && (
                <div className="alert alert-danger mt-3">
                    {btn ? 'It is old button' : 'It is new button'}
                </div>
            )}
        </div>
    );
}

export default ButtonChange;
