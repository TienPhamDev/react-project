import { useState } from 'react'
import './App.css';
import Cart from './Cart';
import Products from './Products';

function App() {
  
  const [cart,setCart] = useState([]);
  
  const handleAddToCart = (name,thumbnail,price,newQuantity) => {
    // const product={
    //   "name":name,
    //   "thumbnail":thumbnail,
    //   "price": price,
    //   "quantity": quantity
    // } 
    setCart((prevCart) => {
      const existCart = cart.find((item)=> item.name === name)
      if (existCart){
        return prevCart.map((item)=> {
          return item.name === name ? { ...item, quantity: item.quantity + newQuantity }
          : item
        })
      } else {
        return [...prevCart, { name, thumbnail,price, quantity: newQuantity}];
      }

    })
  }
  return (
    <main className='p-4'>
      <h1 className='text-5xl font-bold mb-8 mt-4'>Desserts</h1>
      <Products addToCart = {handleAddToCart}/>
      <Cart cart={cart}/>
    </main>
  )
}

export default App
