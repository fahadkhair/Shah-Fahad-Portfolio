import List from './components/ToDoList/List';
import Text from './components/Text';
import ButtonChange from './components/ButtonChange/ButtonChange';
import DataFetcher from './components/DataFetcher';
import ClickComponent from './components/useeffectcomponets/ClickComponent';
import About from './components/About/About';
import UseEffect from './components/useeffectcomponets/UseEffect';
import LoginSignup from './components/LoginSignUp/LoginSignup';
import Contact from './components/Contact/Contact';
import Home from './components/HomePage/Home';
import ToDoContext from './components/ToDoContext/ToDoContext';


export const routes = [
  { path: '/list', element: <List /> },
  { path: '/text', element: <Text /> },
  { path: '/buttonchange', element: <ButtonChange /> },
  { path: '/datafetcher', element: <DataFetcher /> },
  { path: '/clickcomponent', element: <ClickComponent /> },
  { path: '/about', element: <About /> },
  { path: '/useeffect', element: <UseEffect /> },
  { path: '/login', element: <LoginSignup /> },
  { path: '/contact', element: <Contact /> },
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  { path: '/todo', element: <ToDoContext /> },
];