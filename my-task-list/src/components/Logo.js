import React from "react";
import "../style.css";
import logo from "./logo-todolist.png"
import "bootstrap/dist/css/bootstrap.min.css"

const Logo = () => {
    return (
        <div className={"text-center"}>
            <img src={logo} alt="logo" className={"rounded mx-auto card-img-top logo-img"}/>
            <h1 className="card-title">MyTodoList App</h1>
        </div>
    );
};

export default Logo;