import data from "./data.json";
import "./css/summary.css";

export const Summary = () => {

  return <div className="summary">
    <h2>Summary</h2>
    <ul className="categories">
      {
        data.map((item)=>{
          return <li key={item.category}>
            <img src={item.icon} alt={item.category} />
            <span className="nameItem">{item.category}</span>
            <span>
              <span className="scoreItem">{item.score}</span> 
              <span className="scoreItem2"> / 100</span>
            </span>
          </li>
        })
      }
    </ul>
    <button className="btn">Continue</button>
  </div>;
};
