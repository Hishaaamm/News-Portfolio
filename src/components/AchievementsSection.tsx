const AchievementsSection = () => {
  const achievements = [
    {
      title: "1st Prize, ADC 2024",
      subtitle: "IIIT Bangalore",
      description: "Nirbhaya Project - IoT-based women's safety device",
      year: "2024",
    },
    {
      title: "Runner-up, HackSummit 2024",
      subtitle: "National Hackathon",
      description: "Wish Web App - Social platform for community engagement",
      year: "2024",
    },
    {
      title: "RC Car Race Winner",
      subtitle: "College Competition",
      description: "1st Place in remote-controlled car racing competition",
      year: "2023",
    },
    {
      title: "Embed Design Challenge",
      subtitle: "2nd Year Achievement",
      description: "Winner of embedded systems design challenge",
      year: "2023",
    }
  ];

  return (
    <article id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="editorial-heading mb-16">
          <p className="newspaper-kicker mb-4">The record / 05</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Recognition & Awards
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Celebrating milestones and recognition in technology competitions and academic excellence
          </p>
        </div>

        <div className="border-y border-[#2E3A59]/20">
          {achievements.map((achievement, index) => (
            <article key={index} className="grid gap-4 border-b border-[#2E3A59]/15 py-6 last:border-b-0 md:grid-cols-[80px_1fr_1fr] md:gap-8">
                <p className="newspaper-kicker">{achievement.year}</p>
                <div><h3 className="mb-1 text-lg font-bold leading-tight text-slate-900">
                  {achievement.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-[#2E3A59]">
                  {achievement.subtitle}
                </p>
                </div><p className="text-sm leading-relaxed text-slate-600">
                  {achievement.description}
                </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "4", label: "Major Awards" },
            { number: "2", label: "Leadership Roles" },
            { number: "50+", label: "Technologies Used" }
          ].map((stat, index) => (
            <div key={index} className="text-center rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.04)]">
              <div className="text-4xl font-bold text-violet-700 mb-2">{stat.number}</div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default AchievementsSection;