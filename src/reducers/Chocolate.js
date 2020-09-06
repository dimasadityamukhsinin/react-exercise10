export const chocolate = {
    quantity: 10,
    price: 25000
}
  
export const chocolateReducer = (state, action) => {
    // Condition based Action
    if (action.type === 'BELI_CHOCOLATE') {
      const newState = {
        ...state,
        quantity: state.quantity - 1,
      }
      return newState;
    }
    return state;
}