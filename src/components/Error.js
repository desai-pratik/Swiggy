import React from "react";
import { json, useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="text-center">
            <h1>Not found the Page</h1>
            <h4>{err.status} : {err.statusText}</h4>
        </div>
    );
}
export default Error;