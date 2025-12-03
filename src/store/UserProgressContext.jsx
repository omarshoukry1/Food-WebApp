import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: '',
  showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});
export function UserProgressContextprovider({ children }) {
    const [UserProgress,setUserProgress]=useState('');
    function showCart(){
        setUserProgress('cart');
    }
    function hideCart(){
        setUserProgress('');
    }
    function showCheckout(){
        setUserProgress('checkout');
    }
    function hideCheckout(){
        setUserProgress('');
    }
    const userProgressCtx={
        progress:UserProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
    }
    return (
        <UserProgressContext.Provider value={userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    )
  }