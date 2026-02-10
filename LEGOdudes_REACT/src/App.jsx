import './style/lego.css'
import { products } from './assets/legodudes'
import { useState } from 'react'
import { useEffect } from 'react'
import Cart from './components/Cart'
import Products from './components/Products'
import Header from './components/Header'
import Nav from './components/Nav'
import CategoryTitle from './components/CategoryTitle'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)

  console.log("Cart", cart)

  //reduce legger sammen alle verder i en liste. den ser etter tall i listen, og legger dem sammen 
  useEffect(()=>{
    const totalQuantity = cart.reduce((sum, item) => sum + item.quanity, 0) 
    setCartQuantity(totalQuantity)
    const total = cart.reduce((sum, item) => sum + (item.price * item.quanity), 0)
    setTotalSum(total)
  }, [cart])

  //en state som skal holde på innehold av det som ligger i handlekruven ([]) er default staten til handlekurven. skal starte som en tom liste

//komponenter for hver del fra index.html, bortsett fra produktkortene som skal være dynamisk, og derfor hentet fra js legodudes 

//sjekk i cart for å se om handlekurven er tom, 

function Page(){
   return (
     <main>
      <CategoryTitle />
       <Products products={products} setCart = {setCart} />
      </main>
  )
}

  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
      <Routes>
        <Route index element = {<Page />} />
        <Route path='city' element={<CategoryTitle title='City'/>} /> 
        <Route path='ninjago' element={<CategoryTitle/>} title='Ninjago'/> 
        <Route path='castles-and-knights' element={<CategoryTitle/>} title='castles-and-knights'/> 

      </Routes>
    </Layout>

  )
      
}

export default App
