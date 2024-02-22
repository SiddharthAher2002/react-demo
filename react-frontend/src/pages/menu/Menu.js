import React from "react";
import MenuList from "./MenuList";
import "./Menu.css"

const Menu = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <h4>Menu Page</h4>
            </div>
            <div className="row">
                <MenuList />
            </div>
        </div>

    );
};
export default Menu;