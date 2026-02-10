import Header from "./Header";
import Nav from "./Nav";
import Cart from "./Cart";


export default function Layout({setIsOpen, cartQuantity, children, isOpen, cart, setCart, totalSum}){
    return(
        <div id="container">
            <Header  setIsOpen={setIsOpen} cartQuantity={cartQuantity}/>
            <Nav/>
            <Cart isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}/>
            {children}
        </div>
    )
}