import React, {useContext} from 'react';
import {Redirect, Route} from "react-router";
import {UserContext} from "../../contexts/UserContext";

function PrivateRoute({component: Component, ...props}) {
    const {isLoggedIn} = useContext(UserContext);

    return (
        <Route
            {...props}
            render={() => isLoggedIn
                ? <Component {...props}/>
                : <Redirect to={"/sign-in"}/>
            }
        />
    );
}

export default PrivateRoute;