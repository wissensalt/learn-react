import MainTemplate from "../template/MainTemplate";
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";

const NotFound = () => {
    return (
        <MainTemplate>
            <h1 className="p-5 text-center">404 - Page Not Found</h1>
        </MainTemplate>
    )
};

export default NotFound;