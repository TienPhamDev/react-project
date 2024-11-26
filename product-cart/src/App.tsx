import { useState } from 'react'
import './App.css';
import Cart from './Cart';
import Products from './Products';
interface CartItem {
  name:string
  thumbnail : string
  price : number
  quantity:number
}
function App() {
  
  const [cart,setCart] = useState<CartItem[]>([]);
  
  const handleAddToCart = (name:string,thumbnail:string,price:number,quantity:number):void => {
    const product: CartItem={
      "name":name,
      "thumbnail":thumbnail,
      "price": price,
      "quantity": quantity
    } 
    setCart((prevCart) => {
      const existCart = cart.find((item)=> item.name === product.name)
      if (existCart){
        return prevCart.map((item)=> {
          return item.name === product.name ? { ...item, quantity: item.quantity + 1 }
          : item
        })
      } else {
        return [...prevCart, { name, price, quantity: quantity + 1 }];
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
