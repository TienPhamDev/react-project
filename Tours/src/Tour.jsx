const Tour = ({id,name,info,image,price}) => {
    return (
        <div className="single-tour">
            <img  src={image} alt="tours image" />
            <span className="tour-price">{price}</span>
            <h2>{name}</h2>
            <p>{info}</p>
        </div>
    );
};
export default Tour;