export default function WhyAnthropic() {
  const steps = [
    {
      year: "2016-2020",
      place: "LSE, London",
      dotColor: "bg-amber-500",
      description:
        "Politics, Philosophy and Economics. Learned to think in systems and argue with precision. Not a traditional SE path, but the foundation for everything that came after.",
    },
    {
      year: "2020-2022",
      place: "CentraleSupelec / ESSEC, Paris",
      dotColor: "bg-[#3b82f6]",
      description:
        "Master's in Data Sciences. ML, deep learning, Spark, Hadoop. This is where I went from 'interested in data' to 'building with data.' The technical foundation I was missing.",
    },
    {
      year: "2023-2024",
      place: "CastorDoc, New York",
      dotColor: "bg-[#059669]",
      description:
        "Data catalog startup. Wrote 100+ articles on data governance and AI reliability. Realized that AI hallucination is not an AI problem. It's a context problem. Semantic layers, data lineage, governed self-service: the prerequisites for trustworthy AI.",
    },
    {
      year: "2024-Present",
      place: "Snowflake, London",
      dotColor: "bg-amber-500",
      description:
        "Technical sales for startups across EMEA. This is where Claude entered my life. Cortex Code (Snowflake's Claude Code fork) changed everything: demos that took days now take minutes. I built 30+ production skills, became the UK AI Champion, and watched startups do the work of 20-person teams.",
    },
  ];

  return (
    <section id="story" className="bg-white py-24 px-6 sm:px-12">
      <div className="mx-auto max-w-3xl">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-mono font-semibold text-amber-500 tracking-widest">
            01
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Why Anthropic
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Every step of my career has been moving toward this.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div key={i} className="relative pl-10">
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full ${step.dotColor} ring-4 ring-white`}
                />

                {/* Content */}
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-sm font-mono font-semibold text-zinc-900">
                      {step.year}
                    </span>
                    <span className="text-sm text-zinc-400">/</span>
                    <span className="text-sm font-medium text-zinc-600">
                      {step.place}
                    </span>
                  </div>
                  <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Final step: Anthropic */}
            <div className="relative pl-10">
              {/* Larger dot with gold ring */}
              <div className="absolute left-[-2px] top-1 h-[19px] w-[19px] rounded-full bg-zinc-900 ring-[3px] ring-amber-400" />

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-sm font-mono font-semibold text-zinc-900">
                    Next
                  </span>
                  <span className="text-sm text-zinc-400">/</span>
                  <span className="text-sm font-medium text-zinc-600">
                    Anthropic
                  </span>
                </div>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                  I&apos;ve seen what Claude does for startups from the outside.
                  Now I want to do this at the source. Help founders adopt AI
                  that actually works, with the depth and care that comes from
                  building the tools myself.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Claude annotation */}
        <p className="mt-16 text-xs font-mono text-zinc-400 italic">
          career arc, told by the person who lived it
        </p>
      </div>
    </section>
  );
}
