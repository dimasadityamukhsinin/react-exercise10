export const saldo = {
    cart: 0,
    totalPrice: 0,
}

export const saldoReducer = (state, action) => {
    // Condition based Action
    if (action.type === 'TAMBAH_SALDO') {
        const newState = {
            cart: state.cart + 1,
            totalPrice: state.totalPrice + action.payload,
        }
        return newState;
    }else if(action.type === 'KURANGI_SALDO') {
        const newState = {
            cart: state.cart - 1,
            totalPrice: state.totalPrice - action.payload,
        }
        return newState;
    }
    return state;
}