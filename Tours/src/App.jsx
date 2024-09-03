import { useEffect } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";
import { useState } from "react";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const[ToursData,setToursData] = useState([]);
  useEffect(()=>{
    async function getData(){
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setToursData(data)
      } catch (error) {
        console.log(error);
      }
      
    }
    getData();
  },[]);
  return <div>
    <Tours/>
    <Tour/>
    <Loading/>
  </div>;
};
export default App;
