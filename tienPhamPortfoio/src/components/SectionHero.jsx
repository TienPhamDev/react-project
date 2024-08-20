import tienAvatar from "../assets/avatar.jpg";
import "../myCss/sectionHero.css"

export const SectionHero = ({theme}) => {
  const styleSectionHero = theme === "dark" ? "dark-bg-image-gradient" : "bg-image-gradient"
  const styleDivImg = "md:row-start-1 md:col-start-2 relative after:content-[''] after:left-[8%] after:rounded-2xl after:w-40 after:h-40 after:border-b-4 dark:after:border-cyan-600 after:border-r-4 after:border-cyan-900 after:bottom-[-8%] after:absolute ";
  const styleImg = "z-10 h-40 w-40 rounded-2xl border-4 dark:border-cyan-300 border-cyan-600";
  const styleDivHero = "md:col-start-1"
  const styleH1 = "md:text-left md:p-2 dark:text-slate-100 text-5xl text-slate-800 text-center leading-tight tracking-wide";
  const styleHello = "text-6xl text-inherit font-bold bg-inherit";
  const styleNameMark = "bg-inherit text-cyan-600 font-bold";
  const styleP = "md:text-left md:p-2 p-4 dark:text-slate-100 text-center text-lg mt-4 tracking-wide text-slate-600";
  const styleLocationText = "dark:text-slate-200 bg-inherit font-semibold text-slate-800"
  const styleArrowDownSVG = "size-10"
  const styleDivArrow = "md:col-span-2 relative gap-0 mb-12"
  return <section id="hero" className={`sectionHero ${styleSectionHero}`}>
    <div className={styleDivImg}>
      <img src={tienAvatar} alt="Tien avatar" className={styleImg} />
    </div>
    <div className={styleDivHero}>
      <h1 className={styleH1}><mark className={styleHello}>Hello</mark>, <br />I am <mark className={styleNameMark}>Tien Pham</mark>, Frontend Developer</h1>
      <p className={styleP}>Based in <mark className={styleLocationText}>West Melbourne, Florida,</mark> I'm passionate about creating engaging, digital experiences on the web.</p>
    </div>
    <div className={styleDivArrow}>
      <svg className={`${styleArrowDownSVG} text-cyan-600`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"  />
      </svg>
      <svg className={`${styleArrowDownSVG} text-cyan-100 absolute top-3`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" />
      </svg>
    </div>
  </section>
};
