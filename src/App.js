import './App.css';
//import React from 'react';
import { useEffect } from "react";
import Pin from './Components/Pin';
import MySideNav from './Components/MySideNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Messages from './pages/Messages';
import User from './pages/User';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import './pages/Notifications.css'
import Settings from './pages/Settings';





function App() {
  useEffect(() => {
    const allIcon = document.querySelectorAll(".iconContainer");

    function setMenuActive() {
      allIcon.forEach((n) => n.classList.remove("black"));
      this.classList.add("black");
    }

    allIcon.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (   
    
    <div className="App">
    <Router>
      <MySideNav/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/Messages" element={<Messages/>} />
        <Route path="/Notifications" element={<Notifications/>} />
        <Route path="/Settings" element={<Settings/>} />          
        <Route path="/User" element={<User/>} />
      </Routes>
    </Router> 
      
      
      <img src="./Pinkture.jpg" width="24" height="24" 
      alt="Web Sitesi Logosu" />    

        {/* <div className="subMenu">
          <div>
            <MenuContainer icon={<Person />}/>
            <MenuContainer icon={<Notifications />}/>
            <MenuContainer icon={<Chat />}/>
          </div>
          <div>
            <MenuContainer icon={<FavoriteRounded />}/>
          </div>
          <div>
            <MenuContainer icon={<QuestionMark />}/>
            <MenuContainer icon={<Add />}/>
          </div>
        </div>   */}
      
      <main>
        <div className="searchBox">
          <input type="text" placeholder="Search" />
        </div>
        <div className='mainContainer'>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
          <Pin pinSize = {'small'}/>
          <Pin pinSize = {'medium'}/>
          <Pin pinSize = {'large'}/>
        </div>
      </main>

    </div>
  );
}


export default App;