import { Offcanvas ,OffcanvasBody,OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../cont/shoppingCart";
import { Currency } from "../util/Currency";
import { CartItem } from "./CartItem";
import storeItems from "../codes/items.json"

type shoppingCartprops={
    isOpen: boolean
}

export function Cart( {isOpen}: shoppingCartprops ){
    const { closeCart, cartItems }= useShoppingCart()
    return <Offcanvas show={isOpen} onHide={ closeCart } placement="end">
        <Offcanvas.Header closeButton>
            <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
        <OffcanvasBody>
            <Stack gap={3}>
               {cartItems.map(item =>(
               <CartItem key={item.id} {...item}/>))}
               
                <div className="ms-auto fw-bold fs-5">
                    Total {Currency(cartItems.reduce((total,
                        cartItems) => {

                            const item= storeItems.find(i => i.id ===
                                cartItems.id)
                                return total + (item?.price || 0)* cartItems.quantity
                        }, 0)
                        )}
                     </div>

            </Stack>
        </OffcanvasBody>
    </Offcanvas>
}