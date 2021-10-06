export const addCart = payload => ({
    type: "ADD_CART",
    payload,
});

export const deleteCart = payload => ({
    type:"DELETE_CART",
    payload,
});

export const quantityCart = payload => ({
    type:"QUANTITY_CART",
    payload,
});
