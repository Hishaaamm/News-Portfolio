import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  { label: "Email desk", value: "hishammohd313@gmail.com", href: "mailto:hishammohd313@gmail.com" },
  { label: "Telephone", value: "+91 63618 30660", href: "tel:+916361830660" },
  { label: "Dateline", value: "Mangalore, Karnataka, India", href: "#" }
];

const ContactSection = () => {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "Project enquiry").trim();
    const message = String(formData.get("message") || "").trim();
    const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`;

    setIsSent(true);
    window.location.href = `mailto:hishammohd313@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <article id="contact" data-scroll-reveal className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="editorial-heading mb-12 grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:items-start md:gap-16">
          <div>
            <p className="newspaper-kicker mb-5">Correspondence / 06</p>
            <p className="hidden max-w-[190px] text-xs uppercase leading-5 tracking-[0.16em] text-slate-500 md:block">For commissions, collaborations, and considered conversations about technology.</p>
          </div>
          <div>
            <h2 className="max-w-4xl font-serif text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl">Let&apos;s make the next story.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Open to freelance projects and technical collaborations. Tell me what you are building, what is difficult, and where you want the idea to go.</p>
          </div>
        </div>

        <div className="grid gap-0 border-y-[3px] border-double border-[#2E3A59]/35 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="border-b border-[#2E3A59]/20 py-7 lg:border-b-0 lg:border-r lg:pr-12">
            <div className="mb-8 flex items-center gap-3 border-b border-[#2E3A59]/20 pb-4 text-xs uppercase tracking-[0.16em] text-[#2E3A59]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              Available for projects
            </div>
            <div className="divide-y divide-slate-200">
              {contactInfo.map((info) => (
                <div key={info.label} className="py-5 first:pt-0">
                  <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{info.label}</p>
                  <a href={info.href} className="mt-2 block break-words font-serif text-xl font-bold text-[#2E3A59] transition-colors hover:text-[#536487]">{info.value}</a>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-[#2E3A59]/20 pt-5 text-sm leading-7 text-slate-600">
              <p>Typical reply: within 1–2 working days.</p>
              <p>Working hours: UTC +05:30.</p>
            </div>
          </div>

          <div className="py-7 lg:pl-12">
            <div className="mb-6 flex items-baseline justify-between border-b border-[#2E3A59]/20 pb-4">
              <h3 className="font-serif text-3xl font-bold text-[#2E3A59]">Send a brief</h3>
              <span className="newspaper-kicker">Open letter</span>
            </div>
            {isSent ? (
              <div className="border border-[#2E3A59]/25 bg-[#eeeae1] p-6 sm:p-8">
                <p className="newspaper-kicker">Message prepared</p>
                <h4 className="mt-4 font-serif text-3xl font-bold text-[#2E3A59]">Your mail app should be open.</h4>
                <p className="mt-4 text-sm leading-7 text-slate-600">The brief has been placed in a new email with your details included. I look forward to reading it.</p>
                <button type="button" onClick={() => setIsSent(false)} className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#2E3A59] underline underline-offset-4">Write another brief</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label htmlFor="firstName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">First name</label><Input id="firstName" name="firstName" required placeholder="Your first name" className="rounded-none border-x-0 border-t-0 border-slate-300 bg-transparent px-0 focus-visible:ring-0" /></div>
                  <div><label htmlFor="lastName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Last name</label><Input id="lastName" name="lastName" required placeholder="Your last name" className="rounded-none border-x-0 border-t-0 border-slate-300 bg-transparent px-0 focus-visible:ring-0" /></div>
                </div>
                <div><label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Email address</label><Input id="email" name="email" type="email" required placeholder="you@example.com" className="rounded-none border-x-0 border-t-0 border-slate-300 bg-transparent px-0 focus-visible:ring-0" /></div>
                <div><label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Subject</label><Input id="subject" name="subject" required placeholder="What are we working on?" className="rounded-none border-x-0 border-t-0 border-slate-300 bg-transparent px-0 focus-visible:ring-0" /></div>
                <div><label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Your brief</label><Textarea id="message" name="message" required placeholder="Tell me about the project, challenge, or idea..." rows={5} className="resize-y rounded-none border-x-0 border-t-0 border-slate-300 bg-transparent px-0 focus-visible:ring-0" /></div>
                <Button type="submit" size="lg" className="w-full rounded-[5px] bg-[#2E3A59] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#202940]">Prepare message <span aria-hidden="true">→</span></Button>
                <p className="text-center text-xs text-slate-400">This opens your email application with the brief ready to send.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactSection;
