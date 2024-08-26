import { SectionHero } from "./SectionHero";
import { SectionSkill } from "./SectionSkill";
import { SectionProjects } from "./SectionProjects";
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
const SectionContact = () => {
  return (
    <section>
      <h2>Get In Touch</h2>
      <p>Interested in working with me or hiring me for your next project? Drop me a line and let's make it happen.
        <br />
        Get in touch today and let's bring your ideas to life.
      </p>
    </section>
  )
}