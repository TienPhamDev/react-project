/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        bgPrimary: "var(--main-bg)",
        tBase: "var(--primary-text)",
        tSecondary:"var(--secondary-text)",
        purple:"var(--purple)",
        bgButton:"var(--btn-bg)"
      }
    },
  },
  plugins: [
    
  ],
  
  
}