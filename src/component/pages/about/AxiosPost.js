import axios from "axios";
import { useState } from "react";

function Axios() {
    const [data, setData] = useState({
        title: '',
        body: ''
    });
    
    // const handleSubmit = (e)=>{
        
    //     e.preventDefault();
    //     console.log("one");
    //     axios.post("https://jsonplaceholder.typicode.com/posts",data)
    //     .then((res)=>{
    //         console.log(res);
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     })
    //     console.log("three");
    // }
    const handleSubmit = async (e)=>{
        
        e.preventDefault();
        console.log("one");
        await axios.post("https://jsonplaceholder.typicode.com/posts",data)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
        console.log("three");
    }
    return (
        <div className="container">
            <div className="row">
                {data.title} {data.body}
            </div>
            <div className="row">
                <form>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" name="title" placeholder="Enter title"
                                value={data.title}
                                onChange={(e) => { setData({
                                    ...data,
                                    title: e.target.value,
                                })}}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <input type="text" className="form-control" name="password" placeholder="Enter pass"
                                value={data.body}
                                onChange={(e) => { setData({
                                    ...data,
                                    body:e.target.value
                                }) }}
                            />
                        </div>
                    </div>
                    <button onClick={handleSubmit} className="btn btn-outline-dark">Save</button>
                </form>

            </div>
        </div>
    );
}
export default Axios;