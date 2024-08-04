import tienAvatar from "../assets/tien.jpg";

export const SectionHero = () => {
  const styleSectionHero = "h-[100vh] flex flex-col justify-start items-center gap-8 pt-12 dark:bg-red-900 px-4";
  const styleDivImg = "relative after:content-[''] after:left-[8%] after:rounded-2xl after:border-4 after:border-cyan-900 after:w-full after:h-full after:z-[-99] after:bottom-[-8%] after:absolute ";
  const styleImg = "h-40 w-40 rounded-2xl border-4 border-cyan-600";
  const styleH1 = "text-5xl text-slate-800 text-center leading-tight tracking-wide";
  const styleHello = "text-6xl text-inherit font-bold bg-inherit";
  const styleNameMark = "bg-inherit text-cyan-600 font-bold";
  const styleP = "text-center text-lg mt-4 tracking-wide text-slate-600";
  const styleLocationText = "bg-inherit font-semibold text-slate-800"
  const styleArrowDownSVG = "size-10"
  return <section id="hero" className={styleSectionHero}>
    <div className={styleDivImg}>
      <img src={tienAvatar} alt="Tien avatar" className={styleImg} />
    </div>
    <div>
      <h1 className={styleH1}><mark className={styleHello}>Hello</mark>, <br />I am <mark className={styleNameMark}>Tien Pham</mark>, Frontend Developer</h1>
      <p className={styleP}>Based in <mark className={styleLocationText}>West Melbourne, Florida,</mark> I'm passionate about creating engaging, digital experiences on the web.</p>
    </div>
    <div className="relative gap-0">
      <svg className={`${styleArrowDownSVG} text-cyan-600`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"  />
      </svg>
      <svg className={`${styleArrowDownSVG} text-cyan-100 absolute top-3`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" />
      </svg>
    </div>
  </section>
};
