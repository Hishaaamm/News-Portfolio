import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Nirbhaya",
    description: "IoT-based women's safety device that won 1st Prize at ADC 2024 at IIIT Bangalore. Features real-time location tracking and emergency alerts.",
    technologies: ["IoT", "Arduino", "GPS", "GSM", "Mobile App"],
    role: "Lead Developer",
    award: "1st Prize ADC 2024",
    category: "IoT",
    imageUrl: "/IMG_0332.jpeg",
    imageAlt: "K Mohammad Hisham and the Nirbhaya project team receiving recognition at ADC 2024"
  },
  {
    title: "Playtone",
    description: "Comprehensive turf booking platform with user management, booking system, and payment integration. Streamlines sports facility reservations.",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
    role: "Full-Stack Developer",
    category: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Digital commerce interface on a laptop"
  },
  {
    title: "ConversAI",
    description: "Advanced chatbot application powered by Llama 2 model and built with Streamlit. Features natural language processing and conversational AI.",
    technologies: ["Python", "Llama 2", "Streamlit", "NLP", "AI/ML"],
    role: "AI Developer",
    category: "AI/ML",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Abstract artificial intelligence visualization"
  },
  {
    title: "Smart Store",
    description: "E-commerce platform developed during internship with modern UI/UX, product management, and shopping cart functionality.",
    technologies: ["React", "Flask", "PostgreSQL", "UI/UX"],
    role: "Frontend Developer",
    category: "E-commerce",
    imageUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Modern online shopping experience"
  },
  {
    title: "Wish Web App",
    description: "Runner-up project at HackSummit 2024. A social platform for sharing and fulfilling wishes with community engagement features.",
    technologies: ["React", "Firebase", "Real-time DB", "PWA"],
    role: "Team Lead",
    award: "Runner-up HackSummit 2024",
    category: "Social Platform",
    imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Team collaborating around a table"
  },
  {
    title: "RC Car Race Winner",
    description: "Custom-built remote-controlled car that won 1st place in college competition. Features advanced motor control and wireless communication.",
    technologies: ["Arduino", "RF Communication", "Motor Control", "Electronics"],
    role: "Hardware Engineer",
    award: "1st Place RC Car Race",
    category: "Hardware",
    imageUrl: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Microcontroller and electronics components"
  }
];

const ProjectsSection = () => {
  const featured = projects[0];

  return (
    <article id="projects" data-scroll-reveal className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="editorial-heading mb-12 grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-start md:gap-16">
          <div>
            <p className="newspaper-kicker mb-5">The project desk / 04</p>
            <p className="hidden max-w-[190px] text-xs uppercase leading-5 tracking-[0.16em] text-slate-500 md:block">Reports from software, hardware, intelligent systems, and the people who use them.</p>
          </div>
          <div>
            <h2 className="max-w-4xl font-serif text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl">Stories built to work.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">A selection of projects where an idea became a working product, a useful tool, or a stronger connection between people and technology.</p>
          </div>
        </div>

        <div className="grid gap-0 border-y-[3px] border-double border-[#2E3A59]/40 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="flex h-full flex-col border-b border-[#2E3A59]/25 lg:border-b-0 lg:border-r">
            <figure className="relative h-[280px] overflow-hidden sm:h-[390px]">
              <img src={featured.imageUrl} alt={featured.imageAlt} className="h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" />
              <figcaption className="absolute bottom-0 left-0 bg-[#2E3A59] px-4 py-2 text-[0.62rem] uppercase tracking-[0.16em] text-white">Front page / ADC 2024 award</figcaption>
            </figure>
            <div className="flex flex-1 flex-col p-6 sm:p-8 lg:p-10">
              <div className="mb-5 flex items-center justify-between gap-4"><span className="newspaper-kicker">Lead story / 01</span><span className="text-xs uppercase tracking-[0.14em] text-slate-400">{featured.category}</span></div>
              <h3 className="font-serif text-4xl font-bold leading-none tracking-[-0.04em] text-[#2E3A59] sm:text-6xl">{featured.title}</h3>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.13em] text-[#2E3A59]">{featured.award}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{featured.description}</p>
              <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#2E3A59]/20 pt-5 text-xs uppercase tracking-[0.12em] text-slate-500">{featured.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="mt-7 flex items-center justify-between gap-4"><span className="text-sm font-semibold text-[#2E3A59]">{featured.role}</span><div className="flex gap-2"><Button size="sm" variant="outline" className="border-[#2E3A59]/25 bg-transparent text-[#2E3A59] hover:bg-[#2E3A59] hover:text-white">Demo</Button><Button size="sm" variant="outline" className="border-[#2E3A59]/25 bg-transparent text-[#2E3A59] hover:bg-[#2E3A59] hover:text-white">Code</Button></div></div>
              <div className="mt-auto pt-8">
                <div className="bg-[#2E3A59] p-5 text-white sm:p-6">
                  <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/55">Project brief / 01</p>
                  <p className="mt-3 max-w-xl font-serif text-2xl leading-tight sm:text-3xl">Technology should arrive when people need it most.</p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">Nirbhaya connects location tracking, emergency alerts, and mobile access in one practical safety system designed for real-world use.</p>
                </div>
              </div>
            </div>
          </article>

          <aside className="bg-[#eeeae1] p-6 sm:p-8 lg:p-10">
            <div className="mb-5 flex items-baseline justify-between border-b border-[#2E3A59]/25 pb-4"><h3 className="font-serif text-2xl font-bold text-[#2E3A59]">Project index</h3><span className="newspaper-kicker">05 reports</span></div>
            <div className="divide-y divide-[#2E3A59]/20">
              {projects.slice(1).map((project, index) => (
                <article key={project.title} className="group py-5 first:pt-2">
                  <div className="flex items-baseline justify-between gap-3"><span className="text-xs font-semibold tracking-[0.14em] text-slate-400">0{index + 2}</span><span className="text-[0.62rem] uppercase tracking-[0.12em] text-slate-400">{project.category}</span></div>
                  <h4 className="mt-2 font-serif text-xl font-bold text-[#2E3A59] transition-colors group-hover:text-[#536487]">{project.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{project.description}</p>
                  <p className="mt-3 text-xs font-medium text-[#2E3A59]">{project.role}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-b border-[#2E3A59]/20 pb-5 text-xs uppercase tracking-[0.16em] text-slate-500 sm:flex-row"><span>Six projects · four disciplines · one practical approach</span><span className="text-[#2E3A59]">Read the full archive →</span></div>
      </div>
    </article>
  );
};

export default ProjectsSection;
