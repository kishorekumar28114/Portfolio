'use client'

import React, { useState, useEffect } from 'react'
import {
  X,
  Mail,
  FolderDown,
  ExternalLink,
  Code2,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase,
} from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import {
  PROFILE,
  PROJECTS,
  ACHIEVEMENTS,
  SKILL_GROUPS,
  Project,
} from '@/lib/portfolio-data'
import { ImageWithFallback } from './image-with-fallback'

interface RecruiterModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProject: (project: Project) => void
  onJumpToChapter: (chapterIndex: number) => void
}

export function RecruiterModal({
  isOpen,
  onClose,
  onSelectProject,
  onJumpToChapter,
}: RecruiterModalProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all')

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const featuredProjects = PROJECTS.filter((p) => p.featuredInRecruiter)
  const filteredCatalogue =
    filterCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filterCategory)

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-overview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-5 md:p-8 bg-[#171814]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col h-[94vh] w-full max-w-5xl rounded-[3px] border border-[#E3E1D9] bg-[#F7F6F1] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Editorial Accent */}
        <div className="h-1.5 w-full bg-[#B7AD62]" />

        {/* Header Bar */}
        <header className="sticky top-0 z-20 flex shrink-0 items-center justify-between border-b border-[#E3E1D9] bg-[#F7F6F1]/95 px-5 py-3.5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-[2px] bg-[#242522] text-[#F7F6F1] font-serif text-xs font-bold">
              KG
            </span>
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#7E7638] uppercase">
                Recruiter View · 60-Second Dossier
              </span>
              <h1 id="recruiter-overview-title" className="font-serif text-lg font-bold text-[#242522]">
                Kishore Kumar G
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onClose()
                onJumpToChapter(1)
              }}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#242522] hover:bg-[#F4F1E8]"
            >
              <BookOpen size={13} />
              <span>Full Book</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[#E3E1D9] text-[#242522] transition-colors hover:bg-[#242522] hover:text-[#F7F6F1]"
              aria-label="Close recruiter overview"
            >
              <X size={16} />
            </button>
          </div>
        </header>

        {/* Scrollable Main Area */}
        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 space-y-8">
          {/* SECTION 1: IDENTITY & QUICK CONTACT (Who is Kishore?) */}
          <section className="grid grid-cols-1 gap-6 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-5 sm:p-7 md:grid-cols-12">
            <div className="flex flex-col justify-between md:col-span-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-[2px] bg-[#B7AD62]/20 px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[#7E7638]">
                  <Briefcase size={11} />
                  <span>{PROFILE.availability}</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl font-bold tracking-tight text-[#242522] sm:text-3xl">
                  {PROFILE.name}
                </h2>
                <p className="mt-1 font-mono text-xs font-medium tracking-wide text-[#7E7638] uppercase">
                  {PROFILE.title}
                </p>

                <div className="mt-3.5 space-y-1.5 text-xs text-[#242522]/80">
                  <p className="flex items-center gap-2">
                    <GraduationCap size={14} className="text-[#85857D] shrink-0" />
                    <span>
                      <strong>{PROFILE.degree}</strong> · {PROFILE.institution} (Expected {PROFILE.graduationYear})
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={14} className="text-[#85857D] shrink-0" />
                    <span>{PROFILE.location}</span>
                  </p>
                </div>

                <p className="mt-3.5 text-sm leading-relaxed text-[#242522]/90 border-l-2 border-[#B7AD62] pl-3 italic">
                  &ldquo;{PROFILE.introduction}&rdquo;
                </p>
              </div>

              {/* Action Buttons for Recruiters */}
              <div className="mt-5 flex flex-wrap items-center gap-2.5 pt-3 border-t border-[#E3E1D9]">
                <a
                  href={PROFILE.contacts.emailLink}
                  className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#242522] px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#383a33]"
                >
                  <Mail size={13} />
                  <span>Email Kishore</span>
                </a>
                <a
                  href={PROFILE.contacts.resumeDrive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#242522] bg-[#F7F6F1] px-3.5 py-2 font-mono text-xs uppercase tracking-wider text-[#242522] hover:bg-[#242522] hover:text-[#F7F6F1]"
                >
                  <FolderDown size={13} />
                  <span>Open Résumé Folder</span>
                  <ExternalLink size={12} className="opacity-60" />
                </a>
                <a
                  href={PROFILE.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] px-3 py-2 font-mono text-xs uppercase tracking-wider text-[#242522] hover:bg-[#F4F1E8]"
                >
                  <LinkedinIcon size={13} className="text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PROFILE.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] px-3 py-2 font-mono text-xs uppercase tracking-wider text-[#242522] hover:bg-[#F4F1E8]"
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            {/* Photo & Quick Key Metrics */}
            <div className="flex flex-col items-center justify-between border-t border-[#E3E1D9] pt-4 md:col-span-4 md:border-t-0 md:border-l md:pl-6 md:pt-0">
              <div className="relative w-36 h-44 overflow-hidden rounded-[2px] border-4 border-[#F7F6F1] shadow-md bg-[#242522]">
                <img
                  src={`${PROFILE.portraitImage}?v=2`}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                  style={{ filter: 'none' }}
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#242522]/80 px-2 py-1 text-center font-mono text-[9px] text-[#F7F6F1] uppercase">
                  Verified Candidate
                </div>
              </div>

              <div className="mt-4 w-full grid grid-cols-2 gap-2 text-center">
                <div className="rounded-[2px] border border-[#E3E1D9] bg-[#F4F1E8] p-2">
                  <div className="font-serif text-lg font-bold text-[#7E7638]">
                    {PROFILE.metrics.problemsSolved}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#85857D]">
                    Problems Solved
                  </div>
                </div>
                <div className="rounded-[2px] border border-[#E3E1D9] bg-[#F4F1E8] p-2">
                  <div className="font-serif text-lg font-bold text-[#7E7638]">Top 1</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#85857D]">
                    SkillRack Topper
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: WHAT ARE HIS STRENGTHS? */}
          <section className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#E3E1D9] pb-2">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#7E7638] uppercase">
                02 · Key Technical Strengths &amp; Stack
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onJumpToChapter(4)
                }}
                className="font-mono text-[10px] text-[#242522] underline hover:text-[#7E7638]"
              >
                Inspect Full Skills Chapter →
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4">
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                  Languages (Most Comfortable)
                </span>
                <p className="mt-1 font-serif text-base font-bold text-[#242522]">C++ &amp; Python</p>
                <p className="mt-1 text-xs text-[#85857D]">
                  Daily competitive coding discipline, memory safety awareness, and rapid AI prototyping.
                </p>
              </div>

              <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4">
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                  Full-Stack Development
                </span>
                <p className="mt-1 font-serif text-base font-bold text-[#242522]">Next.js, React &amp; Node</p>
                <p className="mt-1 text-xs text-[#85857D]">
                  Practical production web apps, REST APIs, MongoDB, PostgreSQL, and responsive editorial UI.
                </p>
              </div>

              <div className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4">
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                  AI &amp; Retrieval Engineering
                </span>
                <p className="mt-1 font-serif text-base font-bold text-[#242522]">RAG, ChromaDB &amp; LangGraph</p>
                <p className="mt-1 text-xs text-[#85857D]">
                  Dense vector embeddings, cosine distance ranking, and active exploration of multi-agent graphs.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 3: FEATURED 4 PROJECTS PROMINENTLY */}
          <section className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E3E1D9] pb-2">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#7E7638] uppercase">
                  03 · Featured Projects (4 Flagship Systems)
                </span>
                <p className="text-xs text-[#85857D]">
                  Click any project card to open its complete technical case study
                </p>
              </div>
              <span className="font-mono text-[10px] text-[#7E7638]">4 of 10 Featured</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {featuredProjects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onSelectProject(proj)}
                  className="group cursor-pointer rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#B7AD62] hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[9px] tracking-widest text-[#7E7638] uppercase">
                        {proj.categoryLabel}
                      </span>
                      <h3 className="mt-0.5 font-serif text-xl font-bold text-[#242522] group-hover:text-[#7E7638] transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                    <span
                      className={`rounded-[2px] px-1.5 py-0.5 font-mono text-[9px] uppercase ${proj.statusType === 'in-progress'
                          ? 'bg-[#242522] text-[#F7F6F1]'
                          : 'bg-[#B7AD62]/20 text-[#7E7638]'
                        }`}
                    >
                      {proj.statusType === 'in-progress' ? 'In Progress' : 'Built & Live'}
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-[#242522]/80 line-clamp-2">
                    {proj.oneLiner}
                  </p>

                  <div className="mt-3 h-32 overflow-hidden rounded-[2px] border border-[#E3E1D9]">
                    <img
                      src={proj.primaryImage}
                      alt={proj.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[2px] bg-[#F4F1E8] px-2 py-0.5 font-mono text-[10px] text-[#242522]"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="font-mono text-[10px] text-[#85857D] self-center">
                        +{proj.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex items-center justify-between border-t border-[#E3E1D9] pt-2 text-[11px] font-mono text-[#7E7638]">
                    <span>Inspect Case Study</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4: WHAT ACHIEVEMENTS DOES HE HAVE? */}
          <section className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#E3E1D9] pb-2">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#7E7638] uppercase">
                04 · Verified Competitive Achievements
              </span>
              <button
                type="button"
                onClick={() => {
                  onClose()
                  onJumpToChapter(5)
                }}
                className="font-mono text-[10px] text-[#242522] underline hover:text-[#7E7638]"
              >
                Inspect Certificates Gallery →
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ACHIEVEMENTS.map((ach) => (
                <div
                  key={ach.id}
                  className="flex items-start gap-3 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] p-4"
                >
                  <Award size={20} className="shrink-0 text-[#7E7638] mt-0.5" />
                  <div>
                    <span className="font-mono text-[9px] font-bold text-[#85857D] uppercase">
                      {ach.position}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-[#242522]">{ach.title}</h4>
                    <p className="mt-1 text-xs text-[#242522]/80 leading-relaxed">
                      {ach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 5: COMPLETE 10-PROJECT CATALOGUE */}
          <section className="space-y-4">
            <div className="flex flex-col gap-2 border-b border-[#E3E1D9] pb-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#7E7638] uppercase">
                  05 · Complete Project Catalogue (All 10 Projects)
                </span>
                <p className="text-xs text-[#85857D]">
                  Every project has an honest development status and working repository/demo links
                </p>
              </div>

              {/* Filter tabs */}
              <div className="flex flex-wrap gap-1.5">
                {[
                  { label: 'All (10)', value: 'all' },
                  { label: 'Full-Stack', value: 'Full-Stack' },
                  { label: 'Data Science & ML', value: 'Data Science & ML' },
                  { label: 'LLMs & RAG', value: 'LLMs & GenAI' },
                  { label: 'Agentic AI', value: 'Agentic AI' },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    type="button"
                    onClick={() => setFilterCategory(tab.value)}
                    className={`rounded-[2px] px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${filterCategory === tab.value
                        ? 'bg-[#242522] text-[#F7F6F1]'
                        : 'border border-[#E3E1D9] bg-[#FFFFFF] text-[#242522] hover:bg-[#F4F1E8]'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="divide-y divide-[#E3E1D9] rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF]">
              {filteredCatalogue.map((project, idx) => (
                <div
                  key={project.id}
                  className="flex flex-col gap-3 p-4 transition-colors hover:bg-[#F9F8F5] sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#85857D]">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <h4
                        onClick={() => onSelectProject(project)}
                        className="cursor-pointer font-serif text-base font-bold text-[#242522] hover:text-[#7E7638]"
                      >
                        {project.title}
                      </h4>
                      <span className="font-mono text-[9px] text-[#7E7638] uppercase">
                        [{project.categoryLabel}]
                      </span>
                      {project.statusType === 'in-progress' && (
                        <span className="rounded-[2px] bg-[#242522] px-1.5 py-0.2 font-mono text-[8px] text-[#F7F6F1] uppercase">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#242522]/80 max-w-2xl">{project.oneLiner}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.slice(0, 5).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[9px] text-[#85857D] bg-[#F4F1E8] px-1.5 py-0.5 rounded-[2px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-[2px] border border-[#E3E1D9] px-2.5 py-1 font-mono text-[10px] uppercase text-[#242522] hover:bg-[#242522] hover:text-[#F7F6F1]"
                      >
                        <span>Demo</span>
                        <ExternalLink size={10} />
                      </a>
                    )}
                    {project.githubRepo && (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-[2px] border border-[#E3E1D9] px-2.5 py-1 font-mono text-[10px] uppercase text-[#242522] hover:bg-[#242522] hover:text-[#F7F6F1]"
                      >
                        <Code2 size={11} />
                        <span>Code</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="rounded-[2px] bg-[#F4F1E8] px-2.5 py-1 font-mono text-[10px] uppercase text-[#7E7638] hover:bg-[#B7AD62] hover:text-[#242522]"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer Bar */}
        <footer className="sticky bottom-0 z-20 flex shrink-0 items-center justify-between border-t border-[#E3E1D9] bg-[#F4F1E8] px-5 py-3 sm:px-8">
          <div className="flex items-center gap-2 text-xs text-[#85857D]">
            <span>Need a custom briefing?</span>
            <a
              href={PROFILE.contacts.emailLink}
              className="font-mono font-medium text-[#242522] underline hover:text-[#7E7638]"
            >
              {PROFILE.contacts.email}
            </a>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-[2px] bg-[#242522] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] hover:bg-[#383a33]"
          >
            Close Overview
          </button>
        </footer>
      </div>
    </div>
  )
}
