import MenuList from "../../component/pages/menu/MenuList";
import "../../component/pages/menu/Menu.css"
function Menu() {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <h4>Menu Page</h4>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="row">
                            <MenuList/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Menu;