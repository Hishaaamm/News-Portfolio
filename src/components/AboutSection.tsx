import { useEffect, useRef } from "react";

const profileFacts = [
  {
    number: "01",
    title: "Software Engineer ·",
    description: "Novigo Solutions Pvt. Ltd."
  },
  {
    number: "02",
    title: "President · Embed Club",
    description: "Leading embedded systems initiatives"
  },
  {
    number: "03",
    title: "Technical Lead · GLUG PACE",
    description: "GNU/Linux Users Group at PACE"
  },
  // {
  //   number: "04",
  //   title: "Based in Mangalore",
  //   description: "Karnataka, India"
  // }
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealItems = section.querySelectorAll<HTMLElement>("[data-about-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("about-item-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={sectionRef} id="about" data-scroll-reveal className="relative overflow-hidden pb-8 pt-14 sm:pb-12 sm:pt-20">
      <div className="absolute right-0 top-24 h-64 w-64 translate-x-1/3 rounded-full bg-[#2E3A59]/5 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="editorial-heading mb-10 grid gap-8 pt-5 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">
          <div className="about-section-index" data-about-reveal>
            <p className="newspaper-kicker">Profile / 01</p>
            <div className="mt-8 hidden space-y-3 border-t border-[#2E3A59]/20 pt-4 text-xs leading-5 text-slate-500 md:block">
              <p>PERSONAL FILE</p>
              <p>FIELD: SOFTWARE, DEVICES, PEOPLE</p>
              <p>ORIGIN: MANGALURU, INDIA</p>
              <p>EDITION: 2026</p>
            </div>
            <span className="about-index-number">01</span>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-[#2E3A59] sm:text-5xl lg:text-6xl">
              Technology with a reason to exist.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              A Software Engineer from Mangalore, Karnataka, with a deep passion for full-stack development, embedded systems, and emerging technologies.
            </p>
          </div>
        </div>

        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-24">
          <div className="about-reveal space-y-7" data-about-reveal>
            <p className="editorial-lede text-xl font-medium leading-8 text-[#2E3A59] sm:text-2xl">
              I work at the point where useful products, intelligent systems, and real human needs meet.
            </p>
            <div className="space-y-5 border-l border-[#2E3A59]/25 pl-5 text-base leading-8 text-slate-600 sm:pl-7">
              <p>
                As the President of the Embed Club and Technical Lead of GLUG PACE at P.A. College of Engineering, I&apos;ve developed strong leadership skills while maintaining my technical expertise. My journey spans across various domains of technology, from web development to IoT innovations.
              </p>
              <p>
                With numerous awards, national-level wins, and hands-on project experience, I bring both technical prowess and leadership excellence to every project I undertake. I&apos;m passionate about creating solutions that make a real impact.
              </p>
            </div>
            <div className="about-signature relative overflow-hidden bg-[#2E3A59] px-5 py-6 text-white sm:px-7">
              <span className="absolute right-5 top-4 text-[0.6rem] uppercase tracking-[0.2em] text-white/50">MH / 2026</span>
              <span className="relative block text-6xl font-black leading-none tracking-[-0.08em] sm:text-7xl">04</span>
              <span className="relative mt-5 block max-w-[220px] text-xs uppercase leading-5 tracking-[0.16em] text-white/65">Ways of working, places of learning, reasons to build</span>
              <span className="absolute -bottom-10 -right-4 text-[9rem] font-black leading-none text-white/[0.05]">H</span>
            </div>
          </div>

          <div className="about-reveal about-reveal-delay" data-about-reveal>
            <div className="mb-6 flex items-end justify-between border-b border-[#2E3A59]/20 pb-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2E3A59]">Experience in context</h3>
              <span className="text-xs text-slate-400">India → Worldwide</span>
            </div>
            <div className="divide-y divide-slate-200 border-b border-slate-200">
              {profileFacts.map((fact) => (
                <div key={fact.number} className="about-fact group grid grid-cols-[42px_minmax(0,1fr)] gap-4 py-5 transition-transform duration-300 hover:translate-x-2 sm:grid-cols-[58px_minmax(0,1fr)] sm:gap-6" data-about-reveal>
                  <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-slate-400 transition-colors duration-300 group-hover:text-[#2E3A59]">{fact.number}</span>
                  <div>
                    <h4 className="text-lg font-semibold text-[#2E3A59] sm:text-xl">{fact.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{fact.description}</p>
                  </div>
                  <span className="col-start-2 h-px w-0 bg-[#2E3A59] transition-all duration-500 group-hover:w-12" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 border-y border-[#2E3A59]/20 bg-[#eeeae1] px-5 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "National-level competition winner",
            "Leadership in technical communities",
            "Full-stack development expertise",
            "IoT and embedded systems specialist"
          ].map((highlight, index) => (
            <div key={highlight} className="about-highlight group flex gap-3 text-sm leading-6 text-slate-600" style={{ animationDelay: `${index * 80}ms` }} data-about-reveal>
              <span className="mt-2 text-xs text-[#2E3A59]">0{index + 1}</span>
              <span className="transition-colors duration-300 group-hover:text-[#2E3A59]">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default AboutSection;