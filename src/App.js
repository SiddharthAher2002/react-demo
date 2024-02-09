import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/frontend/layouts/Layout";
import Login from "./pages/auth/Login";
import Registration from './pages/auth/Registration';
import Home from "./pages/frontend/Home";
import Menu from "./pages/frontend/Menu";
import Posts from './pages/frontend/Posts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="posts" element={<Posts />}/>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
