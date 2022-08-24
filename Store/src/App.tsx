import{ Routes, Route} from "react-router-dom"
import{ Container } from "react-bootstrap"
import { Home } from "./Pages/Home"
import { Store } from "./Pages/Store"
import { About } from "./Pages/About"
import { NavBar } from "./Comps/NavBar"
import { ShopProvider } from "./cont/shoppingCart"

function App() {
 return (<ShopProvider>
    <NavBar/>

 <Container>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/store" element={<Store />} />
 <Route path="/about" element={<About />} />
 </Routes>
 </Container>
 
 </ShopProvider>
 )
}

export default App
