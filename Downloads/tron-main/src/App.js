/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import RegristrationFom from './components/Registration';
import Dashboard from './components/Home';
import { useEffect, useState } from 'react';
import Referral from './components/Team/Referral';
import Team from './components/Team/Team';
import Matrix from './components/Matrix';
import queryString from 'query-string';


import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setLoggedIn(false)
      }
    }
  }
  useEffect(() => {
    let user = document.cookie;
    console.log(user)
    if (!user) setLoggedIn(true)
    if (user) setLoggedIn(false)
  }, [])
  const location = useLocation();
  const queryParams = queryString.parse(location.search);

  return (
     <Routes>

    <Route path="/home" element={ <Dashboard />} />
    <Route path="/myreferral" element={<Referral />} />
    <Route path="/myteam" element={<Team />} />
    <Route path="/matrix" element={<Matrix matrix={queryParams.matrix}/>} />
    <Route path="/" element={ <RegristrationFom />}/>
    
      </Routes>
  );
}

export default App;
