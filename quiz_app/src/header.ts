import { Quizzes } from "./app"; // Import the Quizzes interface
import modeBtn from "./modeBtn"; // Import the modeBtn function to handle theme switching

// Define the header function which sets the HTML content for the header element
export const header = (element: HTMLElement, quizz?: Quizzes): void => {
  let titleElement = "";

  // Check if a quiz object is provided; if not, leave the title element empty
  if (quizz === undefined || quizz === null) {
    titleElement = ''; 
  } else {
    // If a quiz is provided, create the HTML content for the quiz title and icon
    titleElement = `<span id=${quizz.title} class="rounded-lg w-[2.4rem] h-[2.4rem] flex justify-center">
                      <img src="${quizz?.icon}" alt="${quizz?.title}">
                    </span> 
                    <h1 class="text-3xl font-bold tracking-wide">${quizz?.title}</h1>`;
  }

  // Set the innerHTML of the element to include the quiz title (if available) and mode switch button
  element.innerHTML = `
    <span class="titleQuizz flex items-center gap-4">
      ${titleElement} <!-- Render the quiz title and icon if available -->
    </span>
    <span class="mode flex justify-between gap-2 items-center">
      <!-- Render the sun icon for light mode -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12 1.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5A.75.75 0 0 1 12 1.5Zm0 15a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0-1.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm9.75-2.25a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5ZM12 19.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 1 1-1.5 0v-1.5a.75.75 0 0 1 .75-.75Zm-8.25-6.75a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 1 0 0 1.5h1.5Zm.969-8.031a.75.75 0 0 1 1.062 0l1.5 1.5a.751.751 0 0 1-1.062 1.062l-1.5-1.5a.75.75 0 0 1 0-1.062Zm1.062 14.562a.75.75 0 1 1-1.062-1.06l1.5-1.5a.75.75 0 1 1 1.062 1.06l-1.5 1.5Zm13.5-14.562a.75.75 0 0 0-1.062 0l-1.5 1.5a.751.751 0 0 0 1.062 1.062l1.5-1.5a.75.75 0 0 0 0-1.062Zm-1.062 14.562a.75.75 0 0 0 1.062-1.06l-1.5-1.5a.75.75 0 0 0-1.062 1.06l1.5 1.5Z"/>
      </svg>
      
      <!-- Render the button to toggle dark mode -->
      <button type="button" class="modeBtn flex transition duration-300 items-center bg-pPurple w-[4.4rem] h-[2.4rem] rounded-3xl p-2">
        <span class="h-[1.8rem] w-[1.8rem] rounded-2xl bg-white"></span> <!-- Toggle button circle -->
      </button>
      
      <!-- Render the moon icon for dark mode -->
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path fill="currentColor" d="M11.775 4.522A7.5 7.5 0 1 1 4.898 16.09c2.104-.57 4.974-1.953 6.24-5.326.828-2.211.876-4.408.637-6.241ZM20.184 12a8.997 8.997 0 0 0-9.315-8.994.75.75 0 0 0-.713.888c.345 1.821.42 4.092-.424 6.342-1.2 3.201-4.203 4.26-6.115 4.606a.75.75 0 0 0-.542 1.066A9 9 0 0 0 20.184 12Z"/>
      </svg>
    </span>`;

  // Initialize the mode button functionality (for toggling dark/light mode)
  modeBtn(document.querySelector<HTMLButtonElement>(".modeBtn")!);
};