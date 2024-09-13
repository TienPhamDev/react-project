import { useState } from "react";

const Tour = ({id,name,info,image,price,removeTour}) => {
    const [readmore,setReadmore] = useState(false);

    return (
        <div className="single-tour">
            <img className="img" src={image} alt="tours image" />
            <span className="tour-price">{price}</span>
            <div className="tour-info">
                <h5>{name}</h5>
                <p>{readmore ? `${info} ` : `${info.substring(0,200)} ... `} 
                    <button onClick={()=> setReadmore(!readmore)} type="button" className="info-btn">{readmore ? "Show less" : "Read more"}</button>
                </p>
                
                <button onClick={() => {removeTour(id)}} type="button" className="btn btn-block delete-btn" >Not Interested</button>
            </div>
        </div>
    );
};
export default Tour;