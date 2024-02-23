
import React, {useState} from 'react';
const {Provider, Consumer} = React.createContext();
function UserContextProvider(props) {
    const [user, setUser] = useState({});
    const loginUser = (newUser) => {
        setUser(newUser)
    };
    return (
        <Provider value={{user, loginUser}}>
            {props.children}
        </Provider>
    )
}

export {UserContextProvider, Consumer as UserContextConsumer};