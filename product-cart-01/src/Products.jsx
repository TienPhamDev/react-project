import Items from "./Items";
import data from './data.json';
import { nanoid } from "nanoid";

function Products({addToCart}) {
    const dataDesserts = data;
    return ( <>{
        dataDesserts.map((item) => {
          return <Items {...item} key={nanoid()} addToCart = {addToCart} />
        })
      }</> );
}

export default Products;