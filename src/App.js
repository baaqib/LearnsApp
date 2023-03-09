import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Link, Route, Router, Routes } from 'react-router-dom';
import Institute from './Components/Institute';
import Topic from './Components/Topic';

function App() {
  return (
    <>
      <h1>LearnsApp </h1>
      <BrowserRouter>
        <ul>
          <li><Link to="/institute">Institute</Link></li>
          <li><Link to="/topic">Topic</Link></li>
        </ul>
        <Routes>
          <Route path='/institute' element={< Institute />} />
          <Route path='/topic' element={< Topic />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
