import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import CommentsCard from "./CommentsCard";

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
        setCurrPageId(PreviousPageID => PreviousPageID + 10);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${currPageId}&_limit=${limitPerPage}`)
            .then((res) => {
                console.log("called");
                dispatch({ type: "FETCH_SUCCESS", data: [...comments.data,...res.data] });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_FAIL" });
            });
            console.log(comments.data);
    }, [currPageId]);
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-10  p-3 comments-section">
                    {
                        comments.data.map((comment) => <CommentsCard key={comment.id} comment={comment} />)
                    }
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

export default Comments;
