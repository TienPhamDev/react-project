import { useState } from "react";
import reviews from "./data";
import { FaChevronCircleLeft,FaChevronCircleRight,FaQuoteRight } from "react-icons/fa";
const App = () => {
  const [index,setIndex] = useState(0);
  const {name,id,job,image,text} = reviews[index];
  const prevPerson = () =>{
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % (reviews.length);
      return newIndex;
    })
  };
  const nextPerson = () =>{
    setIndex((currentIndex) => {
      const newIndex =  (currentIndex + 1) % (reviews.length);
      return newIndex;
    })
  };
  const randomPeople = () => {
    let newIndex = Math.floor(Math.random() * reviews.length);
    if (newIndex === index){
      newIndex += 1;
    }
    const modIndex = newIndex % reviews.length;
    setIndex(modIndex);
  }
  return <main>
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight/>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronCircleLeft/>
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronCircleRight/>
        </button>
      </div>
      <button className="btn" onClick={randomPeople}>Random</button>
    </article>
  </main>
};
export default App;
