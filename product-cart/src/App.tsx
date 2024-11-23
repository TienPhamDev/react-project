import { useState } from 'react'
import './App.css';
import Items from './Items';
import data from './data.json';
import { nanoid } from 'nanoid';
import Cart from './Cart';
import Header from './Header';
function App() {
  const [count, setCount] = useState(0)
  const dataDesserts = data;
  return (
    <main className='p-4'>
      <h1 className='text-5xl font-bold mb-8 mt-4'>Desserts</h1>
      {
        dataDesserts.map((item) => {
          return <Items {...item} key={nanoid()}/>
        })
      }
      <Cart/>
    </main>
  )
}

export default App
