import React, { useEffect } from "react";
import { useState } from "react";

function MyAccount() {

    const [userData,setUserData] = useState({});
    
    const userLocalData= JSON.parse(localStorage.getItem('user'));

    useEffect(()=>{
        
        if(userLocalData!=null){
            setUserData(userLocalData);
            
        }
    },[])
    
    return (
        <div className="container">
            <div className="row m-2">
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h6>User Details</h6>
                        </div>
                        <div className="card-body" style={{ minHeight: '170px' }}>
                            <span>First name : {userData.first_name}</span><br />
                            <span>Last name : {userData.last_name}</span><br />
                            <span>Email : {userData.email}</span><br />
                            <span>Contact : {userData.contact}</span><br />
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