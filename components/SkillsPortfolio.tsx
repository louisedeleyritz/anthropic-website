'use client'

import { useState } from 'react'
import { skills } from '@/lib/data'
import type { Skill } from '@/lib/data'

const CATEGORIES = ['All', 'Workflow', 'Architecture', 'Presentation', 'Orchestration'] as const

export default function SkillsPortfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const filteredSkills =
    activeFilter === 'All'
      ? skills
      : skills.filter((s) => s.category.toLowerCase() === activeFilter.toLowerCase())

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="skills" className="bg-white py-20 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-4">
          <span className="font-mono text-sm font-semibold text-[#d97706]">03</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Skills Portfolio</h2>
        <p className="mt-3 text-gray-500">
          30+ Claude Code skills I built and use daily. Open source on GitHub.
        </p>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeFilter === cat
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              isExpanded={expandedId === skill.id}
              onToggle={() => toggleExpand(skill.id)}
            />
          ))}
        </div>

        {/* More skills CTA */}
        <div className="mt-10">
          <a
            href="https://github.com/louisedeleyritz"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border-2 border-dashed border-gray-300 py-6 text-center text-gray-500 transition-colors hover:border-gray-400 hover:text-gray-700"
          >
            <span className="text-lg font-medium">+ 24 more skills on GitHub</span>
          </a>
        </div>

        {/* Claude annotation */}
        <p className="mt-6 font-mono text-xs text-gray-400">
          all skills built on Claude Code. source available on github.
        </p>
      </div>
    </section>
  )
}

function SkillCard({
  skill,
  isExpanded,
  onToggle,
}: {
  skill: Skill
  isExpanded: boolean
  onToggle: () => void
}) {
  const isFlagship = skill.flagship

  return (
    <div
      onClick={onToggle}
      className={`cursor-pointer rounded-lg border p-5 transition-shadow hover:shadow-md ${
        isFlagship
          ? 'border-[#d97706] bg-[#fffbeb]'
          : 'border-gray-200 bg-white'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-gray-900">{skill.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{skill.description}</p>
        </div>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
            isFlagship
              ? 'bg-[#d97706] text-white'
              : 'bg-gray-100 text-gray-600'
          }`}
        >
          {isFlagship ? 'FLAGSHIP' : skill.category}
        </span>
      </div>

      {/* Expanded content */}
      {isExpanded && skill.problem && (
        <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Problem</p>
            <p className="mt-1 text-sm text-gray-700">{skill.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Solution</p>
            <p className="mt-1 text-sm text-gray-700">{skill.solution}</p>
          </div>
          {skill.codeSnippet && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Code</p>
              <pre className="mt-1 overflow-x-auto rounded-md bg-gray-900 p-3 text-xs text-gray-100">
                <code className="font-mono">{skill.codeSnippet}</code>
              </pre>
            </div>
          )}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Impact</p>
            <p className="mt-1 text-sm text-gray-700">{skill.impact}</p>
          </div>
        </div>
      )}
    </div>
  )
}
