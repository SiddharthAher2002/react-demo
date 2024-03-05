import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Auth.css';
import axios from 'axios';
function Registration() {
    const [formInput, setFormInput] = useState({
        first_name: '',
        last_name: '',
        contact: '',
        email: '',
        password: ''
    })
    const handleSubmit = ((e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/api/v1/customer', formInput)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    })
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="login-block" style={{ backgroundColor: '#e9ebfb' }}>
                            <Link to="/">
                                <img src="https://marketplace.canva.com/EAEyrxfbXiY/6/0/1600w/canva-brown-vintage-coffee-shop-logo-h09r2PsrZno.jpg" style={{ width: '100px' }} alt="Scanfcode" />
                            </Link>
                            <form method="POST" action="">
                                <div className="container p-5">
                                    <h1>Create New Account</h1>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="first_name"
                                                        placeholder="First Name"
                                                        onChange={(e) => setFormInput({ ...formInput, first_name: e.target.value })}
                                                    />
                                                </div>
                                                <hr className="hr-xs" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="last_name"
                                                        placeholder="Last Name"
                                                        onChange={(e) => setFormInput({ ...formInput, last_name: e.target.value })}
                                                    />
                                                </div>
                                                <hr className="hr-xs" />
                                            </div>
                                        </div>
                                    </div>



                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="contact"
                                                        placeholder="Contact"
                                                        onChange={(e) => setFormInput({ ...formInput, contact: e.target.value })}
                                                    />
                                                </div>
                                                <hr className="hr-xs" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="email"
                                                        placeholder="Email"
                                                        onChange={e => setFormInput({ ...formInput, email: e.target.value })}
                                                    />
                                                </div>
                                                <hr className="hr-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        name="password"
                                                        placeholder="Enter password"
                                                        onChange={e => setFormInput({ ...formInput, password: e.target.value })}
                                                    />
                                                </div>
                                                <hr className="hr-xs" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <input
                                                        type="confirm_password"
                                                        className="form-control"
                                                        name="confirm_password"
                                                        placeholder="Confirm password" />
                                                </div>
                                                <hr className="hr-xs" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row justify-content-center'>
                                        <div className='col-4'>
                                            <button onClick={handleSubmit} className="btn btn-primary btn-block" type="submit">Register</button>
                                            <div className='mt-3'>
                                                <Link to="/login"><h6>Already have account</h6></Link>
                                            </div>
                                        </div>
                                    </div>
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