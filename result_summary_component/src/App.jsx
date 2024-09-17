import { useState } from 'react';
import "./css/styles.css";
import { Result } from './Result';
import { Summary } from './Summary';
function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Result/>
      <Summary/>
    </main>
  )
}
export default App;
 