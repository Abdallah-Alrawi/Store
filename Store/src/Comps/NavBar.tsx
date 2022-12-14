import { Button, Container,Nav, Navbar, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../cont/shoppingCart"

export function NavBar(){
    const {openCart, cartQuantity}= useShoppingCart()
    return (
    <NavbarBs sticky="top" className="bg-dark shadow-sm mb-3 ">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to={"/"} as={NavLink} className="text-light">
                Home
                </Nav.Link>
                <Nav.Link to={"/store"} as={NavLink} className="text-light">
                Store
                </Nav.Link>
                <Nav.Link to={"/about"} as={NavLink} className="text-light">
                About
                </Nav.Link>

            </Nav>

            {cartQuantity >0 && (<Button 
            onClick={openCart}
            style={{height:"3.5rem",width:"3.5rem",borderColor:"white",color:"Blue",position:"relative"}}
            variant="inline-primary"
            className="rounded-circle"
            > 

            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{color:"white",height:"1.4rem",width:"1.4rem",transform:"translate(75%,-10%)"}}>
                
                {cartQuantity}
            </div>
            </Button>
)}
        </Container>
    </NavbarBs>
    )
}