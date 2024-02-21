import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import ProfileSidebar from "../../component/pages/profile/ProfileSidebar";
import { useEffect,useState } from "react";
function Profile() {

    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    const [loginStatus,setStatus] = useState(isLoggedIn);
    const navigate = useNavigate();

    useEffect(()=>{
        localStorage.setItem('isLoggedIn',loginStatus);
        if(!loginStatus){
            navigate('/login');
            localStorage.removeItem('user');
        }
    },[loginStatus])
   const handleLogout = ()=>{
        setStatus(false);
   }
    return (
        <>            
            <Header />
            <div className="container-fluid" style={{ minHeight: "300px" }}>
                <div className="row justify-content-center p-2" style={{ backgroundColor: "#e6f1fb" }}>
                    <div className="col-5">

                    </div>
                    <div className="col-5">
                        <h5>My Account</h5>
                    </div>
                    <div className="col-2 d-flex justify-content-end">
                        <button onClick={handleLogout} className="btn btn-outline-info">Log-out</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2" style={{ backgroundColor: "#f4f8fc" }}>
                        <ProfileSidebar />
                    </div>
                    <div className="col-10">
                            <Outlet />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
}

export default Profile;