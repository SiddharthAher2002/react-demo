import axios from "axios";
import { useEffect, useState } from "react";
function Axios() {

    const [data, setData] = useState({});

    // const handleFetch = () => {
    //     console.log("one")
    //     const data = axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    //     console.log("three")
    // }


    const handleFetch = async () => {
        console.log("one")
        try {
            const data = await axios.get('https://jsonpleholder.typicode.com/users');
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        console.log("three");
    }
    return (
        <div className="container">
            <div className="row">
                {Array.isArray(data) && data.map((record) => {
                    return (
                        <div key={record.id}>
                            <p>{record.name}</p>
                        </div>
                    );
                })}
            </div>
            <div className="row">
                <button onClick={handleFetch} className="btn btn-ouutline-info">Fetch</button>
            </div>

        </div>
    );
}
export default Axios;