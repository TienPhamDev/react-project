import { useEffect, useState } from "react"
import "./myCss/menu.css"
import "./myCss/modeSpanStyle.css"
function App() {
  return (
    <Header/>
  )
};
function Header(){
  const styleHeaderEl = "fixed top-0 left-0 right-0 h-16 bg-slate-100 flex items-center justify-between px-4 py-8 shadow-lg"
  const styleLogo = "text-cyan-700 font-bold"

  //state 
  const [mode,setMode] = useState(false)

  function handleMode(){
    setMode(!mode)
    const moonSvg = document.querySelector("#moonSvg")
    const sunSvg = document.querySelector("#sunSvg")
    const modeButton = document.querySelector("#modeButton")
    if(mode){
      modeButton.children[1].style.left = "-50%";
      sunSvg.style.opacity = "1";
      sunSvg.style.transform ="scale(1)";
      moonSvg.style.opacity = "0";
      moonSvg.style.transition = "all 0.3s ease-out";
      moonSvg.style.transform = "scale(0)";
      moonSvg.style.zIndex = "-10";
    } 
    if (!mode){
      modeButton.firstElementChild.style.left = "0";
      moonSvg.style.opacity = "1";
      moonSvg.style.transform ="scale(1)";
      sunSvg.style.opacity = "0";
      sunSvg.style.transition = "all 0.3s ease-out";
      sunSvg.style.transform = "scale(0)";
      sunSvg.style.zIndex = "-10";
    }
  }
  const [menuIsOpen,setMenuIsOpen] = useState(false)
  function handleMenuIsOpen(){
    setMenuIsOpen(!menuIsOpen)
  }
  return <header className={styleHeaderEl}>
    <a className={styleLogo} href="#"><span>{"< TPDev />"}</span></a>
    <button id="modeButton" onClick={handleMode}>
      
        <svg id="moonSvg"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className="size-6">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
        </svg>
        <span></span>
        <svg id="sunSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className="size-6">
          <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>

      
        
    </button>
    <nav className="">
      <button onClick={handleMenuIsOpen}>
        { !menuIsOpen ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0e7490" 
            className="size-6 transition duration-300">
          <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg> 
          :
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0e7490" 
            className="size-6 transition duration-300">
          <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
        }
      </button>
      <ul className={menuIsOpen || "hidden"} id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>      
    </nav>
  </header>
}
export default App