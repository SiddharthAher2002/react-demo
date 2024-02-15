import ContextHook1 from "../../component/pages/about/ContextHook1";
function About(){
    return (
        <>
            <div className="container-fluid" style={{minHeight:"300px"}}>
                <div className="row justify-content-center">
                    <h4>About Page</h4>
                </div>
                <div className="row justify-content-center">
                    <ContextHook1/>
                </div>
            </div>
        </>
    )
}
export default About;