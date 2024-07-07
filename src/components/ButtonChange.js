import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { eventWrapper } from '@testing-library/user-event/dist/utils';

function ButtonChange() {
    const [message, setMessage] = useState(null);
    const [btn, setbtn] = useState(null);

    const btnChange = (event) => {
        setbtn(event.target.value)
    }

    const textChange = (event) => {
        setMessage(event.target.value);
    }


    return (
        <div className="container mt-4">
            <div className="form-group">
                <input
                    className="form-control"
                    value={message}
                    onChange={textChange}
                    placeholder="Enter a message"
                />
            </div>

            <div className='text-center'>
                <button className="btn btn-primary" onClick={() => setMessage(!message)}>
                    {message ? 'Hide Message' : 'Show Message'}
                </button>
            </div>

            {message && (
                <div className="alert alert-info mt-3">
                    {isNaN(message) ? 'It is a message ' : 'It is not a message'}
                </div>
            )}


            <div className="text-center mt-5">
                <button className='btn btn-primary' onClick={() => setbtn(!btn)}>
                    {btn ? 'Old Buttons' : 'New Button'}
                </button>
            </div>

            {btn && (
                <div className="alert alert-danger mt-3">
                    {(btn) ? 'It is old button' : 'It is new button'}
                </div>
            )}



        </div>
    )
}

export default ButtonChange;