import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Galery from "./Components/Galery/galery";
import Contacts from "./Components/Contacts/Contacts/Contacts";
import Header from "./Components/Header/header";
import Posts from "./Components/Post/post";
import Main from "./Components/Main/main";
import { SignIn } from "./Components/Header/auth/signIn/signIn";
import { SignUp } from "./Components/Header/auth/signUp/signUp";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route index element={<Main />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contacts/" element={<Contacts />} />
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
