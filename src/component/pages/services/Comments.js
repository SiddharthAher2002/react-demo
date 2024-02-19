import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const initialState = {
    isLoading: true,
    data: {},
    error: ''
}
const reducer = (currState, action) => {

    switch (action.type) {
        case "FETCH_SUCCESS":
            return {
                isLoading: false,
                data: Array.isArray(currState.data) ? [...currState.data, ...action.data] : action.data,
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
    const [fetchData, setFetchData] = useState(comments.data);

    const limitPerPage = 10;
    const handleLoadMore = () => {
        setFetchData(comments.data);
        setCurrPageId(PreviousPageID => PreviousPageID + 10);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${currPageId}&_limit=${limitPerPage}`)
            .then((res) => {
                dispatch({ type: "FETCH_SUCCESS", data: res.data });
            })
            .catch((error) => {
                dispatch({ type: "FETCH_FAIL" });
            });
    }, [currPageId]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-10  p-3 comments-section">
                    {commentsHtml(comments)}
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

function commentsHtml(comments) {
    return (<div>
        {
            Array.isArray(comments.data) && comments.data.map((comment) => {
                return (<div className="m-3" key={comment.id}>
                    <div className="card">
                        <div className="card-header bg-secondary text-light">
                            <h6>{comment.email}</h6>
                        </div>
                        <div className="card-body">
                            <h4>{comment.name}</h4>
                            <p>{comment.body}</p>
                        </div>
                        <div className="card-footer">
                            <p style={{ fontSize: "12px" }}>19th Feb 2024: 08 PM</p>
                        </div>
                    </div>
                </div>)
            })
        }
    </div>);
}
export default Comments;
