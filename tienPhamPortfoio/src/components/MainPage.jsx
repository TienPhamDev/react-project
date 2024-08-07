import { SectionHero } from "./SectionHero";
import reactSvg from "../assets/react.svg";
import { SectionSkill } from "./SectionSkill";
export const MainPage = ({theme}) => {
  return (
    <main>
      <SectionHero theme={theme}/>
      <SectionSkill />
    </main>
  )
};

