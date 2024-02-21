import Axios from "../../component/pages/about/AxiosPost";
function About(){
    return (
        <>
            <div className="container-fluid" style={{minHeight:"300px"}}>
                <div className="row justify-content-center">
                    <h4>About Page</h4>
                </div>
                <div className="row justify-content-center">
                    <Axios/>
                </div>
            </div>
        </>
    )
}
export default About;