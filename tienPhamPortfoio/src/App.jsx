import { useEffect, useState } from "react"
import "./CSS/menu.css"
import "./CSS/modeBtn.css"
import { Header } from "./components/Header"
import { MainPage } from "./components/MainPage"
function App() {
  const [theme,setTheme] = useState("light")
  function handleTheme(){
    setTheme(theme === "dark" ? "light" : "dark")
    const modeButton = document.querySelector("#modeButton")
    if(theme === "dark"){
      modeButton.style.backgroundColor = "var(--color-slate-200)"
      modeButton.firstElementChild.style.opacity = "0";
      modeButton.firstElementChild.style.left = "5%";
      modeButton.children[1].style.left = "25%";
      modeButton.lastElementChild.style.right = "25%";
      modeButton.lastElementChild.style.opacity = "1";
    }   
    if (theme === "light"){
      modeButton.style.backgroundColor = "var(--color-slate-700)"
      modeButton.lastElementChild.style.opacity = "0";
      modeButton.lastElementChild.style.right = "5%";
      modeButton.children[1].style.left = "75%";
      modeButton.firstElementChild.style.left = "25%";
      modeButton.firstElementChild.style.opacity = "1";
    }
  }
  useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    } else{
      document.documentElement.classList.remove("dark")
    }
  },[theme])
  return (<div className="flex flex-col">
    <Header toggleTheme={handleTheme}/>
    <MainPage theme={theme}/>
    
  </div>
  )
};
export default App