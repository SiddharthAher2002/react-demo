import { useState, useEffect } from "react";
import axios from "axios";
import MenuCard from "./MenuCard";

const MenuList = () => {

    const [menu, setMenu] = useState([]);
    const [error, setError] = useState('');
    const [id, setId] = useState('');
    const [searchId, setSearchId] = useState('');

    const handleButton = () => {
        setSearchId(id);
    }

    const handleClearFilter = () => {
        setSearchId('');
        setId('');
    }

    useEffect(() => {
        axios.get(`https://api.sampleapis.com/coffee/hot/${searchId}`)
            .then((res) => {
                setMenu(res.data);
                setError('');
            })
            .catch((error) => {
                setError("Something went wrong please try again later!")
            });
    }, [searchId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p style={{ fontSize: "17px" }} className="">Get your coffe now!</p>
                </div>
                <div className="col-6 d-flex justify-content-end">
                    <div>
                        {searchId != '' && <button className="btn btn-outline-info mr-2" onClick={handleClearFilter} style={{ fontSize: '12px' }}> Clear {searchId}</button>}
                        <input className="align-middle" id="search-btn" value={id} onChange={e => setId(e.target.value)} />
                        <button className="btn btn-outline-dark ml-1" onClick={handleButton} style={{ fontSize: '12px' }}>Search</button>
                    </div>
                </div>
            </div>
            <div className=" row">
                {
                    searchId === '' ?
                        Array.isArray(menu) && menu.map(item => <MenuCard key={item.id} item={item} />)
                        :
                        <MenuCard key={menu.id} item={menu} />
                }
            </div>
            <div className="row justify-content-center text-danger">
                {error}
            </div>
        </div>
    );

}
export default MenuList;