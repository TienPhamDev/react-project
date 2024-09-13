import { useState } from "react";
import Tours from "./Tours";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [toursData,setToursData] = useState([]);

  const fetchToursData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  }
  useState(()=>{
    fetchToursData();
  },[])
  return (
    <main>
      <h2>Our Tours</h2>
      <Tours/>
    </main>
  )
};
export default App;
