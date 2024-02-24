
import React, {useState} from 'react';
const {Provider, Consumer} = React.createContext();
function UserContextProvider(props) {
    const [user, setUser] = useState({});
    return (
        <Provider value={{user, setUser}}>
            {props.children}
        </Provider>
    )
}

export {UserContextProvider, Consumer as UserContextConsumer};