import { useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true);
  const [toursData,setToursData] = useState([]);
  
  const removeTour = (id) => {
    const newTour = toursData.filter((tour) => tour.id !== id)
    setToursData(newTour)
  }
  const fetchToursData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json();
      setToursData(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }
  useState(()=>{
    fetchToursData();
  },[])
  if(isLoading){
    return (
      <Loading />
    )
  }
  if(toursData.length === 0){
    return (
      <main>
        <h2>No more Tour</h2>
        <button type="button" className="btn" onClick={()=>fetchToursData()}>Refresh</button>
      </main>
    )
  }
  return (
    <main>
      <h2>Our Tours</h2>
      <Tours tours = {toursData} removeTour={removeTour}/>
    </main>
  )
};
export default App;
