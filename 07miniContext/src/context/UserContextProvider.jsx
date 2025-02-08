import Usercontext from "./userContext";
import React from "react";

const UserContextProvider = ( {children} ) => {
const [user, setUser] = React.useState()

    return (
        <Usercontext.Provider value={{user, setUser}}>
            {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider;