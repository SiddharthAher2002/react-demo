import { Outlet } from "react-router-dom";
import LoginContextProvider from "../../context/auth/LoginContext";
function AuthLayout() {
    return (
        <>
            <LoginContextProvider>
                <Outlet />
            </LoginContextProvider>
        </>
    );
}

export default AuthLayout;