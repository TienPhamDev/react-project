import { useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
import { useState } from "react";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const[isLoading,setIsLoading] = useState(true)
  const[toursData,setToursData] = useState([]);
  useEffect(()=>{
    setIsLoading(true)
    async function getData(){
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setToursData(data)
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false) 
    }
    getData();
  },[]);
  if(isLoading){
    return (
      <div><Loading/></div>
    )
  };
  return <div>
    <h2>Our Tours</h2>
    <Tours tours={toursData}/>
  </div>;
};
export default App;
