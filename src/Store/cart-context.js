import React from 'react'; 

const CartContext = React.createContext(
  {
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
  }
);

export default CartContext; 
//it's just a boylarplate code . 
//it just create the context to use . and we implement it inside cartProvider component. 
//and the value is changed or updated or effected inside cart_provider component. 
//if we change any value there inside cartProvider component then the result is visible. 
