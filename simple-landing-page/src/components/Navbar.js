import React from "react"
import  "bootstrap/dist/css/bootstrap.min.css";
import "../link.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <Link to="/" className="textLinkNav">
                        SLP
                    </Link>
                </span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <span className="nav-link">
                                <Link to="/" className="textLinkNav">
                                    Home
                                </Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                <Link to="/about" className="textLinkNav">
                                    About
                                </Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                <Link to="/contact" className="textLinkNav">
                                    Contact
                                </Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default Navbar;