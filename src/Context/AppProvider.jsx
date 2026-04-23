import React, {useReducer, useEffect } from 'react'
import { AppContext } from './AppContext'

// export const AppContext = createContext();

const AppProvider = ({children}) => {
    const getInitialCart = () => {
      try {
         const savedCart = localStorage.getItem("cart");
         const parsed = savedCart ? JSON.parse(savedCart) : [];
          return Array.isArray(parsed) ? parsed : [];
            } catch (error) {
               return [];
               }
        };
    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":{
              const existingCart = state.findIndex(item => item.id === action.payload.id)
              if (existingCart === -1) {
                const newItem = {...action.payload, quantity: 1, cartId: Date.now()}
                return [...state, newItem]
              } else{
                return state.map((item, index) => {
                  if (index === existingCart) {
                    return{...item, quantity: item.quantity + 1}
                  }
                  return item;
                });
              }
              
              // else{
              //   const updatedCart = state[existingCart];
              //   updatedCart.quantity += 1;

              //   return [...state];
              // }
            }
            case "ADD_ONE": {
               return state.map(item => {
               if (item.id === action.payload) {
               return { ...item, quantity: item.quantity + 1 };
                }
                return item;
                });
             }

            case "REMOVE_ONE": {
              return state.map(item => {             
             if (item.id === action.payload) {
                //  return { ...item, quantity: item.quantity - 1 };
                 return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity };
            }
                return item;
          })
              //  .filter(item => item.quantity > 0);
         }
         
               case "REMOVE_FROM_CART":
               return state.filter(item => item.id !== action.payload);
            default:
                return state;
        }
    };

    const [cart, dispatch] = useReducer(cartReducer, getInitialCart());
    console.log(cart)

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  return (
    <AppContext.Provider value={{cart, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
