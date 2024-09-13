import Tour from "./Tour";

const Tours = ({tours}) => {
    return (
        <div className="tours">
            {
                tours.map((tour) => {
                    return <Tour key={tour.id} {...tour}/>
                })
            }
        </div>
    )
}
export default Tours;