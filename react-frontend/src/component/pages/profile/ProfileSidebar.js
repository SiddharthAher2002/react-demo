import './Profile.css';
import { NavLink,Link } from 'react-router-dom';
function ProfileSidebar() {
    return (

        <div>
            <ul className="menu-list mt-3">
                <li><NavLink className={'siderbar-link'} to="/profile/account" >My Account</NavLink></li>
                <li><NavLink className={'siderbar-link'} to="/profile/details" >Account Information</NavLink></li>
                <li><NavLink className={'siderbar-link'} to="/profile/order" >My Order</NavLink></li>
                <li><NavLink className={'siderbar-link'} to="/profile/address" >Address Book</NavLink></li>
                <li><NavLink className={'siderbar-link'} to="/profile/reviews" >My Reviews</NavLink></li>
                <li><NavLink className={'siderbar-link'} to="/profile/payments" >My Payaments</NavLink></li>
                <li><NavLink className={'siderbar-link'} to="/profile/subscription" >My Subscriptions</NavLink></li>
            </ul>
        </div>

    );
}
export default ProfileSidebar;