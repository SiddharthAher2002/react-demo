import Info from "./Info";
function About(){
    return (
        <>
            <div className="container-fluid" style={{minHeight:"300px"}}>
                <div className="row justify-content-center">
                    <h4>About Page</h4>
                </div>
                <div className="row justify-content-center">
                    <Info/>
                </div>
            </div>
        </>
    )
}
export default About;