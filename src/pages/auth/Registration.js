import {Link} from 'react-router-dom';
import './Auth.css';
function Registration() {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="login-block" style={{backgroundColor:'#e9ebfb'}}>
                            <Link to="/">
                                <img src="https://marketplace.canva.com/EAEyrxfbXiY/6/0/1600w/canva-brown-vintage-coffee-shop-logo-h09r2PsrZno.jpg" style={{ width: '100px' }} alt="Scanfcode" />
                            </Link>
                            <h1>Register to chase cafffe</h1>

                            <form method="" action="">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="first_name" name="first_name" placeholder="First Name" />
                                    </div>
                                </div>

                                <hr className="hr-xs" />

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="last_name" name="last_name" placeholder="Last Name" />
                                    </div>
                                </div>

                                <hr className="hr-xs" />

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="contact" name="contact" placeholder="Contact" />
                                    </div>
                                </div>

                                <hr className="hr-xs" />

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="text" className="form-control" id="email" name="email" placeholder="Email" />
                                    </div>
                                </div>

                                <hr className="hr-xs" />

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="input-group">
                                        <input type="confirm_password" className="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm password" />
                                    </div>
                                </div>


                                <button className="btn btn-primary btn-block" type="submit">Submit</button>
                                <div className="form-group d-flex">
                                    <Link to="/login"><h6>Already have account</h6></Link>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Registration;