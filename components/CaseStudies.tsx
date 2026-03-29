"use client";

import { useState } from "react";
import { caseStudies } from "@/lib/data";

export default function CaseStudies() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="case-studies" className="bg-[#fafaf8] py-24 px-6 sm:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-sm font-mono font-semibold text-amber-500 tracking-widest">
            02
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-zinc-900 tracking-tight">
            Case Studies
          </h2>
          <p className="mt-4 text-lg text-zinc-500">
            Selected deals, anonymized for confidentiality.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((cs) => {
            const isExpanded = expandedId === cs.id;

            return (
              <div
                key={cs.id}
                className={`rounded-xl bg-white p-6 transition-all duration-200 cursor-pointer ${
                  isExpanded
                    ? "border-2 border-amber-400 shadow-lg md:col-span-2"
                    : "border border-zinc-200 hover:border-zinc-300 hover:shadow-md"
                }`}
                onClick={() => toggle(cs.id)}
              >
                {/* Card header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {/* Industry tag */}
                    <span className="inline-block text-xs font-mono font-semibold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full mb-3">
                      {cs.industry}
                    </span>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-zinc-800">
                      {cs.title}
                    </h3>

                    {/* Deal size */}
                    <p className="mt-1 text-sm font-medium text-zinc-500">
                      {cs.dealSize}
                    </p>

                    {/* Summary */}
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                      {cs.summary}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <span
                    className={`mt-1 text-zinc-400 transition-transform duration-200 flex-shrink-0 ${
                      isExpanded ? "rotate-90" : ""
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 5L12.5 10L7.5 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>

                {/* Read more hint (collapsed) */}
                {!isExpanded && (
                  <p className="mt-4 text-xs font-medium text-amber-600 flex items-center gap-1">
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 5L12.5 10L7.5 15"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>
                )}

                {/* Expanded details */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-zinc-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Challenge */}
                      <div>
                        <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                          Challenge
                        </h4>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {cs.challenge}
                        </p>
                      </div>

                      {/* What I Built */}
                      <div>
                        <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                          What I Built
                        </h4>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {cs.whatIBuilt}
                        </p>
                      </div>

                      {/* Outcome */}
                      <div>
                        <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                          Outcome
                        </h4>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {cs.outcome}
                        </p>
                      </div>

                      {/* SA Relevance */}
                      <div>
                        <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                          SA Relevance
                        </h4>
                        <p className="text-sm leading-relaxed text-zinc-600">
                          {cs.saRelevance}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Claude annotation */}
        <p className="mt-12 text-xs font-mono text-zinc-400 italic">
          4 of 14 deals. anonymized.
        </p>
      </div>
    </section>
  );
}
