import axios from 'axios';
import {useState} from 'react';

const PostForm = () => {
    const [postData, setPostData] = useState({
        userId: '',
        title: '',
        body: ''
    });

    const handleChanges = (e) => {

        setPostData({
            ...postData, [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts1', postData)
            .then((response) => console.log(response.data))
            .catch((error) => console.log(error.message));
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input className="form-control" type="text" name="userId" placeholder="User Id" value={postData.userId} onChange={handleChanges} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" name="title" placeholder="Title" value={postData.title} onChange={handleChanges} />
            </div>
            <div className="form-group">
                <input className="form-control" type="text" name="body" placeholder="Body" value={postData.body} onChange={handleChanges} />
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
        </form>
    )
}
export default PostForm;