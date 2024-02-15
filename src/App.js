import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/frontend/layouts/Layout";
import AuthLayout from './pages/auth/layouts/AuthLayout';
import Login from "./pages/auth/Login";
import Registration from './pages/auth/Registration';
import Home from "./pages/frontend/Home";
import Menu from "./pages/frontend/Menu";
import Posts from './pages/frontend/Posts';
import About from './pages/frontend/About';
import User from './pages/frontend/User';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="posts" element={<Posts />} />
          <Route path='about' element={<About />} />
        </Route>

        <Route path="/" element={<AuthLayout/>}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="profile" element={<User/>}/>
        </Route>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
