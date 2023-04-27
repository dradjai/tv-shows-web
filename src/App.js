import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Home from './scenes/Home';
import Signup from './scenes/Signup';
import Login from './scenes/Login';
import AddShow from './scenes/AddShow';
import './styles/App.css';

function App() {

  const [shows, setShows] = useState();
  const [user, setUser] = useState();


  return (
   
   
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home shows={shows} setShows={setShows} />} />
          <Route path='/signup' element={<Signup setUser={setUser}/>} />
          <Route path='/login' element={<Login setUser={setUser}/>} />
          <Route path='/addshow' element={<AddShow setShows={setShows} />} />


       
        </Routes>
      </BrowserRouter>
    </>
  
    

  );
}

export default App;
