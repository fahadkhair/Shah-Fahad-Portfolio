import React, { useImperativeHandle, useState } from 'react';
import './App.css';
import List from './components/List';
import Navbar from './components/Navbar';
import About from './components/About';
import Text from './components/Text';
import ButtonChange from './components/ButtonChange';
// import DarkModeToggle from '/DarkModeToggle';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";

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
    setData(data.filter((item, i) => i !== index));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        <Route path="/text" element={<Text />} />
        <Route path="/ButtonChange" element={<ButtonChange />} />
        {/* <DarkModeToggle /> */}
      </Routes>
    </Router>
  );
}

export default App;
