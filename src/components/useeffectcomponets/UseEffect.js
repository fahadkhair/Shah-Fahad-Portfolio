import {useState, useEffect }from 'react';

function UseEffect() {
    const [parentText, setParentText] = useState ("");

    return (
        <div className='App mt-4'>
            <h3>Parent Component</h3>
            <input
            value={parentText}
            onChange={(e) => setParentText(e.target.value)}
            placeholder='ToDo'
            />

            <hr />


        </div>
    );
}

export default UseEffect;
