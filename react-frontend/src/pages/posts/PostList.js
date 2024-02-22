import axios from 'axios';
import {useState, useEffect} from 'react';
const PostList= ()=>{

    const [posts,setPosts] = useState([]);
    const [error,setError] = useState("");

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
           setPosts(response.data);
        })
        .catch(error => {
            setError("Error retrieving data");
        });
    },[])
    console.log("render");
    return (
        <>
            {posts.length ?
                posts.map(post=><div key={post.id}>
                    <hr className="hr-xs" />
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>)
                    :
                    null
            }
            {error?<p>{error}</p>:null}
        </>
    );
}

export default PostList;