import ReduceHook1 from "../../component/pages/about/ReduceHook1";
import ReduceHook2 from '../../component/pages/about/ReduceHook2';
import ReduceHook3 from "../../component/pages/about/ReduceHook3";
import ReduceHook4 from "../../component/pages/about/ReduceHook4";
function About(){
    return (
        <>
            <div className="container-fluid" style={{minHeight:"300px"}}>
                <div className="row justify-content-center">
                    <h4>About Page</h4>
                </div>
                <div className="row justify-content-center">
                    <ReduceHook4/>
                </div>
            </div>
        </>
    )
}
export default About;