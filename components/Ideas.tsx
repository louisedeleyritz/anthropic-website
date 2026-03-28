import { FileText, Headphones } from 'lucide-react'

const articles = [
  {
    title: "LLMs don't cut it for Data Analytics",
    description:
      '7 failure points in LLM-driven analysis. LLMs should surface vetted assets, not generate from scratch.',
    url: 'https://medium.com/castor-app/llms-dont-cut-it-for-data-analytics-castordoc-c8c8845f307f',
  },
  {
    title: 'Tracing Value: 6 Use Cases for Data Lineage',
    description:
      'Lineage taxonomy that maps directly to AI citation chains. If you can trace data, you can trace reasoning.',
    url: 'https://medium.com/@louise.de.leyritz/tracing-value-6-use-cases-for-data-lineage-fae59cd5a971',
  },
  {
    title: 'Your Guide to the EU AI Act',
    description:
      'AI governance and the regulatory landscape shaping how organizations deploy AI.',
    url: 'https://medium.com/castor-app/understanding-the-eu-ai-act-fb000b5c4a54',
  },
]

export default function Ideas() {
  return (
    <section id="ideas" className="py-20 px-6" style={{ backgroundColor: '#fafaf8' }}>
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-4">
          <span className="font-mono text-sm font-semibold text-[#d97706]">04</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Ideas</h2>
        <p className="mt-3 text-gray-500">
          Writing I&apos;ve done on AI reliability, data governance, and the trust problem.
        </p>

        {/* Core thesis callout */}
        <div className="mt-10 rounded-r-lg border-l-[3px] border-[#d97706] bg-[#fffbeb] p-6">
          <p className="text-lg font-semibold text-gray-900">
            &ldquo;AI reliability is not primarily an AI problem. It is a context problem.&rdquo;
          </p>
          <p className="mt-2 text-sm text-gray-600">
            The models are good enough. What they lack is the structured context, governed data, and
            traceable reasoning chains that make outputs trustworthy. The reliability gap is a data
            problem, not a model problem.
          </p>
        </div>

        {/* Article cards */}
        <div className="mt-10 space-y-5">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="mt-0.5 shrink-0 text-gray-400">
                <FileText size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-gray-900">{article.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{article.description}</p>
              </div>
            </a>
          ))}

          {/* Podcast card */}
          <div className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-5">
            <div className="mt-0.5 shrink-0 text-[#d97706]">
              <Headphones size={20} />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold text-gray-900">The Data Couch Podcast</h3>
              <p className="mt-1 text-sm text-gray-500">
                Host and producer. Interviews with data leaders on governance, AI adoption, and the
                modern stack.
              </p>
            </div>
          </div>
        </div>

        {/* Claude annotation */}
        <p className="mt-6 font-mono text-xs text-gray-400">
          100+ articles published. these are the ones that matter most.
        </p>
      </div>
    </section>
  )
}
