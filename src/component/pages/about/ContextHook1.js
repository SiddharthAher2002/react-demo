import React from 'react';
import Child1 from './Child1';

export const UserContext = React.createContext();
export const ItemContext = React.createContext();

function ContextHook1() {
    return (
        <>
            <UserContext.Provider value="user1">
                <ItemContext.Provider value="item1">
                    <Child1 />
                </ItemContext.Provider>
            </UserContext.Provider>

        </>
    );
}
export default ContextHook1;