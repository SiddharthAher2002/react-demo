import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import './Auth.css';
import { LoginContext } from "../../context/auth/LoginContext";

function Login() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v1/login', credentials)
            .then((res) => {
                const userData = res.data;
                if (userData.status=='401') {
                    setError(userData.error);
                } else if(userData.status=='200') {
                    localStorage.setItem('user', JSON.stringify(userData.data));
                    localStorage.setItem('isLoggedIn', true);
                    setError('');
                    navigate("/profile/account");
                }else{
                    setError(userData.error);
                }
            })
            .catch((error) => {
                if(error){
                    setError('Something went wrong! please try again later');
                }
            });
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-block">
                            <Link to="/">
                                <img src="https://marketplace.canva.com/EAEyrxfbXiY/6/0/1600w/canva-brown-vintage-coffee-shop-logo-h09r2PsrZno.jpg" style={{ width: '100px' }} alt="Scanfcode" />
                            </Link>
                            <h1>Login to your account</h1>

                            <form method="" action="">
                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-envelope ti-email"></i></span>
                                        <input type="text" className="form-control" name="email" placeholder="Enter email"
                                            value={credentials.email}
                                            onChange={(e) => {
                                                setCredentials({
                                                    ...credentials,
                                                    email: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                <hr className="hr-xs" />

                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock ti-unlock"></i></span>
                                        <input type="password" className="form-control" name="password" placeholder="Enter password"
                                            value={credentials.password}
                                            onChange={(e) => {
                                                setCredentials({
                                                    ...credentials,
                                                    password: e.target.value
                                                })
                                            }}
                                        />
                                    </div>
                                </div>

                                <button
                                    className="btn btn-primary btn-block"
                                    type="submit"
                                    onClick={handleSubmit}
                                >Sign in</button>

                                <div className="form-group d-flex justify-content-between">
                                    <a href="#"><h6>Forget Password</h6></a>
                                    <Link to="/register"><h6>Resgister</h6></Link>
                                </div>
                                <span className="text-danger">{error}</span>
                                <div className="login-footer">
                                    <h6>Login with following options</h6>
                                    <ul className="social-icons">
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                    </ul>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;