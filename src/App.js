// import React, { useImperativeHandle, useState } from 'react';
// import './App.css';
// import List from './components/List';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Text from './components/Text';
// import ButtonChange from './components/ButtonChange';
// import ClickComponent from './components/useeffectcomponets/ClickComponent';
// import UseEffect from './components/useeffectcomponets/UseEffect';
// import Contact from './components/Contact/Contact';
// import Home from './components/HomePage/Home';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
// import DataFetcher from './components/DataFetcher';
// import LoginSignup from './components/LoginSignUp/LoginSignup';

// function App() {
//   const [data, setData] = useState([]);
//   const [text, setText] = useState('');
//   const [editing, setEditing] = useState(null);

//   const onChangeHandler = (event) => {
//     setText(event.target.value);
//   };

//   const onAdd = () => {
//     setData([...data, text]);
//     setText('');
//   };

//   const onEdit = (index) => {
//     setEditing(index);
//   };

//   const onDelete = (index) => {
//     setData(data.filter((item, i) => i !== index));
//   };

//   return (

//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/list" element={<List />} />
//         <Route path="/text" element={<Text />} />
//         <Route path="/ButtonChange" element={<ButtonChange />} />
//         <Route path='/DataFetcher' element={<DataFetcher />} />
//         <Route path='/ClickComponent' element={<ClickComponent />} /> 
//         <Route path="/about" element={<About />} />
//         <Route path='/useEffect' element={<UseEffect />} />
//         <Route path='/components/LoginSignUp/LoginSignup' element={<LoginSignup />} />
//         <Route path='/components/Contact/Contact' element={<Contact />} />
//         <Route path='/components/HomePage/Home' element={<Home />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import Home from './components/HomePage/Home'

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
      <div>
      <Home />
      </div>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;