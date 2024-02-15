import Child2 from "./Child2";

function Child1(){
    return (
        <>
            <div className='col-12'>
                Child 1
                <Child2 />
            </div>
        </>
    );
}
export default Child1;