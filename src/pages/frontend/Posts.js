import Navbar from "../../component/navbar/Navbar";
import PostList from "../../component/posts/PostList";
import PostForm from "../../component/posts/PostForm";
import PostDetailForm  from "../../component/posts/PostDetailForm";

function Posts() {
    const postListStyle = {
        overflowX: "hidden",
        overflowY: "scroll",
        maxHeight: "400px"
    }
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row justify-content-center">
                    <h4 className="col-2">POSTS</h4>
                </div>
                <div className="container-sm">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header bg-primary text-light">
                                    <h5 className="mx-">Add Post</h5>
                                </div>
                                <div className="card-body">
                                    <PostForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header bg-primary text-light">
                                    <h5>Post Details</h5>
                                </div>
                                <div className="card-body">
                                    <PostDetailForm />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4 ">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header bg-secondary text-light">
                                    <h5>List of posts</h5>
                                </div>
                                <div className="card-body" style={postListStyle}>
                                    <PostList />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Posts;