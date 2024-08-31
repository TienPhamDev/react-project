import { Hero,Contact,Skills,Projects } from "./Sections";
export const MainPage = ({theme}) => {
  return (
    <main>
      <Hero theme={theme}/>
      <Skills />
      <Projects />
      <Contact/>
    </main>
  )
};
