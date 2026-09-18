import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer data-scroll-reveal className="border-t border-[#2E3A59]/25 bg-white/75">
      <div className="container mx-auto px-4 py-12 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[#2E3A59]/20 pb-8 md:flex-row md:items-end">
          <div className="space-y-4">
            <p className="newspaper-kicker mb-3">The Hisham Journal / Vol. 01</p>
            <p className="font-serif text-3xl font-bold text-[#2E3A59]">The Hisham Journal</p>
            <p className="max-w-md leading-relaxed text-slate-600">
              Computer Science Engineer passionate about creating innovative solutions 
              in web development, IoT, and embedded systems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="newspaper-kicker">Read next</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-slate-600 transition-colors hover:text-[#2E3A59]"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="newspaper-kicker">Correspondence</h3>
            <div className="space-y-2 text-slate-600">
              <p>hishammohd313@gmail.com</p>
              <p>+91 63618 30660</p>
              <p>Mangalore, Karnataka, India</p>
            </div>
            <div className="pt-2">
              <Button 
                onClick={() => scrollToSection("#contact")}
                className="bg-[#2E3A59] text-white hover:bg-[#202940]"
              >
                Let&apos;s Collaborate
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-slate-600 text-sm">
              © {currentYear} K Mohammad Hisham. All rights reserved.
            </p>
            <p className="text-slate-600 text-sm">
              Built with React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;