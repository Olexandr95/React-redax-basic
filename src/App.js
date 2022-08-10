import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Galery from './Components/Galery/galery';
import Contacts from './Components/Contacts/Contacts/Contacts';
import Header from './Components/Header/header';
import Posts from './Components/Post/post';
import Main from './Components/Main/main';
import { store } from './redax/store';
import {useSelector} from 'react-redux'
function App() {
 

  return (
    <div className="App">
      <Router>
        <Route path='/' component={Header}/>
        <Route path='/'  exact  component={Main}/>
        <Route path='/galery' component={Galery}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/contacts/' exact component={Contacts}/>
      </Router>
    </div>
  );
}

export default App;
