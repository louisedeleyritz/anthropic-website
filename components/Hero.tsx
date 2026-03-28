const PROOF_POINTS = [
  { value: '$1.3M', label: 'ACV first year' },
  { value: '30+', label: 'Claude Code skills' },
  { value: '7', label: 'Enterprise deals' },
  { value: '<1yr', label: 'To IC3 promotion' },
]

const SECTION_PREVIEW = [
  { number: '01', title: 'Why Anthropic' },
  { number: '02', title: 'Case Studies' },
  { number: '03', title: 'Skills Portfolio' },
  { number: '04', title: 'Ideas' },
]

export default function Hero() {
  return (
    <section id="hero" className="bg-[#fafaf8]">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Eyebrow */}
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#d97706]">
          Solutions Architect &middot; AI &middot; Startups
        </p>

        {/* Headline */}
        <h1 className="mb-6 max-w-3xl text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          I build the tools that make Claude real for startups.
        </h1>

        {/* Body */}
        <p className="mb-12 max-w-2xl text-lg leading-relaxed text-gray-600">
          Solutions Engineer at Snowflake. $1.3M ACV in my first year. IC3 in
          under 12 months. I built 30+ Claude Code skills that automate the
          entire pre-sales cycle, and I want to do this full-time, at the
          source.
        </p>

        {/* Proof points */}
        <div className="mb-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {PROOF_POINTS.map(({ value, label }) => (
            <div key={label}>
              <p className="text-3xl font-bold text-gray-900">{value}</p>
              <p className="mt-1 text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>

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
          designed &amp; built with Claude Opus 4.6
        </p>
      </div>
    </section>
  )
}
