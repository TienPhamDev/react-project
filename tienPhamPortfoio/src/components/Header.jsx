import { useState, useEffect } from "react";

export function Header({ toggleTheme }) {
  const styleHeaderEl = "fixed top-0 dark:text-slate-100 lg:px-52 dark:bg-black w-full bg-[rgba(255,255,255,0.6)] z-10 flex items-center justify-between px-2 py-4 shadow-lg";
  const styleLogo = "text-cyan-600 font-bold md:order-first";

  //state 
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  // dark mode toggle button
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width:768px)");
    const navMenu = document.querySelector("#menu");
    mediaQuery.addEventListener("change", (e) => {
      if (menuIsOpen === true && e.matches) {
        navMenu.style.visibility = "visible";
        navMenu.style.opacity = "1";
        navMenu.style.zIndex = "10";
      }
    });
  }, [menuIsOpen]);
  function handleMenuIsOpen() {
    setMenuIsOpen(!menuIsOpen);
    const navMenu = document.querySelector("#menu");
    if (!menuIsOpen) {
      navMenu.style.visibility = "visible";
      navMenu.style.opacity = "1";
      navMenu.style.zIndex = "10";
    }
    if (menuIsOpen) {
      navMenu.style.visibility = "hidden";
      navMenu.style.opacity = "0";
      navMenu.style.zIndex = "-10";
    }
  }
  return <header className={styleHeaderEl}>
    <a className={styleLogo} href="#"><span>{"< TPDev />"}</span></a>
    <button id="modeButton" onClick={toggleTheme} className="md:order-last">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="size-6" >
        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
      </svg>
      <span></span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
        className="size-6" >
        <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
      </svg>
    </button>
    <nav className="order-last md:order-3">
      <button onClick={handleMenuIsOpen} className="md:hidden">
        {!menuIsOpen ?
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="size-6 text-cyan-600">
            <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className="size-6 text-cyan-600">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>}
      </button>
      <ul className="dark:bg-[rgba(0,0,0,0.8)]" id="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </header>;
}
