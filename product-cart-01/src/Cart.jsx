import CarbonSVG from "./svgUI/CarbonSVG";
import EmptyCartSVG from "./svgUI/EmptyCartSVG";
import { nanoid } from "nanoid";
function Cart({cart}) {
    return ( <section className="bg-white rounded-lg shadow-md px-6 py-8 mt-8 max-w-md mx-auto">
        { cart.length === 0 ? <div className="flex flex-col justify-center items-center">
            <EmptyCartSVG/>
            <p className="text-sm">Your added items will appear here.</p>
        </div>
        :
         <div>
            <h2 className="text-3xl font-bold text-orange-700">Your Cart (0)</h2>
            {
                cart.map((item) => {
                    return <div key={nanoid()}>
                        <div className="py-8 border-b-[1px] border-slate-900/10 flex justify-between items-center">
                            <div>
                                <h3 className="font-semibold"></h3>
                                <div className="flex gap-2">
                                    <span>{item.name}</span>
                                    <span>@{item.price}</span>
                                    <span>{item.price * item.quantity}</span>
                                </div>
                            </div>
                            <div className="p-1 border-[1px] border-[#CAAFA7] rounded-[100%]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
                            </div>
                        </div>
                    </div>
                })
            }
            
            <div className="flex justify-between items-center my-8">
                <h4>Order Total</h4>
                <span className="font-bold text-xl text-black">$ Order Total</span>
            </div>
            <div className="flex gap-2 p-4 bg-[#FCF8F6] rounded-lg text-sm">
                <CarbonSVG/>
                <p>This is a <strong>carbon-neutral</strong> delivery</p>
            </div>
            <button className="rounded-[30px] bg-[#C83B0D] p-4 w-full mt-8 text-white">
                Confirm Order
            </button>
        </div>}
    </section> );
}

export default Cart;