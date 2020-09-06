export const cappucino = {
    quantity: 10,
    price: 35000
}
  
export const cappucinoReducer = (state, action) => {
    // Condition based Action
    if (action.type === 'BELI_CAPPUCINO') {
      const newState = {
        ...state,
        quantity: state.quantity - 1,
      }
      return newState;
    }
    return state;
}