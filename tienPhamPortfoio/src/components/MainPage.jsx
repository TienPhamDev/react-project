import { SectionHero } from "./SectionHero";
import { SectionSkill } from "./SectionSkill";
import { SectionProjects } from "./SectionProjects";
import { SectionContact } from "./SectionContact";
export const MainPage = ({theme}) => {
  return (
    <main>
      <SectionHero theme={theme}/>
      <SectionSkill />
      <SectionProjects />
      <SectionContact/>
    </main>
  )
};
