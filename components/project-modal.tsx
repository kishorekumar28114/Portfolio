'use client'

import React, { useEffect } from 'react'
import { X, ExternalLink, Code2, Award, AlertCircle, ArrowUpRight } from 'lucide-react'
import { Project } from '@/lib/portfolio-data'
import { ImageWithFallback } from './image-with-fallback'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
  onZoomImage: (src: string, alt: string) => void
}

export function ProjectModal({ project, onClose, onZoomImage }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-[#171814]/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-[3px] border border-[#E3E1D9] bg-[#F7F6F1] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Editorial Top Border */}
        <div className="h-1.5 w-full bg-[#B7AD62]" />

        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-[#E3E1D9] bg-[#F7F6F1]/95 px-5 py-3.5 backdrop-blur-md sm:px-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-widest text-[#7E7638] uppercase">
              {project.categoryLabel}
            </span>
            <span className="text-[#85857D]">/</span>
            <span
              className={`rounded-[2px] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                project.statusType === 'built'
                  ? 'bg-[#B7AD62]/20 text-[#7E7638]'
                  : project.statusType === 'in-progress'
                  ? 'bg-[#242522] text-[#F7F6F1]'
                  : 'bg-[#E3E1D9] text-[#242522]'
              }`}
            >
              {project.statusType === 'in-progress'
                ? 'In Progress'
                : project.statusType === 'built'
                ? 'Built & Verified'
                : 'Training / Foundation'}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[#E3E1D9] text-[#242522] transition-colors hover:bg-[#242522] hover:text-[#F7F6F1]"
            aria-label="Close project details"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 space-y-7">
          {/* Title Area */}
          <div>
            <h2
              id="project-modal-title"
              className="font-serif text-3xl font-bold tracking-tight text-[#242522] sm:text-4xl"
            >
              {project.title}
            </h2>
            <p className="mt-1 font-serif text-lg italic text-[#7E7638] sm:text-xl">
              {project.subtitle}
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#242522]/90 sm:text-lg">
              {project.oneLiner}
            </p>
          </div>

          {/* Action Links */}
          {(project.liveDemo || project.githubRepo) && (
            <div className="flex flex-wrap gap-3 pt-1">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[2px] bg-[#242522] px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#353730]"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink size={13} />
                </a>
              )}
              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[#242522] bg-transparent px-4 py-2 font-mono text-xs uppercase tracking-wider text-[#242522] transition-colors hover:bg-[#242522] hover:text-[#F7F6F1]"
                >
                  <Code2 size={13} />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          )}

          {/* Visual Gallery */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#E3E1D9] pb-2">
              <span className="font-mono text-[10px] tracking-widest text-[#85857D] uppercase">
                Visual Exhibits &amp; Architecture
              </span>
              <span className="font-mono text-[9px] text-[#85857D]">Click image to inspect full size</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <ImageWithFallback
                  src={project.primaryImage}
                  alt={`${project.title} primary display`}
                  isConcept={project.isConceptIllustration}
                  aspectRatio="editorial"
                  onZoom={onZoomImage}
                />
                <p className="font-mono text-[10px] text-[#85857D]">
                  {project.isConceptIllustration
                    ? 'Conceptual architecture illustration'
                    : 'Application interface / view'}
                </p>
              </div>

              {project.secondaryImage && (
                <div className="space-y-1.5">
                  <ImageWithFallback
                    src={project.secondaryImage}
                    alt={`${project.title} secondary display`}
                    isConcept={false}
                    aspectRatio="editorial"
                    onZoom={onZoomImage}
                  />
                  <p className="font-mono text-[10px] text-[#85857D]">
                    Secondary system view / exhibit
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Awards or Accolades if any */}
          {project.awards && (
            <div className="flex items-start gap-3 rounded-[2px] border border-[#B7AD62]/50 bg-[#F4F1E8] p-4">
              <Award size={20} className="shrink-0 text-[#7E7638] mt-0.5" />
              <div>
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                  Verified Competition Accolade
                </span>
                <p className="mt-1 text-sm font-medium text-[#242522]">{project.awards}</p>
              </div>
            </div>
          )}

          {/* Two-column Problem & Target Users */}
          <div className="grid grid-cols-1 gap-5 border-t border-b border-[#E3E1D9] py-5 sm:grid-cols-2">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                The Problem Being Solved
              </span>
              <p className="mt-2 text-sm leading-relaxed text-[#242522]/90">{project.problem}</p>
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
                Intended Users &amp; Context
              </span>
              <p className="mt-2 text-sm leading-relaxed text-[#242522]/90">{project.targetUsers}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
              Core Capabilities &amp; Architecture
            </span>
            <ul className="mt-3 space-y-2">
              {project.keyFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#242522]/90">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B7AD62]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <span className="font-mono text-[10px] font-bold tracking-wider text-[#7E7638] uppercase">
              Technologies &amp; Verified Libraries
            </span>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] px-2.5 py-1 font-mono text-[11px] text-[#242522]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Honest Status & Limitations */}
          {project.limitationsOrNextSteps && (
            <div className="rounded-[2px] border border-[#E3E1D9] bg-[#ECE8DC]/50 p-4">
              <div className="flex items-center gap-2">
                <AlertCircle size={15} className="text-[#85857D]" />
                <span className="font-mono text-[10px] font-bold tracking-wider text-[#85857D] uppercase">
                  Development Context &amp; Known Next Steps
                </span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-[#242522]/80">
                {project.limitationsOrNextSteps}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#E3E1D9] bg-[#F4F1E8] px-5 py-3 sm:px-8">
          <span className="font-mono text-[10px] text-[#85857D] uppercase">
            Documented in Kishore Kumar G&apos;s Portfolio
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs text-[#242522] underline hover:text-[#7E7638]"
          >
            Return to Chapter
          </button>
        </div>
      </div>
    </div>
  )
}

