import { useState } from "react"
import CartSVG from "./svgUI/CartSVG"
import DecrementSVG from "./svgUI/decrementSVG"
import IncrementSVG from "./svgUI/IncrementSVG"

function Items({image,name,category,price,addToCart} ) {
    
    
    const [quantity,setQuantity] = useState(0);
    const handleDecreQuantity = () =>{
        quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1) 
    }
    const handleIncreQuantity = () =>{
        setQuantity(quantity + 1)
        
    }
    const addClickToCart=()=>{
        handleIncreQuantity()
        addToCart(name,image.thumbnail,price,quantity)
    }
    return (<section className="rounded-lg mb-8" >
        <div className="relative">
            <img src={image.mobile} alt={name} className="w-full h-54 rounded-md object-cover mb-4" />
            <div className="absolute bottom-[-9%] translate-x-[-50%] left-[50%] ">
                {quantity === 0 ? <button onClick={addClickToCart} className="px-4 py-2 rounded-[30px] bg-white border-[1px] border-[#C73B0F] w-44 flex items-center justify-center gap-2">
                    <CartSVG/>
                    Add to Cart
                </button>
                :
                <div className="bg-[#C73B0F] px-4 py-2 w-44 flex justify-between rounded-[30px]">
                    <button onClick={handleDecreQuantity} className="p-1 border-[1px] border-white rounded-[100%]">
                        <DecrementSVG/>
                    </button>
                    <span className="text-white">{quantity}</span>
                    <button onClick={handleIncreQuantity} className="p-1 border-[1px] border-white rounded-[100%]">
                        <IncrementSVG/>
                    </button>
                </div>}
            </div>
        </div>
        <div className="my-10">
          <h2 className="text-lg text-slate-800/50">{category}</h2>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-orange-700">{price}</p>
        </div>
      </section>);
}

export default Items;