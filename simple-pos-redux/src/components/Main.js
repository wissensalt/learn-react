import React from "react";
import {Menu} from "./Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import {Product} from "./Product";
import {Cart} from "./Cart";
import {useSelector} from "react-redux";

export const Main = () => {
    const products = useSelector(state => state.product.products);

    return (
        <div className="d-flex">
            <div className="row">
                <Menu/>
                <Product products={products}/>
                <Cart/>
            </div>
        </div>
    );
};