import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const scrollToSection = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const HeroSection = () => {
  return (
    <article id="home" className="relative flex min-h-[680px] items-center overflow-hidden pt-[12rem] sm:min-h-screen sm:pt-[13rem] lg:pt-[14rem]">
      <div className="absolute inset-x-0 top-24 h-px bg-[#2E3A59]/10" />
      <div className="absolute right-0 top-28 h-px w-1/3 bg-[#2E3A59]/15" />

      <div className="container relative z-10 mx-auto grid w-full grid-cols-1 gap-12 px-4 pb-12 sm:px-6 md:grid-cols-[minmax(0,1.12fr)_minmax(260px,0.88fr)] md:items-center md:gap-8 lg:gap-14">
        <div className="animate-[hero-enter_700ms_ease-out_both]">
          <div className="mb-8 flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-10 bg-[#2E3A59]" />
            <span>Software Engineer · India</span>
          </div>
          <h1 className="hero-name max-w-4xl text-[clamp(3.2rem,6.7vw,6.8rem)] font-black leading-[0.92] tracking-[-0.055em] text-[#2E3A59]">
            K Mohammad <span className="text-gradient hero-name-accent">Hisham</span>
          </h1>
          <h2 className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-slate-700 sm:text-xl md:text-[1.35rem]">
            Software Developer building useful, thoughtful digital products
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base md:text-[1.05rem]">
            I’m Hisham Mohammad, a Software Engineering graduate from Mangaluru, passionate about AI, software development, and emerging technologies. I&apos;m here to build innovative solutions that solve real-world problems.
          </p>

          <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="group bg-[#2E3A59] text-white shadow-[0_20px_40px_rgba(46,58,89,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#202940]"
            >
              Explore Me <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="border-[#2E3A59]/25 bg-white text-[#2E3A59] transition-all duration-300 hover:-translate-y-1 hover:border-[#2E3A59] hover:bg-slate-100"
            >
              Contact Me
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-xs text-slate-500 sm:text-sm">
            <span>Currently open to thoughtful collaborations</span>
            
            
          </div>
        </div>

        <div className="relative min-h-[360px] animate-[hero-enter_900ms_180ms_ease-out_both] sm:min-h-[420px] lg:min-h-[500px]">
          <div className="absolute inset-0 isolate overflow-hidden border-y-[3px] border-[#2E3A59]/70 bg-[#eeeae1] px-6 py-7 text-[#2E3A59] sm:px-10 sm:py-10">
            <div className="hero-grid absolute -inset-8 opacity-30 [background-image:linear-gradient(rgba(46,58,89,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(46,58,89,0.12)_1px,transparent_1px)] [background-size:34px_34px]" />
            <div className="hero-scan absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#2E3A59]/[0.06] to-transparent" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between gap-4 border-b border-[#2E3A59]/25 pb-4 text-[0.65rem] uppercase tracking-[0.2em] text-[#2E3A59]/65">
                <span>Field notes / 01</span>
                <span>12.91° N · 74.85° E</span>
              </div>

              <div className="relative py-8">
                <div className="absolute left-[18%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-[#2E3A59]/30 animate-[hero-ring_4s_ease-in-out_infinite]" />
                <div className="absolute left-[18%] top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E3A59] animate-[hero-pulse_2.8s_ease-in-out_infinite]" />
                <p className="relative pl-[34%] font-serif text-[clamp(2rem,4.6vw,4.25rem)] font-black leading-[0.9] tracking-[-0.05em]">
                  Ideas that
                  <br />
                  travel.
                </p>
              </div>

              <div className="relative grid grid-cols-2 gap-6 border-t border-[#2E3A59]/25 pt-5 text-sm">
                <div>
                  <p className="text-[#2E3A59]/55">Based in</p>
                  <p className="mt-1 font-medium">Mangaluru, India</p>
                </div>
                <div>
                  <p className="text-[#2E3A59]/55">Works across</p>
                  <p className="mt-1 font-medium">Code · Devices · People</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 bg-white px-4 py-3 text-xs uppercase tracking-[0.18em] text-[#2E3A59] shadow-[0_15px_40px_rgba(46,58,89,0.15)] animate-[hero-float_5s_ease-in-out_infinite] sm:-left-6">
            Build · Learn · Lead
          </div>
          <div className="absolute -right-2 -top-5 bg-white px-4 py-3 text-xs uppercase tracking-[0.18em] text-slate-500 shadow-[0_15px_40px_rgba(46,58,89,0.15)] animate-[hero-float_5s_1.2s_ease-in-out_infinite] sm:-right-6">
            UTC +05:30
          </div>
        </div>
      </div>
    </article>
  );
};

export default HeroSection;