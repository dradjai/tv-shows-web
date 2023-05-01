import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './scenes/Home';
import Signup from './scenes/Signup';
import Login from './scenes/Login';
import AddShow from './scenes/AddShow';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import './styles/App.css';
import Header from './scenes/Header';

function App() {

  const [shows, setShows] = useState();
  const [user, setUser] = useState();
  const [login, setLogin] = useState();



  return (
    <>
   
    <main>
      <BrowserRouter>
     
        <Routes>
          <Route path='/' element={<Home shows={shows} setShows={setShows} />} />
          <Route path='/signup' element={<Signup setUser={setUser}/>} />
          <Route path='/login' element={<Login setUser={setUser}/>} />
          <Route path='/addshow' element={<AddShow setShows={setShows} />} />


       
        </Routes>
      </BrowserRouter>

      </main>

    </>
  
    

  );
}

export default App;
