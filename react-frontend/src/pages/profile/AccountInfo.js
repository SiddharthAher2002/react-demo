import { useContext } from "react";
import { LoginContext } from "../../context/auth/LoginContext";

function AccountInfo() {
    const {user} = useContext(LoginContext);
    return (
        <div className="container">
            
            <div className="row m-2">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>Account Information</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>
                            <span>User name :</span><br />
                            <span>Email : {user.userEmail}</span><br />
                            <span>Contact :</span><br />
                            <span>DOB :</span><br />
                            <span>Twitter :</span><br />
                            <span>Facebook :</span><br />
                            <span>Linked In :</span><br />
                            <br />

                        </div>
                        <div className="card-footer d-flex">
                            <p className="mr-4">Edit</p>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>Password Setting</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>
                            <p>Current Password : </p>
                            <p>New Password : </p>
                            <p>Confirm Password : </p>
                        </div>
                        <div className="card-footer d-flex">
                            <p className="mr-4">Set</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row m-2">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>Account Setting</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>
                            <span>Two Factor Authentication :</span><br />
                            <span>Email : </span><br />
                            <span>Change User Name :</span><br />
                            <span>Logged In devices :</span><br />
                            <br />

                        </div>
                        <div className="card-footer d-flex">
                            <p className="mr-4">Help Desk</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default AccountInfo;