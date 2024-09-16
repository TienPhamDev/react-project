import { useState } from 'react';
import "./css/styles.css";
import { Result } from './Result';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Result/>
    </main>
  )
}
export default App;
