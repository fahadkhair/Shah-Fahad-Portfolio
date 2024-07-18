import React, { useState, useEffect } from 'react';

function TodoInput() {
    const [text, setText] = useState("");
    const [axis, setAxis] = useState({ x: "", y: "" });

    useEffect(() => {

        const callBack = (event) => {
            setAxis({ x: event.x, y: event.y });
            console.log(event.x, event.y);
        };
        document.addEventListener("click", callBack);

        return () => {
            console.log("UNMOUNT");
            document.removeEventListener("click", callBack);
        }
    }, []);

    return (
        <div className='container mt-5'>
            <h3>Child Component</h3>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder='Enter Todo'
                className='form-control'
            />
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">Axis Coordinates</h5>
                    <pre className="card-text">
                        {JSON.stringify(axis, null, 2)}
                    </pre>
                </div>
            </div>
        </div>
    );
}

export default TodoInput;
