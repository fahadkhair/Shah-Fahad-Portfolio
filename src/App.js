import React, { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [editing, setEditing] = useState(null);

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const onAdd = () => {
    setData([...data, text]);
    setText('');
  };

  const onEdit = (index) => {
    setEditing(index);
  };

  const onDelete = (index) => {
    setData(data.filter((item, i) => i!== index));
  };

  return (
    <div className="App">
      <main>
        <List data={data} onEdit={onEdit} onDelete={onDelete} />
      </main>
    </div>
  );
}

export default App;