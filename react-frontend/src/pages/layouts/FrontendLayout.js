import { Outlet } from "react-router-dom";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
const FrontendLayout = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default FrontendLayout;