import { useState } from "react";

const Question = ({ title, info }) => {
  const [isOpen,setIsOpen] = useState(false);
  return <div className="question">
    <header>
      <h5>{title}</h5>
      <button className="question-btn" onClick={()=> setIsOpen(!isOpen)}>
        {isOpen ? "-" : "+"}
      </button>
    </header>
    {isOpen && <p>{info}</p>}
  </div>
};
export default Question;
