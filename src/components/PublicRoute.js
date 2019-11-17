import React from "react";
import { Route } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

// El componente <PublicRoute /> recibe como argumento un objeto con las propiedades: isLoggedIn y el resto de las props, y además un componente en la key component

function PublicRoute({ component: Component, ...rest }) {
    // devuelve un componente <Route /> donde su prop render recibe las props, y si el usuario no está logueado, devuelve el componente con sus props (history, etc.), en caso contrario, el componente <Redirect /> redirige a /private
    return (
        <Route
            {...rest}
            render={props =>
                <Component {...props} />
            }
        />
    );
}

export default withAuth(PublicRoute);