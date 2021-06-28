import {Products} from "../../utils/ProductDataProvider";

const initialState = {
    products: Products,
    cart: []
};

export const ProductReducer = (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        default:
            return state;
    }
};