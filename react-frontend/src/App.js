import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from './pages/layouts/AuthLayout';
import authComponents from "./pages/auth/";

import FrontendLayout from './pages/layouts/FrontendLayout';
import Menu from './pages/menu/';
import Home from './pages/home/';
import About from './pages/about/';
import serviceComponents from './pages/services/';
import Posts from './pages/posts/';
import profileComponents from './pages/profile/';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="posts" element={<Posts />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<serviceComponents.Services />}>
            <Route path='comments' element={<serviceComponents.Comments />}/>
          </Route>
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<authComponents.Login />} />
          <Route path="register" element={<authComponents.Registration />} />

          <Route path="/profile" element={<profileComponents.Profile />}>
            <Route path="account" element={<profileComponents.MyAccount />} />
            <Route path="details" element={<profileComponents.AccountInfo />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
