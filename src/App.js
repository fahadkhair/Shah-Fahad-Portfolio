
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';

function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [editing, setEditing] = useState(null);

  // const onChangeHandler = (event) => {
  //   setText(event.target.value);
  // };

  // const onAdd = () => {
  //   setData([...data, text]);
  //   setText('');
  // };

  // const onEdit = (index) => {
  //   setEditing(index);
  // };

  // const onDelete = (index) => {
  //   setData(data.filter((item, i) => i !== index));
  // };

  return (
    <div>
      <Router>
      <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;