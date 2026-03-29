export default function WhyAnthropic() {
  const steps = [
    {
      year: "2016-2020",
      place: "LSE, London",
      dotColor: "bg-amber-500",
      description:
        "Politics, Philosophy and Economics. Systems thinking, structured argument, and a lot of writing.",
    },
    {
      year: "2020-2022",
      place: "CentraleSupelec / ESSEC, Paris",
      dotColor: "bg-[#3b82f6]",
      description:
        "Master's in Data Sciences and Business. ML, deep learning, Spark, Hadoop.",
    },
    {
      year: "2023-2024",
      place: "CastorDoc, New York",
      dotColor: "bg-[#059669]",
      description:
        "Data catalog startup. Wrote 100+ articles on data governance and AI reliability. Came away convinced that AI hallucination is a context problem, not a model problem.",
    },
    {
      year: "2024-Present",
      place: "Snowflake, London",
      dotColor: "bg-amber-500",
      description:
        "Technical sales for startups across EMEA. Built 30+ Claude Code skills for pre-sales automation, became the UK AI Champion. Cortex Code (Snowflake's Claude Code fork) is where I learned what it takes to put AI in a customer's hands.",
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
            How I got here.
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
                  I&apos;ve spent a year putting Claude in the hands of
                  startups from the outside. I&apos;d like to do it where the
                  tools are built.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Claude annotation */}
        <p className="mt-16 text-xs font-mono text-zinc-400 italic">
          the path, briefly
        </p>
      </div>
    </section>
  );
}
