import React, {useContext} from 'react';
import { ItemContext,UserContext } from './ContextHook1';


function Child3(){
    // return (
    //     <>
    //         <div className='col-12'>
    //            <UserContext.Consumer>
    //             {
    //                 user => {
    //                     return (
    //                        <ItemContext.Consumer>
    //                         {
    //                             item =>{
    //                                 return(
    //                                         <>
    //                                             UserContext :{user},
    //                                             ItemContext : {item}
    //                                         </>
    //                                 );
    //                             }
    //                         }
    //                        </ItemContext.Consumer>
    //                     );
    //                 }
    //             }
    //            </UserContext.Consumer>
    //         </div>
    //     </>
    // );
    const user = useContext(UserContext);
    const item = useContext(ItemContext);
    return (
        <div>
            {user} - {item}
        </div>
    );
}
export default Child3;

