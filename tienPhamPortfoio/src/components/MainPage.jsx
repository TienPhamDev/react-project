import { SectionHero } from "./SectionHero";
import { SectionSkill } from "./SectionSkill";
export const MainPage = ({theme}) => {
  return (
    <main>
      <SectionHero theme={theme}/>
      <SectionSkill />
    </main>
  )
};

