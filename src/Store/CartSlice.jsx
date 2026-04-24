import { createSlice } from "@reduxjs/toolkit";

const cartRedux = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addToCart:(state, action) => {
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
        },
        addOne: (state, action) => {
             return state.map(item => {
               if (item.id === action.payload) {
               return { ...item, quantity: item.quantity + 1 };
                }
                return item;
                });
        },
        subOne: (state, action) => {
               return state.map(item => {             
             if (item.id === action.payload) {
                //  return { ...item, quantity: item.quantity - 1 };
                 return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity };
            }
                return item;
          })
        },
        removeAll: (state, action) => {
             return state.filter(item => item.id !== action.payload);

                return state;
        }
    }
})

export const {addToCart, addOne, subOne, removeAll} = cartRedux.actions;
export default cartRedux.reducer;