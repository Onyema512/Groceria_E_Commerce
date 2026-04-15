import React, {useReducer} from 'react'
import { AppContext } from './AppContext'

// export const AppContext = createContext();

const AppProvider = ({children}) => {
    const initialValue = [];
    const cartReducer = (state, action) => {
        switch (action.type) {
            case "ADD_TO_CART":
                return [...state, action.payload];
                break;
        
            default:
                break;
        }
    }

    const [cart, dispatch] = useReducer(cartReducer, initialValue);
    console.log(cart)
  return (
    <AppContext.Provider value={{cart, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
