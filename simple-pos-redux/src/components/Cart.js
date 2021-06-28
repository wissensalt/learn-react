import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {CartItem} from "./CartItem";
import {CartCalculator} from "./CartCalculator";

export const Cart = () => {
    return (
        <div className="col-4">
            <div className="container-fluid">
                <div className="row">
                    <CartItem/>
                    <CartCalculator/>
                </div>
            </div>
        </div>
    );
};