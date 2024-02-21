function  PostDetailForm(){
    return (
        <form>
            <div className="form-group m-2">
                <input className="form-control" type="text" name="heading" placeholder="Heading"/>
            </div>
            <div className="form-group  m-2">
                <input className="form-control" type="file" id="formFile"/>            
            </div>
            <div className="form-group  m-2">
                <textarea className="form-control" name="description" placeholder="Description"/>
            </div>
                <button className="btn btn-outline-primary">Submit</button>
        </form>
    );
}

export default PostDetailForm;