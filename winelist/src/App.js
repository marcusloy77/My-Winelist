import './App.css';
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import Home from './components/Home'
import Login from './components/Login'
import MyWines from './components/MyWines'
import Search from './components/Search'
import AddWine from './components/AddWine'



//components needed - 
//search bar for wines/users,
//add new wine button
//current winelist displayed
//when adding new wine, have bars to indicate how good wine is at certain things
//ie. sweet->bitter, full bodied to light etc



function App() {

  const [loginState, setLoginState] = useState('Login/Register')
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({name: null, id: null})

  return (
    <div className="App">
      <div className='nav'>
        <div className='homeBtn navBtn'><Link to='/'><span className='nav-word'> Home</span></Link></div>
        <div className='myWinesBtn navBtn'><Link to='/mywines'><span className='nav-word'> My Wines</span></Link></div>
        <div className='searchWinesBtn navBtn'><Link to='/search'><span className='nav-word'> Search</span></Link></div>
        <div className='addWineBtn navBtn'><Link to='/addwine'><span className='nav-word'> Add Wine</span></Link></div>
        <div className='loginBtn navBtn'><Link to='/login'><span className='nav-word'> Login</span></Link></div>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mywines' element={<MyWines/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addwine' element={<AddWine/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
