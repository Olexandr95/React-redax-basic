import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import News from './Components/News/news';
import Main from "./Components/Main/main";
import Posts from "./Components/Post/post";
import Users from './Components/Users/users';
import Galery from "./Components/Galery/galery";
import NewsEdit from "./Components/News/addNewNews/NewEdit";
import Contacts from "./Components/Contacts/Contacts/Contacts";
import { SignIn } from "./Components/Header/auth/signIn/signIn";
import { SignUp } from "./Components/Header/auth/signUp/signUp";


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {/*<Route element={<Header />} />*/}
          <Route path="/"  element={<Main />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsEdit />} />
          <Route path="/contacts/" element={<Contacts />} />
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
