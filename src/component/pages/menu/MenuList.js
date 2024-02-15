import { useState, useEffect } from "react";
import axios from "axios";

function MenuList() {
    const [menu, setMenu] = useState([]);
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
            })
            .catch((error) => {
                console.log(error);
            });
    }, [searchId]);
    return (
        <>
            <div className="col-12 d-flex mb-2">
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
            {
                searchId === '' ?
                    Array.isArray(menu) &&
                    menu.map((item) =>
                        <div key={item.id} className="col-3 mb-4">
                            <div className="menu card">
                                <div className="card-body d-flex justify-content-center">
                                    <img className="coffe-images" src={item.image} />
                                </div>
                                <div className="card-footer">
                                    <h6>{item.title}</h6>
                                    <span>{item.description}</span>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    <div key={menu.id} className="col-3 mb-4">
                        <div className="menu card">
                            <div className="card-body d-flex justify-content-center">
                                <img className="coffe-images" src={menu.image} />
                            </div>
                            <div className="card-footer">
                                <h6>{menu.title}</h6>
                                <span>{menu.description}</span>
                            </div>
                        </div>
                    </div>
            }
        </>
    );

}
export default MenuList;