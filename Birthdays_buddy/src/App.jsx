import { useState } from "react";
import data from "./data"
import "./myCSS.css"
const App = () => {
  const [friends,setClearAll] = useState(data)

  const handleClickClearAll = () =>{
    setClearAll([])
  };
  return <>
    <main className="mainContent">
      <section>
        <h2>Birthday Reminder - Starter</h2>
        <List friends={friends} />
        <button className="btn btn-width-full" onClick={handleClickClearAll}>Clear All</button>
      </section>
    </main>
  </>
};
const List = ({friends}) => {
  return (
      <ul>
        {
          friends.map((friend) => {
            return <li key={friend.id}>
              <img src={friend.image} alt="avatar" style={{width:"80px"}}/>
              <div>
                <h4>{friend.name}</h4>
                <h5>{friend.age} years</h5>
              </div>
            </li>
          })
        }
      </ul>)
  
}
export default App;
