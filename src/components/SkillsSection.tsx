const skillCategories = [
  { title: "Programming Languages", skills: [
    { name: "Python", level: 90, logo: "python/python-original.svg" },
    { name: "JavaScript", level: 85, logo: "javascript/javascript-original.svg" },
    { name: "Java", level: 80, logo: "java/java-original.svg" },
    { name: "C/C++", level: 85, logo: "cplusplus/cplusplus-original.svg" }
  ] },
  { title: "Web Development", skills: [
    { name: "React", level: 85, logo: "react/react-original.svg" },
    { name: "HTML/CSS", level: 90, logo: "html5/html5-original.svg" },
    { name: "Flask", level: 80, logo: "flask/flask-original.svg" },
    { name: "Node.js", level: 75, logo: "nodejs/nodejs-original.svg" }
  ] },
  { title: "Tools & Platforms", skills: [
    { name: "Git/GitHub", level: 85, logo: "git/git-original.svg" },
    { name: "Figma", level: 80, logo: "figma/figma-original.svg" },
    { name: "Android Studio", level: 75, logo: "androidstudio/androidstudio-original.svg" },
    { name: "Salesforce", level: 70, logo: "salesforce/salesforce-original.svg" }
  ] }
];

const technologies = ["Arduino", "ESP32", "STM32", "Raspberry Pi", "PowerApps", "Canva", "Streamlit", "MongoDB", "Firebase", "Docker"];
const softSkills = ["Leadership", "Problem Solving", "Teamwork", "Adaptability", "Communication", "Project Management", "Innovation", "Mentoring"];
const stackNotes = ["REST APIs", "PostgreSQL", "Tailwind CSS", "Express.js", "Linux", "GitHub Actions", "OpenCV", "Llama 2"];

const SkillsSection = () => {
  return (
    <article id="skills" data-scroll-reveal className="pb-20 pt-10 sm:pt-14">
      <div className="container mx-auto min-w-0 px-6">
        <div className="editorial-heading mb-14 max-w-3xl">
          <p className="newspaper-kicker mb-4">Capability index / 02</p>
          <h2 className="mb-5 text-4xl font-bold text-slate-900 lg:text-5xl">Technical Proficiency</h2>
          <p className="text-lg leading-8 text-slate-600">A considered mix of languages, interfaces, platforms, and practical tools used to turn complex ideas into working products.</p>
        </div>

        <div className="grid gap-0 border-y-[3px] border-double border-[#2E3A59]/35 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="flex flex-col border-b border-[#2E3A59]/25 bg-[#eeeae1] px-5 py-6 lg:border-b-0 lg:border-r lg:px-8 lg:pr-12">
            <p className="newspaper-kicker mb-6">The lead story</p>
            <p className="max-w-md font-serif text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-[#2E3A59] sm:text-5xl">Built from fundamentals, shaped by curiosity.</p>
            <p className="mt-6 max-w-md text-sm leading-7 text-slate-600">A practical profile across programming, product interfaces, and the systems behind them. Each figure describes working confidence, not a finished limit.</p>
            <div className="mt-10 border-t border-[#2E3A59]/20 pt-4 text-xs uppercase leading-5 tracking-[0.16em] text-slate-500">
              <p>Coverage: languages · web · platforms</p>
              <p>Method: project practice and applied learning</p>
            </div>
            <div className="mt-auto flex items-end gap-3 border-t border-[#2E3A59]/20 pt-5">
              <span className="font-serif text-5xl font-bold leading-none text-[#2E3A59]">12</span>
              <span className="max-w-[130px] text-xs uppercase leading-5 tracking-[0.14em] text-slate-500">core disciplines indexed</span>
            </div>
          </div>
          <div className="py-6 lg:pl-12">
            <div className="mb-5 grid grid-cols-[1fr_auto] items-end border-b border-[#2E3A59]/20 pb-4">
              <h3 className="font-serif text-2xl font-bold text-[#2E3A59] sm:text-3xl">Capability ledger</h3>
              <span className="newspaper-kicker">All figures in %</span>
            </div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
              {skillCategories.map((category, categoryIndex) => (
                <section key={category.title} aria-labelledby={`skill-category-${categoryIndex}`}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <h3 id={`skill-category-${categoryIndex}`} className="newspaper-kicker">0{categoryIndex + 1} / {category.title}</h3>
                  </div>
                  <div className="divide-y divide-slate-200 border-y border-slate-200">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between gap-4 py-3 text-sm transition-colors hover:bg-[#2E3A59]/[0.03]">
                        <span className="flex min-w-0 items-center gap-2.5 font-medium text-slate-700">
                          <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.logo}`} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain grayscale opacity-75 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100" />
                          <span className="truncate">{skill.name}</span>
                        </span>
                        <span className="font-serif text-xl text-[#2E3A59]">{skill.level}<small className="ml-0.5 font-sans text-[0.6rem] text-slate-400">%</small></span>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="mt-8 border-t border-[#2E3A59]/20 pt-5">
              <div className="mb-3 flex items-baseline justify-between">
                <h3 className="newspaper-kicker">Working stack</h3>
                <span className="text-xs text-slate-400">Tools / systems / practice</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {[...technologies, ...stackNotes].map((item, index) => (
                  <span key={item} className="text-sm text-slate-600 transition-colors hover:text-[#2E3A59]">
                    <span className="mr-1.5 text-xs text-slate-400">{String(index + 1).padStart(2, "0")}</span>{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-0 border-y border-[#2E3A59]/25 lg:grid-cols-2">
          {[{ title: "Technologies & Hardware", items: technologies }, { title: "Soft Skills", items: softSkills }].map(({ title, items }) => (
            <section key={title} className="py-7 lg:px-8 lg:first:pl-0 lg:last:border-l lg:last:border-[#2E3A59]/20">
              <div className="mb-5 flex items-baseline justify-between border-b border-[#2E3A59]/15 pb-3">
                <h3 className="font-serif text-2xl font-bold text-[#2E3A59]">{title}</h3>
                <span className="newspaper-kicker">Index</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-3">
                {items.map((item, index) => <span key={item} className="text-sm text-slate-600 transition-colors duration-300 hover:text-[#2E3A59]"><span className="mr-2 text-xs text-slate-400">{String(index + 1).padStart(2, "0")}</span>{item}</span>)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default SkillsSection;
