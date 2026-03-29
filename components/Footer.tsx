import { ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111827] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        {/* CTA */}
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Get in touch.
        </h2>
        <p className="mt-4 max-w-2xl text-gray-400">
          Currently exploring opportunities at Anthropic. Happy to talk about any of this.
        </p>

        {/* Email button */}
        <a
          href="mailto:louise.de.leyritz@gmail.com"
          className="mt-8 inline-block rounded-lg bg-[#d97706] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#b45309]"
        >
          louise.de.leyritz@gmail.com
        </a>

        {/* Links grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Connect
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="https://linkedin.com/in/louisedeleyritz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  LinkedIn
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/louisedeleyritz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  GitHub
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@louise.de.leyritz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-gray-300 transition-colors hover:text-white"
                >
                  Medium
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Listen */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Listen
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <span className="text-sm text-gray-300">The Data Couch Podcast</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              Location
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="text-sm text-gray-300">London, UK</li>
              <li className="text-sm text-gray-300">English &amp; French native</li>
            </ul>
          </div>
        </div>

        {/* Final annotation bar */}
        <div className="mt-16 flex items-center justify-between border-t border-gray-800 pt-6">
          <p className="font-mono text-xs text-gray-600">
            built with Claude Opus 4.6
          </p>
          <p className="font-mono text-xs text-gray-600">2026</p>
        </div>
      </div>
    </footer>
  )
}
