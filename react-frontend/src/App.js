import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from './pages/auth/layouts/AuthLayout';
import Login from "./pages/auth/Login";
import Registration from './pages/auth/Registration';

import Layout from "./pages/frontend/layouts/Layout";
import Home from "./pages/frontend/Home";
import Menu from "./pages/frontend/Menu";
import Posts from './pages/frontend/Posts';
import About from './pages/frontend/About';
import Services from './pages/frontend/Services';
import Comments from './component/pages/services/Comments';

import Profile from './pages/frontend/Profile';
import MyAccount from './component/pages/profile/MyAccount';
import AccountInfo from './component/pages/profile/AccountInfo';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="posts" element={<Posts />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services/>}>
            <Route path='comments' element={<Comments/>}/>
          </Route>
        </Route>


        {/* Auth layout with Login Context Provider. /login will set the email and 
            /profile routes will have access for ii */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />

          <Route path="/profile" element={<Profile />}>
            <Route path="account" element={<MyAccount />} />
            <Route path="details" element={<AccountInfo />} />
          </Route>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
