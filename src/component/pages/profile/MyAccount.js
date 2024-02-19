import { useContext } from "react";
import { LoginContext } from "../../../context/auth/LoginContext";

function MyAccount() {
    const { user } = useContext(LoginContext);
    return (
        <div className="container">
            <div className="row m-2">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>User Details</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>
                            <span>User name : {user.name}</span><br />
                            <span>Email : {user.email}</span><br />
                            <span>Contact : {user.phone}</span><br />
                            <br />

                        </div>
                        <div className="card-footer d-flex">
                            <p className="mr-4">Edit</p>
                            <p>Change Password</p>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>News Letter Information</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>
                            <p>Not subscibed to any newsletter</p>
                        </div>
                        <div className="card-footer d-flex">
                            <p className="mr-4">Edit</p>
                            <p>Subscribe</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="row m-2 mt-3">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>Address Information</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>

                            { user.address &&
                                <>
                                    <span>Location : {user.address.street}</span><br />
                                    <span>City : {user.address.city} </span><br />
                                    <span>State :  </span><br />
                                    <span>Country :  </span><br />
                                    <span>Pin : {user.address.zipcode} </span><br />

                                </>
                            }

                        </div>
                        <div className="card-footer d-flex">
                            <p className="mr-4">Edit</p>
                            <p>Add new address</p>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>Order Information</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>
                            <p>Order Info</p>
                        </div>
                        <div className="card-footer d-flex">
                            <p className="mr-4">Edit</p>
                            <p>Shop</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default MyAccount;