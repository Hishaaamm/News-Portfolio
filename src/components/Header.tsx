import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Awards", href: "#awards" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0);
      const current = navItems.reduce((visible, item) => {
        const section = document.querySelector(item.href) as HTMLElement | null;
        return section && section.getBoundingClientRect().top <= 140 ? section.id : visible;
      }, "home");
      setActiveSection(current);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        const headerOffset = 190; // Account for the three-row newspaper masthead
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-xl">
      <div className="pointer-events-none fixed left-0 top-0 h-0.5 bg-[#2E3A59] transition-[width] duration-150" style={{ width: `${scrollProgress}%` }} />
      <nav className="px-4 transition-shadow duration-300 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center justify-between border-b border-[#2E3A59]/15 py-2 text-[0.58rem] uppercase tracking-[0.2em] text-slate-500">
            <span>Friday, 18 September 2026</span>
            <span className="hidden sm:block">Mangaluru · India · Worldwide</span>
            <span>Vol. 01 / No. 01</span>
          </div>

          <div className="relative flex min-h-[5.25rem] items-center justify-center border-b border-[#2E3A59]/30 py-3">
            <button onClick={() => scrollToSection("#home")} className="group text-center" aria-label="Return to home">
              <span className="block font-serif text-3xl font-bold tracking-[-0.04em] text-[#2E3A59] transition-colors duration-300 group-hover:text-[#202940] sm:text-4xl">The Hisham Times</span>
              <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.28em] text-slate-500">Technology · Ideas · Execution</span>
            </button>
            
          </div>

          <div className="flex min-h-12 items-center justify-between gap-4 border-b border-[#2E3A59]/25">
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative border-l border-transparent px-3 py-2 text-xs transition-all duration-200 hover:border-[#2E3A59] hover:text-[#2E3A59] xl:text-sm ${activeSection === item.href.slice(1) ? "border-[#2E3A59] font-semibold text-[#2E3A59]" : "text-slate-500"}`}
              >
                {item.name}
                <span className={`absolute bottom-1.5 left-3 h-px bg-[#2E3A59] transition-all duration-300 ${activeSection === item.href.slice(1) ? "w-4" : "w-0"}`} />
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <span className="hidden text-[0.6rem] uppercase tracking-[0.18em] text-slate-400 xl:block">Hello, I'm Hisham</span>
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="h-9 bg-[#2E3A59] px-4 text-xs text-white shadow-[0_10px_25px_rgba(46,58,89,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#202940]"
            >
              Connect with me
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-none text-[#2E3A59] hover:bg-slate-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          </div>

        {isMenuOpen && (
          <div className="border-t border-slate-200 pb-4 pt-4 lg:hidden">
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`rounded-[5px] border-l-2 px-3 py-2.5 text-left text-sm transition-colors hover:bg-slate-100 hover:text-[#2E3A59] ${activeSection === item.href.slice(1) ? "border-[#2E3A59] bg-slate-100 font-semibold text-[#2E3A59]" : "border-transparent text-slate-600"}`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="col-span-2 mt-2 bg-[#2E3A59] text-white hover:bg-[#202940] sm:col-span-1"
              >
                Let&apos;s work together
              </Button>
            </div>
          </div>
        )}
        </div>
      </nav>
    </header>
  );
};

export default Header;