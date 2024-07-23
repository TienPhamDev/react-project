import { useState } from "react";
import data from "./data"

const App = () => {
  const [friends,setClearAll] = useState(data)

  const handleClickClearAll = () =>{
    setClearAll([])
  };
  return <>
    <div>
      <h2>Birthday Reminder - Starter</h2>
      <ul>
        {
          friends.map((friend) => {
            return <li key={friend.id}>
              <img src={friend.image} alt="avatar" />
              <h4>{friend.name}</h4>
              <h5>{friend.age}</h5>
            </li>
          })
        }
      </ul>
      <button className="btn" onClick={handleClickClearAll}>Clear All</button>
    </div>
  </>
};
export default App;
