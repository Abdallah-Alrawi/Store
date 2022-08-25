import { createContext, ReactNode, useContext, useState } from "react";
import { Cart } from "../Comps/Cart";
import {useLocal} from "../hooks/useLocal";



type ShopProviderProps= {
    children: ReactNode
}



type CartItem = {
    id: number
    quantity: number
}


type shoppingCart ={
    openCart: () => void
    closeCart: () => void
    cartQuantity: number
    cartItems: CartItem[]
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
}


const shoppingCart= createContext({}as shoppingCart)

export function useShoppingCart(){
    return useContext(shoppingCart)
}


export function ShopProvider({ children }:ShopProviderProps){
    const [isOpen, setIsOpen]= useState(false)
    const [cartItems, setCartItems]= useLocal<CartItem[]>
    ("shopping-cart",[])


    const cartQuantity= cartItems.reduce((quantity, item) =>
    item.quantity + quantity,0)

    const openCart =() => setIsOpen(true)
    const closeCart =() => setIsOpen(false)

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id: number){

        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map(item =>{
                    if (item.id === id){
                        return { ...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })
            }
            })
        }
        
        function decreaseCartQuantity(id: number){

            setCartItems(currItems => {
                if (currItems.find(item => item.id === id)?.quantity === 1 ){
                    return currItems.filter(item => item.id !== id)
                } else {
                    return currItems.map(item =>{
                        if (item.id === id){
                            return { ...item, quantity: item.quantity - 1}
                        }else {
                            return item
                        }
                    })
                }
            })
            
            }
    
            function removeFromCart(id: number){
                setCartItems(currItems => {
                    return currItems.filter(item => item.id !== id)
                })
            }

    return( <shoppingCart.Provider value={{ 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity
    }}>
    {children}

    <Cart isOpen={isOpen}></Cart>
    </shoppingCart.Provider>
    )
    }
    
    












function setCartItems(arg0: (currItems: any) => any) {
    throw new Error("Function not implemented.");
}