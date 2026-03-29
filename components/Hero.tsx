const SECTION_PREVIEW = [
  { number: '01', title: 'Story' },
  { number: '02', title: 'Case Studies' },
  { number: '03', title: 'Skills' },
  { number: '04', title: 'Ideas' },
]

export default function Hero() {
  return (
    <section id="hero" className="bg-[#fafaf8]">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Eyebrow */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d97706]">
          Solutions Engineer &middot; AI &middot; Startups
        </p>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          A year of building with Claude.
        </h1>

        {/* Body */}
        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-gray-600">
          Solutions Engineer at Snowflake, focused on AI for startups across
          EMEA. Over the past year I built 30+ Claude Code skills that automate
          the pre-sales cycle, closed $1.3M ACV, and made IC3 in under twelve
          months. This is the portfolio.
        </p>

        {/* Section preview strip */}
        <div className="mb-14 grid grid-cols-2 border-t border-[#e5e5e5] sm:grid-cols-4">
          {SECTION_PREVIEW.map(({ number, title }, i) => (
            <div
              key={number}
              className={`border-b border-[#e5e5e5] px-0 py-5 pr-4 ${
                i < SECTION_PREVIEW.length - 1
                  ? 'sm:border-r sm:border-b-0'
                  : 'sm:border-b-0'
              } ${i > 0 ? 'sm:pl-6' : ''}`}
            >
              <span className="text-xs font-medium text-gray-400">
                {number}
              </span>
              <p className="mt-1 text-sm font-medium text-gray-700">{title}</p>
            </div>
          ))}
        </div>

        {/* Claude annotation */}
        <p className="font-mono text-xs text-[#c4b5a0]">
          built with Claude Opus 4.6
        </p>
      </div>
    </section>
  )
}
