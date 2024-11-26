import Items from "./Items";
import data from './data.json';
import { nanoid } from "nanoid";
interface Cart {
    addToCart:(name:string,thumbnail:string,price:number,quantity:number)=>void
}
function Products({addToCart}:Cart) {
    const dataDesserts = data;
    return ( <>{
        dataDesserts.map((item) => {
          return <Items {...item} key={nanoid()} addToCart = {addToCart} />
        })
      }</> );
}

export default Products;