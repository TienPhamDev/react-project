import { SectionHero } from "./SectionHero";
import { SectionSkill } from "./SectionSkill";
import { SectionProjects } from "./SectionProjects";
export const MainPage = ({theme}) => {
  return (
    <main>
      <SectionHero theme={theme}/>
      <SectionSkill />
      <SectionProjects />
    </main>
  )
};