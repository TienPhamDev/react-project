import goalsImg from "./assets/goals.jpg"
import './App.css'
import CourseCoal from './component/CourseCoal'
import Header from "./component/Header"
import { useState } from "react"

type CourseGoal = {
  title : string
  description : string
  id : number
}

function App() {
  const [goals,setGoals] = useState<CourseGoal[]>([])
  const handleAddCourse = ()=>{

  }
  return (
    <>
      <Header image={{src: goalsImg, alt:"a list of goal"}}>
        <h1>Your Course Goal</h1>
      </Header>
      <button onClick={handleAddCourse}>Add Course</button>
      <CourseCoal title='Learn React + TS'>
        <p>test</p>  
      </CourseCoal>

    </>
  )
}

export default App
