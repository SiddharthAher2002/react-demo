const CommentsCard = (props) => {
    let { comment } = props;
    return (
        <div className="m-3">
            <div className="card">
                <div className="card-header bg-secondary text-light">
                    <h6>{comment.email}</h6>
                </div>
                <div className="card-body">
                    <h4>{comment.name}</h4>
                    <p>{comment.body}</p>
                </div>
                <div className="card-footer">
                    <p style={{ fontSize: "12px" }}>19th Feb 2024: 08 PM : {comment.id}</p>
                </div>
            </div>
        </div>
    );

}

export default CommentsCard;