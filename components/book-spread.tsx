'use client'

import React from 'react'
import {
  ArrowRight,
  ExternalLink,
  Code2,
  Award,
  Briefcase,
  BookOpen,
  Mail,
  FolderDown,
  Layers,
  Terminal,
  Cpu,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import {
  PROFILE,
  PROJECTS,
  ACHIEVEMENTS,
  SKILL_GROUPS,
  TRAININGS,
  EDUCATION,
  STORY_STAGES,
  CHAPTERS,
  Project,
} from '@/lib/portfolio-data'
import { ImageWithFallback } from './image-with-fallback'

interface BookSpreadProps {
  currentPage: number
  onJumpToPage: (page: number) => void
  onSelectProject: (project: Project) => void
  onOpenRecruiter: () => void
  onZoomImage: (src: string, alt: string) => void
}

export function BookSpread({
  currentPage,
  onJumpToPage,
  onSelectProject,
  onOpenRecruiter,
  onZoomImage,
}: BookSpreadProps) {
  // CHAPTER 0: COVER
  if (currentPage === 0) {
    return (
      <div className="relative min-h-[580px] w-full overflow-hidden rounded-[3px] bg-[#242522] text-[#F7F6F1] shadow-2xl">
        <div className="absolute inset-4 rounded-[2px] border border-[#F7F6F1]/20 pointer-events-none" />

        <div className="relative z-10 flex h-full min-h-[580px] flex-col justify-between p-6 sm:p-10 md:p-14">
          {/* Top Folio */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F7F6F1]/15 pb-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-[#B7AD62] uppercase">
                PORTFOLIO / VOL. 2026
              </span>
              <span className="text-[#85857D]">·</span>
              <span className="font-mono text-xs text-[#85857D] uppercase">
                FIRST EDITION
              </span>
            </div>

            <button
              type="button"
              onClick={onOpenRecruiter}
              className="inline-flex items-center gap-2 rounded-[2px] border border-[#B7AD62] bg-[#B7AD62]/10 px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[#B7AD62] transition-colors hover:bg-[#B7AD62] hover:text-[#242522]"
            >
              <Briefcase size={13} />
              <span>Recruiter Overview (30s)</span>
            </button>
          </div>

          {/* Main Title Spread */}
          <div className="grid grid-cols-1 items-center gap-8 py-6 md:grid-cols-12 md:gap-12">
            <div className="space-y-4 md:col-span-7">
              <span className="font-mono text-xs tracking-widest text-[#85857D] uppercase">
                A DEVELOPER MONOGRAPH
              </span>
              <h1 className="font-serif text-5xl font-bold tracking-tight text-[#F7F6F1] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9]">
                KISHORE
                <br />
                <span className="font-normal italic text-[#B7AD62]">KUMAR G</span>
              </h1>
              <div className="h-1 w-20 bg-[#B7AD62]" />
              <p className="font-serif text-xl sm:text-2xl text-[#E3E1D9] max-w-lg leading-relaxed">
                From solving algorithmic problems to engineering full-stack products and agentic AI systems.
              </p>
              <p className="font-mono text-xs tracking-wider text-[#85857D] uppercase">
                B.Tech CSBS · Sri Eshwar College of Engineering (2027)
              </p>
            </div>

            <div className="flex flex-col items-center justify-center md:col-span-5">
              <div className="relative group max-w-[260px] sm:max-w-[280px]">
                <div className="absolute -inset-2 rounded-[2px] bg-[#B7AD62]/20 rotate-3 transition-transform group-hover:rotate-1" />
                <div className="relative overflow-hidden rounded-[2px] border-4 border-[#F7F6F1] shadow-2xl bg-[#1C1D1A]">
                  <img
                    src={`${PROFILE.portraitImage}?v=2`}
                    alt={PROFILE.name}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                    style={{ filter: 'none' }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-[#242522]/90 px-3 py-1 text-center font-mono text-[9px] uppercase tracking-wider text-[#F7F6F1]">
                    Candidate Portrait · Kishore Kumar G
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F7F6F1]/15 pt-5">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onJumpToPage(1)}
                className="inline-flex items-center gap-2 rounded-[2px] bg-[#F7F6F1] px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-[#242522] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#B7AD62]"
              >
                <span>Open Book</span>
                <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => onJumpToPage(1)}
                className="inline-flex items-center gap-2 rounded-[2px] border border-[#F7F6F1]/40 bg-transparent px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] hover:border-[#F7F6F1]"
              >
                <BookOpen size={13} />
                <span>Table of Contents</span>
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#85857D]">
              <span>540+ LeetCode Solved</span>
              <span>·</span>
              <span>4 Podium Awards</span>
              <span>·</span>
              <span>10 Projects</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // CHAPTER 1: TABLE OF CONTENTS / INDEX
  if (currentPage === 1) {
    return (
      <div className="space-y-6">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 01 / Navigation
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Table of Contents
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Structured chronological roadmap from programming foundations to modern agentic systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {CHAPTERS.slice(1).map((ch, idx) => (
            <button
              key={ch.id}
              type="button"
              onClick={() => onJumpToPage(ch.pageIndex)}
              className="group flex items-center justify-between rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B7AD62] hover:shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-[#F4F1E8] font-mono text-xs font-bold text-[#7E7638] group-hover:bg-[#B7AD62] group-hover:text-[#242522]">
                  {ch.number}
                </span>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#242522] group-hover:text-[#7E7638]">
                    {ch.title}
                  </h3>
                  <span className="font-mono text-[10px] tracking-wider text-[#85857D] uppercase">
                    {ch.label}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-[#85857D]">
                  p.{String(ch.pageIndex + 1).padStart(2, '0')}
                </span>
                <ArrowRight
                  size={14}
                  className="text-[#85857D] transition-transform group-hover:translate-x-1 group-hover:text-[#7E7638]"
                />
              </div>
            </button>
          ))}
        </div>

        {/* Quick dossier banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[2px] border border-[#B7AD62]/40 bg-[#F4F1E8] p-5">
          <div className="space-y-1">
            <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
              Recruiter Quick Briefing
            </span>
            <p className="text-sm font-medium text-[#242522]">
              Need to evaluate Kishore&apos;s background in under a minute?
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenRecruiter}
            className="shrink-0 rounded-[2px] bg-[#242522] px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] hover:bg-[#353730]"
          >
            Launch Recruiter Overview
          </button>
        </div>
      </div>
    )
  }

  // CHAPTER 2: STORY TIMELINE & INTRODUCTION
  if (currentPage === 2) {
    return (
      <div className="space-y-8">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 02 / The Trajectory
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            From Solving Problems to Building Intelligence
          </h2>
          <p className="mt-2 text-base leading-relaxed text-[#242522]/90 max-w-3xl italic">
            &ldquo;{PROFILE.introduction}&rdquo;
          </p>
        </div>

        {/* 5 Stages Story Timeline */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold tracking-widest text-[#7E7638] uppercase">
              Five Progressive Stages of Development
            </span>
            <span className="font-mono text-[10px] text-[#85857D]">Honest Progression</span>
          </div>

          <div className="space-y-4">
            {STORY_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="group rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-5 shadow-sm transition-all hover:border-[#B7AD62]"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-center">
                  <div className="space-y-2 md:col-span-8">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#B7AD62]">
                        {stage.number}
                      </span>
                      <span className="text-[#85857D]">·</span>
                      <span className="font-mono text-xs uppercase tracking-wider text-[#7E7638]">
                        {stage.title}
                      </span>
                      <span
                        className={`rounded-[2px] px-2 py-0.5 font-mono text-[9px] uppercase ${stage.statusType === 'built'
                            ? 'bg-[#B7AD62]/20 text-[#7E7638]'
                            : stage.statusType === 'in-progress'
                              ? 'bg-[#242522] text-[#F7F6F1]'
                              : 'bg-[#F4F1E8] text-[#242522]'
                          }`}
                      >
                        {stage.status}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#242522]">
                      {stage.heading}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-[#242522]/80">
                      {stage.paragraph}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {stage.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-[2px] border border-[#E3E1D9] bg-[#F7F6F1] px-2 py-0.5 font-mono text-[10px] text-[#242522]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => onJumpToPage(stage.linkedChapterIndex)}
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-[#7E7638] underline hover:text-[#242522]"
                      >
                        <span>Jump to Chapter {stage.number}</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-4">
                    <ImageWithFallback
                      src={stage.image}
                      alt={stage.heading}
                      isConcept={stage.isConcept}
                      aspectRatio="editorial"
                      onZoom={onZoomImage}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // CHAPTER 3: THE PROGRAMMER
  if (currentPage === 3) {
    return (
      <div className="space-y-6">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 03 / Core Engineering
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            The Programmer &amp; Problem Solver
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            C++, Python, Java, SQL, and continuous competitive problem solving.
          </p>
        </div>

        {/* Big Metrics Ribbon */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 text-center">
            <div className="font-serif text-3xl font-bold text-[#7E7638]">540+</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#85857D]">
              LeetCode &amp; SkillRack
            </div>
          </div>
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 text-center">
            <div className="font-serif text-3xl font-bold text-[#242522]">C++ &amp; Py</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#85857D]">
              Primary Languages
            </div>
          </div>
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 text-center">
            <div className="font-serif text-3xl font-bold text-[#7E7638]">Top 1</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#85857D]">
              SkillRack Leaderboard
            </div>
          </div>
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 text-center">
            <div className="font-serif text-3xl font-bold text-[#242522]">3rd Prize</div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#85857D]">
              SICPC 2026 Contest
            </div>
          </div>
        </div>

        {/* Programmer SVG Visual */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#85857D] uppercase">
            Algorithmic Visualization &amp; Daily Practice
          </span>
          <ImageWithFallback
            src="/assets/concepts/concept-programmer.svg"
            alt="Algorithmic Foundations & LeetCode Practice"
            isConcept={true}
            conceptLabel="Architectural Illustration"
            aspectRatio="video"
            onZoom={onZoomImage}
          />
        </div>

        {/* Detailed Narrative */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 border-t border-[#E3E1D9] pt-5">
          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#242522]">
              Why Problem Solving First?
            </h3>
            <p className="text-sm leading-relaxed text-[#242522]/90">
              Curiosity became a rigorous daily practice. Python opened the door to rapid experimentation, while C++ forced me to understand memory layouts, pointers, stack-versus-heap allocation, and the real cost of cache misses.
            </p>
            <p className="text-sm leading-relaxed text-[#242522]/90">
              Solving 540+ algorithmic challenges taught me that writing clean code isn&apos;t just about syntax—it&apos;s about respecting constraints, analyzing worst-case edge scenarios, and selecting the optimal data structure before writing the first line of code.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#242522]">
              Core Algorithmic Competencies
            </h3>
            <ul className="space-y-2 text-xs text-[#242522]/90">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7AD62] mt-1.5 shrink-0" />
                <span><strong>Trees &amp; Graphs:</strong> DFS, BFS, Dijkstra, Topological sort, Cycle detection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7AD62] mt-1.5 shrink-0" />
                <span><strong>Dynamic Programming:</strong> 1D/2D memoization, knapsack variants, optimal substructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7AD62] mt-1.5 shrink-0" />
                <span><strong>Relational SQL:</strong> Nested subqueries, window functions, complex joins, indexing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B7AD62] mt-1.5 shrink-0" />
                <span><strong>Two Pointers &amp; Sliding Window:</strong> Subarray bounds, monotonic queues</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  // CHAPTER 4: SKILLS & TOOLKIT
  if (currentPage === 4) {
    return (
      <div className="space-y-6">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 04 / Technical Competency
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Skills &amp; Working Toolkit
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Organised by domain with transparent comfort levels (C++ &amp; Python primary; HLD studied, LLD developing).
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-5 space-y-3"
            >
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                  {group.category}
                </span>
                <p className="text-xs text-[#85857D]">{group.description}</p>
              </div>

              <div className="divide-y divide-[#E3E1D9]/60 border-t border-[#E3E1D9] pt-2">
                {group.skills.map((s) => (
                  <div key={s.name} className="py-2">
                    <span className="font-serif text-sm font-bold text-[#242522]">{s.name}</span>
                    <p className="font-mono text-[10px] text-[#85857D]">{s.level}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-[2px] border border-[#E3E1D9] bg-[#F4F1E8] p-4 text-xs text-[#242522]/80">
          <p>
            <strong>Note on Proficiency:</strong> C++ and Python are my most practiced and comfortable languages. High-Level Design (HLD) has been studied theoretically and applied in project architectures; Low-Level Design (LLD) and design patterns are an active area of continuous learning.
          </p>
        </div>
      </div>
    )
  }

  // CHAPTER 5: AWARDS & ACHIEVEMENTS
  if (currentPage === 5) {
    return (
      <div className="space-y-6">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 05 / Verifiable Milestones
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Awards &amp; Documented Evidence
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Authentic certificates, competition photographs, and institutional leaderboard rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {ACHIEVEMENTS.map((ach) => (
            <div
              key={ach.id}
              className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-5 space-y-3 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
                    {ach.position}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#242522]">{ach.title}</h3>
                  <p className="text-xs text-[#85857D]">{ach.organizer} · {ach.date}</p>
                </div>
                <Award size={20} className="shrink-0 text-[#7E7638]" />
              </div>

              <ImageWithFallback
                src={ach.image}
                alt={ach.title}
                isConcept={false}
                aspectRatio="editorial"
                onZoom={onZoomImage}
              />

              <p className="text-xs leading-relaxed text-[#242522]/85">
                {ach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // CHAPTER 6: FULL-STACK PROJECTS
  if (currentPage === 6) {
    const fullstackProjects = PROJECTS.filter((p) => p.category === 'Full-Stack')
    return (
      <div className="space-y-8">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 06 / Applied Engineering
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Full-Stack Web Applications
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            From augmented reality learning tools to tamper-resistant attendance systems.
          </p>
        </div>

        {/* Concept Fullstack Architecture Graphic */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#85857D] uppercase">
            Layered Web Architecture Overview
          </span>
          <ImageWithFallback
            src="/assets/concepts/concept-fullstack.svg"
            alt="Modern Full-Stack Architecture"
            isConcept={true}
            conceptLabel="Architectural Overview"
            aspectRatio="video"
            onZoom={onZoomImage}
          />
        </div>

        {/* Feature Projects Cards */}
        <div className="space-y-6">
          {fullstackProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-6 shadow-sm space-y-4"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-[#E3E1D9] pb-3">
                <div>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                    {proj.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#242522]">{proj.title}</h3>
                  <p className="font-serif italic text-sm text-[#7E7638]">{proj.subtitle}</p>
                </div>

                <div className="flex items-center gap-2">
                  {proj.liveDemo && (
                    <a
                      href={proj.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#242522] px-3 py-1.5 font-mono text-[11px] uppercase text-[#F7F6F1] hover:bg-[#383a33]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {proj.githubRepo && (
                    <a
                      href={proj.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#E3E1D9] px-3 py-1.5 font-mono text-[11px] uppercase text-[#242522] hover:bg-[#F4F1E8]"
                    >
                      <Code2 size={12} />
                      <span>Code</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onSelectProject(proj)}
                    className="rounded-[2px] border border-[#B7AD62] bg-[#F4F1E8] px-3 py-1.5 font-mono text-[11px] uppercase text-[#7E7638] hover:bg-[#B7AD62] hover:text-[#242522]"
                  >
                    Details
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-center">
                <div className="space-y-3 md:col-span-7">
                  <p className="text-sm leading-relaxed text-[#242522]/90">{proj.oneLiner}</p>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#85857D] uppercase">
                      Problem Solved
                    </span>
                    <p className="text-xs text-[#242522]/80 mt-0.5">{proj.problem}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-[2px] bg-[#F4F1E8] px-2 py-0.5 font-mono text-[10px] text-[#242522]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <ImageWithFallback
                    src={proj.primaryImage}
                    alt={proj.title}
                    isConcept={proj.isConceptIllustration}
                    aspectRatio="editorial"
                    onZoom={onZoomImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // CHAPTER 7: DATA SCIENCE & MACHINE LEARNING
  if (currentPage === 7) {
    const dsProjects = PROJECTS.filter((p) => p.category === 'Data Science & ML')
    return (
      <div className="space-y-8">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 07 / Tabular Intelligence &amp; Models
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Data Science &amp; Machine Learning
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Exploratory data analysis, feature correlation, and supervised Random Forest modeling.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {dsProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-6 space-y-4 shadow-sm"
            >
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                  {proj.categoryLabel}
                </span>
                <h3 className="font-serif text-xl font-bold text-[#242522]">{proj.title}</h3>
                <p className="text-xs text-[#85857D] mt-0.5">{proj.subtitle}</p>
              </div>

              <ImageWithFallback
                src={proj.primaryImage}
                alt={proj.title}
                isConcept={proj.isConceptIllustration}
                aspectRatio="editorial"
                onZoom={onZoomImage}
              />

              <p className="text-xs leading-relaxed text-[#242522]/90">{proj.oneLiner}</p>

              <div className="space-y-1">
                <span className="font-mono text-[10px] font-bold text-[#85857D] uppercase">
                  Pipeline &amp; Methods
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-[2px] bg-[#F4F1E8] px-2 py-0.5 font-mono text-[9px] text-[#242522]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#E3E1D9] pt-3">
                {proj.githubRepo && (
                  <a
                    href={proj.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[#242522] hover:text-[#7E7638]"
                  >
                    <Code2 size={13} />
                    <span>Inspect Code</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => onSelectProject(proj)}
                  className="font-mono text-xs text-[#7E7638] underline hover:text-[#242522]"
                >
                  Deep Dive →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // CHAPTER 8: LLMs, GENAI & RAG
  if (currentPage === 8) {
    const ragProjects = PROJECTS.filter((p) => p.category === 'LLMs & GenAI')
    return (
      <div className="space-y-8">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 08 / Semantic Search &amp; RAG
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            LLMs, Vector Embeddings &amp; RAG
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Chunking, dense embeddings, ChromaDB nearest-neighbor lookups, and TalentIQ conversational job search.
          </p>
        </div>

        {/* Concept RAG Architecture SVG */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#85857D] uppercase">
            Dense Embedding &amp; RAG Retrieval Flow
          </span>
          <ImageWithFallback
            src="/assets/concepts/concept-rag.svg"
            alt="Retrieval Augmented Generation Pipeline"
            isConcept={true}
            conceptLabel="Architectural Flow"
            aspectRatio="video"
            onZoom={onZoomImage}
          />
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {ragProjects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-6 shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-[#E3E1D9] pb-3">
                <div>
                  <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                    {proj.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#242522]">{proj.title}</h3>
                  <p className="font-serif italic text-sm text-[#7E7638]">{proj.subtitle}</p>
                </div>

                <div className="flex items-center gap-2">
                  {proj.liveDemo && (
                    <a
                      href={proj.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#242522] px-3 py-1.5 font-mono text-[11px] uppercase text-[#F7F6F1] hover:bg-[#383a33]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                  {proj.githubRepo && (
                    <a
                      href={proj.githubRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#E3E1D9] px-3 py-1.5 font-mono text-[11px] uppercase text-[#242522] hover:bg-[#F4F1E8]"
                    >
                      <Code2 size={12} />
                      <span>Code</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => onSelectProject(proj)}
                    className="rounded-[2px] border border-[#B7AD62] bg-[#F4F1E8] px-3 py-1.5 font-mono text-[11px] uppercase text-[#7E7638] hover:bg-[#B7AD62] hover:text-[#242522]"
                  >
                    Details
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-center">
                <div className="space-y-3 md:col-span-7">
                  <p className="text-sm leading-relaxed text-[#242522]/90">{proj.oneLiner}</p>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-[#85857D] uppercase">
                      Problem Solved
                    </span>
                    <p className="text-xs text-[#242522]/80 mt-0.5">{proj.problem}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded-[2px] bg-[#F4F1E8] px-2 py-0.5 font-mono text-[10px] text-[#242522]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <ImageWithFallback
                    src={proj.primaryImage}
                    alt={proj.title}
                    isConcept={proj.isConceptIllustration}
                    aspectRatio="editorial"
                    onZoom={onZoomImage}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // CHAPTER 9: AGENTIC AI & SYNAPSEAI
  if (currentPage === 9) {
    const synapse = PROJECTS.find((p) => p.id === 'synapse-ai')!
    return (
      <div className="space-y-6">
        <div className="border-b border-[#E3E1D9] pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
              Chapter 09 / Agentic Systems
            </span>
            <span className="rounded-[2px] bg-[#242522] px-2 py-0.5 font-mono text-[9px] text-[#F7F6F1] uppercase">
              In Active Development
            </span>
          </div>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Agentic AI &amp; SynapseAI
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Multi-agent coordination using LangGraph, asynchronous FastAPI, Whisper ASR, and pgvector.
          </p>
        </div>

        {/* SynapseAI Graphic */}
        <div className="space-y-2">
          <span className="font-mono text-[10px] tracking-widest text-[#85857D] uppercase">
            Supervisor Graph &amp; Worker Node Architecture
          </span>
          <ImageWithFallback
            src="/assets/concepts/concept-agentic.svg"
            alt="LangGraph Multi-Agent Architecture"
            isConcept={true}
            conceptLabel="System Blueprint"
            aspectRatio="video"
            onZoom={onZoomImage}
          />
        </div>

        {/* Narrative & Honest Status */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-3 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-5">
            <h3 className="font-serif text-lg font-bold text-[#242522]">
              What is SynapseAI?
            </h3>
            <p className="text-xs sm:text-sm leading-relaxed text-[#242522]/90">
              SynapseAI is a meeting and project intelligence system. Instead of relying on a single monolithic prompt, it employs specialized LangGraph agent nodes:
            </p>
            <ul className="space-y-2 text-xs text-[#242522]/85">
              <li><strong>Transcription Node:</strong> Ingests audio streams with Whisper ASR.</li>
              <li><strong>Action Extraction Node:</strong> Identifies deliverables, owners, and due dates.</li>
              <li><strong>pgvector Memory Node:</strong> Retains long-term semantic context from past meetings.</li>
              <li><strong>Tool Calling Node:</strong> Triggers calendar updates and ticket creation.</li>
            </ul>
          </div>

          <div className="space-y-3 rounded-[2px] border border-[#E3E1D9] bg-[#F4F1E8] p-5">
            <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
              Current Engineering Status
            </span>
            <h3 className="font-serif text-lg font-bold text-[#242522]">
              Honest Milestone Tracking
            </h3>
            <p className="text-xs leading-relaxed text-[#242522]/90">
              I am actively learning and implementing multi-agent workflows. Audio chunking and the initial FastAPI endpoints are operational; supervisor cyclic state transitions and robust error boundaries in LangGraph are currently undergoing testing.
            </p>
            <div className="pt-2">
              <a
                href={synapse.githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#242522] px-3.5 py-1.5 font-mono text-xs uppercase text-[#F7F6F1] hover:bg-[#383a33]"
              >
                <Code2 size={13} />
                <span>Follow GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // CHAPTER 10: SYSTEM DESIGN NOTEBOOK
  if (currentPage === 10) {
    return (
      <div className="space-y-6">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 10 / Engineering Rigor
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            System Design Notebook
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Conceptual architectural exercises: Scalable URL shortener, Geo-Pulze geofencing, and distributed trade-offs.
          </p>
        </div>

        <ImageWithFallback
          src="/assets/concepts/concept-systems.svg"
          alt="System Design Notebook Architecture"
          isConcept={true}
          conceptLabel="Conceptual Architecture"
          aspectRatio="video"
          onZoom={onZoomImage}
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 space-y-2">
            <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
              Case 01 · URL Shortener
            </span>
            <p className="text-xs text-[#242522]/85 leading-relaxed">
              Base62 collision-free ID hashing, Redis LRU cache for top 20% read traffic, and multi-region read replicas.
            </p>
          </div>
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 space-y-2">
            <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
              Case 02 · Geo-Pulze Boundaries
            </span>
            <p className="text-xs text-[#242522]/85 leading-relaxed">
              Haversine coordinate validation against perimeter boundaries with camera liveness verification to eliminate proxy roll-calls.
            </p>
          </div>
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 space-y-2">
            <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
              Case 03 · Trade-offs
            </span>
            <p className="text-xs text-[#242522]/85 leading-relaxed">
              Synchronous vs asynchronous task queues; evaluating relational ACID consistency vs HNSW vector indexing latency.
            </p>
          </div>
        </div>

        <p className="font-mono text-xs text-[#85857D] border-t border-[#E3E1D9] pt-3">
          HLD studied theoretically and practically in web projects; LLD (design patterns, clean architecture) is in active progress.
        </p>
      </div>
    )
  }

  // CHAPTER 11: TRAINING & EDUCATION
  if (currentPage === 11) {
    return (
      <div className="space-y-6">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 11 / Continuous Learning
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Training &amp; Education
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Rigorous specialized training programmes and university degree coursework.
          </p>
        </div>

        <ImageWithFallback
          src="/assets/concepts/concept-journey.svg"
          alt="Training and Learning Journey Roadmap"
          isConcept={true}
          conceptLabel="Progression Map"
          aspectRatio="video"
          onZoom={onZoomImage}
        />

        {/* Education Box */}
        <div className="rounded-[2px] border border-[#B7AD62]/40 bg-[#FFFFFF] p-5 space-y-2">
          <div className="flex items-center gap-2">
            <GraduationCap size={18} className="text-[#7E7638]" />
            <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
              University Degree
            </span>
          </div>
          <h3 className="font-serif text-xl font-bold text-[#242522]">{EDUCATION.degree}</h3>
          <p className="text-xs font-mono text-[#85857D]">
            {EDUCATION.institution} · Expected Graduation: {EDUCATION.expectedGraduation}
          </p>
          <p className="text-xs text-[#242522]/80 mt-1">{EDUCATION.focusAreas}</p>
        </div>

        {/* Trainings */}
        <div className="space-y-4">
          <span className="font-mono text-[10px] font-bold tracking-widest text-[#7E7638] uppercase">
            Specialized Training Programs
          </span>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {TRAININGS.map((tr) => (
              <div
                key={tr.name}
                className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 space-y-2"
              >
                <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
                  {tr.duration}
                </span>
                <h4 className="font-serif text-base font-bold text-[#242522]">{tr.name}</h4>
                <p className="text-xs text-[#242522]/85">{tr.description}</p>
                <div className="pt-2">
                  <span className="font-mono text-[9px] text-[#85857D] uppercase block">
                    Associated Project:
                  </span>
                  <span className="text-xs font-serif font-bold text-[#7E7638]">
                    {tr.associatedProjects.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // CHAPTER 12: CONTACT & RÉSUMÉ
  if (currentPage === 12) {
    return (
      <div className="space-y-8">
        <div className="border-b border-[#E3E1D9] pb-4">
          <span className="font-mono text-xs tracking-widest text-[#7E7638] uppercase">
            Chapter 12 / Inquiries &amp; Collaboration
          </span>
          <h2 className="mt-1 font-serif text-3xl font-bold text-[#242522] sm:text-4xl">
            Let&apos;s Build Something Useful
          </h2>
          <p className="mt-1 text-sm text-[#85857D]">
            Open to software engineering and AI engineering opportunities, internships, and research collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Left: Contact Card */}
          <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-6 space-y-5">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
                Direct Channels
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#242522]">Get in Touch</h3>
              <p className="text-xs text-[#85857D]">
                Based in Theni, Tamil Nadu, India. Open to relocating or remote engineering roles.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={PROFILE.contacts.emailLink}
                className="flex items-center justify-between rounded-[2px] border border-[#E3E1D9] bg-[#F4F1E8] p-3 text-xs font-mono text-[#242522] hover:bg-[#B7AD62] hover:text-[#242522] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Mail size={15} />
                  <span>{PROFILE.contacts.email}</span>
                </span>
                <span className="uppercase text-[10px] text-[#7E7638]">Send Email</span>
              </a>

              <a
                href={PROFILE.contacts.resumeDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[2px] bg-[#242522] p-3 text-xs font-mono text-[#F7F6F1] hover:bg-[#383a33] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <FolderDown size={15} className="text-[#B7AD62]" />
                  <span>Verified Résumé Folder (Google Drive)</span>
                </span>
                <ExternalLink size={13} />
              </a>

              <a
                href={PROFILE.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[2px] border border-[#E3E1D9] p-3 text-xs font-mono text-[#242522] hover:bg-[#F4F1E8] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon size={15} className="text-[#0A66C2]" />
                  <span>linkedin.com/in/kishorekumar-aspirant</span>
                </span>
                <ExternalLink size={13} />
              </a>

              <a
                href={PROFILE.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-[2px] border border-[#E3E1D9] p-3 text-xs font-mono text-[#242522] hover:bg-[#F4F1E8] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon size={15} />
                  <span>github.com/kishorekumar28114</span>
                </span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Right: Candidate Statement */}
          <div className="flex flex-col justify-between rounded-[2px] border border-[#E3E1D9] bg-[#F4F1E8] p-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] font-bold text-[#7E7638] uppercase">
                Candidate Summary
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#242522]">
                What Recruiters Can Expect
              </h3>
              <ul className="space-y-2.5 text-xs text-[#242522]/90">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B7AD62] mt-1.5 shrink-0" />
                  <span><strong>Work Ethic:</strong> 540+ competitive coding problems completed consistently.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B7AD62] mt-1.5 shrink-0" />
                  <span><strong>Pragmatism:</strong> Building working systems over theoretical claims.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B7AD62] mt-1.5 shrink-0" />
                  <span><strong>Curiosity:</strong> Self-directed learning in LLMs, RAG, and multi-agent coordination.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-[#E3E1D9] mt-6">
              <button
                type="button"
                onClick={onOpenRecruiter}
                className="w-full rounded-[2px] bg-[#242522] py-2.5 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] hover:bg-[#383a33]"
              >
                Open Recruiter Overview (30s Scannable)
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // CHAPTER 13: COLOPHON & BACK COVER
  if (currentPage === 13) {
    return (
      <div className="relative flex min-h-[500px] flex-col items-center justify-center rounded-[3px] border border-[#E3E1D9] bg-[#242522] p-8 text-center text-[#F7F6F1] shadow-2xl">
        <div className="space-y-4 max-w-md">
          <span className="font-serif text-7xl font-bold tracking-tight text-[#B7AD62]">KG</span>
          <h2 className="font-serif text-3xl font-bold">Thank you for reading.</h2>
          <p className="font-mono text-xs text-[#85857D] uppercase tracking-widest">
            Kishore Kumar G · Portfolio Vol. 2026
          </p>
          <div className="mx-auto h-0.5 w-16 bg-[#B7AD62]" />
          <p className="text-xs text-[#E3E1D9]/80 leading-relaxed font-serif">
            Designed as an editorial monograph reflecting authentic milestones, working code, and progressive AI exploration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            <button
              type="button"
              onClick={() => onJumpToPage(0)}
              className="rounded-[2px] border border-[#F7F6F1]/40 bg-transparent px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] hover:bg-[#F7F6F1] hover:text-[#242522]"
            >
              Return to Front Cover
            </button>
            <button
              type="button"
              onClick={onOpenRecruiter}
              className="rounded-[2px] bg-[#B7AD62] px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#242522] hover:bg-[#c2b972]"
            >
              Recruiter Overview
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
