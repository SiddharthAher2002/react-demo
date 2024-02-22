import { useEffect, useReducer, useState } from "react";
import axios from "axios";
<<<<<<< HEAD:react-frontend/src/pages/services/Comments.js
import CommentsCard from "./CommentsCard";
=======
import Comment from './Comment';
>>>>>>> daba3bd206f317c429c759b1edbec1167cb2c0fc:react-frontend/src/component/pages/services/Comments.js

const initialState = {
    isLoading: true,
    data: [],
    error: ''
}
const reducer = (currState, action) => {

    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                isLoading: false,
                data: action.data,
                error: '',
            }
        case "FETCH_FAIL":
            return {
                isLoading: false,
                data: [],
                error: 'something went wrong'
            }
        default:
            return currState
    }
};
function Comments() {
    const [comments, dispatch] = useReducer(reducer, initialState)
    const [currPageId, setCurrPageId] = useState(0);
    const limitPerPage = 10;
    const handleLoadMore = () => {
        let pageNum = PreviousPageID => PreviousPageID + 10
        setCurrPageId(pageNum);
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${currPageId}&_limit=${limitPerPage}`)
<<<<<<< HEAD:react-frontend/src/pages/services/Comments.js
            .then((res) => {
                console.log("called");
                dispatch({ type: "FETCH_SUCCESS", data: [...comments.data,...res.data] });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_FAIL" });
            });
            console.log(comments.data);
    }, [currPageId]);
=======
            .then(res => dispatch({ type: "FETCH_SUCCESS", data: [...comments.data, ...res.data] }))
            .catch(() => dispatch({ type: "FETCH_FAIL" }));
    }, [currPageId]);

>>>>>>> daba3bd206f317c429c759b1edbec1167cb2c0fc:react-frontend/src/component/pages/services/Comments.js
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-10  p-3 comments-section">
<<<<<<< HEAD:react-frontend/src/pages/services/Comments.js
                    {
                        comments.data.map((comment) => <CommentsCard key={comment.id} comment={comment} />)
                    }
=======
                    {comments.data.map((comment, i) => <Comment comment={comment} />)}
>>>>>>> daba3bd206f317c429c759b1edbec1167cb2c0fc:react-frontend/src/component/pages/services/Comments.js
                </div>
            </div>

            <div className="row mt-4 justify-content-center">
                <div className="col-4">
                    <button onClick={handleLoadMore} className="btn btn-outline-dark" disabled={false}>Load More</button>
                </div>
            </div>
        </div>

    );
}
<<<<<<< HEAD:react-frontend/src/pages/services/Comments.js

=======
>>>>>>> daba3bd206f317c429c759b1edbec1167cb2c0fc:react-frontend/src/component/pages/services/Comments.js
export default Comments;
