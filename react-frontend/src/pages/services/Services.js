import { NavLink, Outlet } from "react-router-dom";
import './Services.css';
const Services = () => {
    return (
        <div className="container-fluid" style={{ minHeight: "300px" }}>
            <div className="row p-3">
                <div className="col-5">
                    <h4 style={{ color: "#4c8eff" }}>Our Services</h4>
                    <p style={{ color: "#504d4d" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s</p>
                </div>
            </div>
            <div className="row services" style={{backgroundColor:"#e6f1fb"}}>
                <div className="col-12 d-flex">
                    <NavLink className="nav-link" to="/services/seo">Seo</NavLink>
                    <NavLink className="nav-link" to="/services/products">Products</NavLink>
                    <NavLink className="nav-link" to="/services/features">Features</NavLink>
                    <NavLink className="nav-link" to="/services/new">New</NavLink>
                    <NavLink className="nav-link" to="/services/comments">Comments</NavLink>
                </div>
            </div>
            <div className="row">
                <Outlet/>
            </div>
        </div>
    );
}
export default Services;