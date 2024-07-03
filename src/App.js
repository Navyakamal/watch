import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Movies from './pages/Movies';
import Search from './pages/Search';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Allmovies from './pages/Allmovies';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route path='/' element={<Landing></Landing>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/authentication' element={<Auth></Auth>}></Route>
          <Route path='/register' element={<Auth register></Auth>}></Route>
          <Route path='/movies' element={<Movies></Movies>}></Route>
          <Route path='/search' element={<Search></Search>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<Login register></Login>}></Route>
          <Route path='/admin' element={<Admin></Admin>}></Route>
          <Route path='/allmovies' element={<Allmovies></Allmovies>}></Route>

    </Routes>
    </div>
  );
}

export default App;
