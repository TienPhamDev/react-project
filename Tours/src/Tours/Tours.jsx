import "./style.css";
import Tour from "../Tour";
const Tours = ({tours}) => {
    return <div>
        {
          tours.map((tour) => {
            return <Tour price={tour.price} image={tour.image} info={tour.info} name={tour.name} key={tour.id} />
          } )  
        }
    </div>;
}
export default Tours;