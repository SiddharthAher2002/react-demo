import {Link} from "react-router-dom";
import './Auth.css';

function Login() {
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
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Enter email" />
                                    </div>
                                </div>

                                <hr className="hr-xs" />

                                <div className="form-group">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock ti-unlock"></i></span>
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" />
                                    </div>
                                </div>

                                <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                                <div className="form-group d-flex justify-content-between">
                                    <a href="#"><h6>Forget Password</h6></a>
                                    <Link to="/register"><h6>Resgister</h6></Link>
                                </div>
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