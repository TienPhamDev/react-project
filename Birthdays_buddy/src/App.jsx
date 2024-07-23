import data from "./data"

const App = () => {
  const friends = data;
  return <>
    <div>
      <h2>Birthday Reminder - Starter</h2>;
      <ul>
        {
          friends.map((friend) => {
            return <li>
              <img src={friend.image} alt="avatar" />
              <h4>{friend.name}</h4>
              <h5>{friend.age}</h5>
            </li>
          })
        }
      </ul>
      <button>Clear All</button>
    </div>
  </>
};
export default App;
