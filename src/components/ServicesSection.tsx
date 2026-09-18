const awards = [
  {
    year: "2024",
    title: "1st Prize, ADC 2024",
    subtitle: "IIIT Bangalore",
    description: "Nirbhaya Project - IoT-based women's safety device",
    detail: "Real-time location tracking and emergency alerts"
  },
  {
    year: "2024",
    title: "Runner-up, HackSummit 2024",
    subtitle: "National Hackathon",
    description: "Wish Web App - Social platform for community engagement",
    detail: "A community platform for sharing and fulfilling wishes"
  },
  {
    year: "2023",
    title: "RC Car Race Winner",
    subtitle: "College Competition",
    description: "1st Place in remote-controlled car racing competition",
    detail: "Advanced motor control and wireless communication"
  },
  {
    year: "2023",
    title: "Embed Design Challenge",
    subtitle: "2nd Year Achievement",
    description: "Winner of embedded systems design challenge",
    detail: "Practical engineering with embedded systems"
  }
];

const ServicesSection = () => {
  return (
    <article id="awards" data-scroll-reveal className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="editorial-heading mb-12 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">
          <div>
            <p className="newspaper-kicker mb-5">Honours & distinctions / 03</p>
            <p className="hidden max-w-[190px] text-xs uppercase leading-5 tracking-[0.16em] text-slate-500 md:block">A record of the competitions, ideas, and builds that made the front page.</p>
          </div>
          <div>
            <h2 className="max-w-4xl text-4xl font-bold leading-[0.98] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-6xl">The work earned its moment.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Awards that mark the practical side of the journey: building with a team, solving a real problem, and making an idea work outside the page.</p>
          </div>
        </div>

        <div className="border-y-[3px] border-double border-[#2E3A59]/35">
          <div className="award-lead grid gap-8 border-b border-[#2E3A59]/20 bg-[#2E3A59] px-5 py-8 text-white sm:px-8 lg:grid-cols-[120px_minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-12 lg:px-10 lg:py-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Lead award</p>
              <p className="mt-5 font-serif text-5xl font-bold leading-none">{awards[0].year}</p>
            </div>
            <div>
              <h3 className="font-serif text-4xl font-bold leading-none tracking-[-0.04em] sm:text-5xl">{awards[0].title}</h3>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/65">{awards[0].subtitle}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{awards[0].description}. {awards[0].detail}.</p>
            </div>
            <p className="border-t border-white/20 pt-5 text-xs uppercase leading-6 tracking-[0.14em] text-white/55 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">Recognition<br /><span className="text-white">National-level competition winner</span></p>
          </div>

          <div className="grid divide-y divide-[#2E3A59]/20 md:grid-cols-3 md:divide-x md:divide-y-0">
            {awards.slice(1).map((award, index) => (
              <article key={award.title} className="group p-6 transition-colors duration-300 hover:bg-[#2E3A59]/[0.04] sm:p-8">
                <div className="mb-8 flex items-baseline justify-between border-b border-[#2E3A59]/20 pb-4">
                  <span className="newspaper-kicker">0{index + 2} / {award.year}</span>
                  <span className="text-xs text-slate-400">Award</span>
                </div>
                <h3 className="font-serif text-2xl font-bold leading-tight text-[#2E3A59] transition-colors group-hover:text-[#536487]">{award.title}</h3>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">{award.subtitle}</p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{award.description}.</p>
                <p className="mt-5 border-t border-[#2E3A59]/15 pt-4 text-xs leading-6 text-slate-500">{award.detail}.</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 border-y border-[#2E3A59]/20 sm:grid-cols-4">
          {[
            { number: "10+", label: "Projects completed" },
            { number: "4", label: "Major awards" },
            { number: "2", label: "Leadership roles" },
            { number: "50+", label: "Technologies used" }
          ].map((stat) => (
            <div key={stat.label} className="border-r border-[#2E3A59]/20 px-3 py-5 last:border-r-0 sm:px-6">
              <p className="font-serif text-3xl font-bold text-[#2E3A59] sm:text-4xl">{stat.number}</p>
              <p className="mt-1 text-xs uppercase leading-5 tracking-[0.12em] text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ServicesSection;
