import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./product.css";

export const Product = ({products}) => {
    return (
        <div className="col-6 btn-warning">
            <div className="container-fluid">
                <div className="row overflow-scroll"  style={{height: "1200px"}}>
                    {products.map(product =>
                        <div key={product.id} className="col-4 p-3">
                            <div className="rounded border border-light productContainer">
                                <img src={product.image} alt={product.name} className="rounded productImages"/>
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};