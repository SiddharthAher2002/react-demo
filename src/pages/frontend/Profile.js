import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";
import ProfileSidebar from "../../component/pages/profile/ProfileSidebar";
import { useContext, useEffect } from "react";
import { LoginContext } from "../../context/auth/LoginContext";
function Profile() {
    const {isLoggedIn} = useContext(LoginContext);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!isLoggedIn){
            navigate('/login');
        }
    },[])
    return (
        <>            
            <Header />
            <div className="container-fluid" style={{ minHeight: "300px" }}>
                <div className="row justify-content-center p-2" style={{ backgroundColor: "#e6f1fb" }}>
                    <div className="col-4">
                        <h5>My Account</h5>
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