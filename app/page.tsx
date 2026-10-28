'use client'

import React, { useState, useEffect, useCallback } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { CHAPTERS, Project } from '@/lib/portfolio-data'
import { BookSpread } from '@/components/book-spread'
import { ChapterMenu } from '@/components/chapter-menu'
import { RecruiterModal } from '@/components/recruiter-modal'
import { ProjectModal } from '@/components/project-modal'

export default function PortfolioPage() {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isRecruiterOpen, setIsRecruiterOpen] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null)
  const [isTurning, setIsTurning] = useState<boolean>(false)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const totalPages = CHAPTERS.length
  const currentChapter = CHAPTERS[currentPage] || CHAPTERS[0]

  const goToPage = useCallback(
    (nextPage: number) => {
      if (nextPage < 0 || nextPage >= totalPages || nextPage === currentPage) return
      setIsTurning(true)
      window.setTimeout(() => {
        setCurrentPage(nextPage)
        setIsTurning(false)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 160)
    },
    [currentPage, totalPages]
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        isRecruiterOpen ||
        selectedProject ||
        lightboxImage
      ) {
        return
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        goToPage(currentPage + 1)
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPage(currentPage - 1)
      } else if (e.key === 'Home') {
        goToPage(0)
      } else if (e.key === 'End') {
        goToPage(totalPages - 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentPage, totalPages, goToPage, isRecruiterOpen, selectedProject, lightboxImage])

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchEndX - touchStartX
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        goToPage(currentPage + 1)
      } else {
        goToPage(currentPage - 1)
      }
    }
    setTouchStartX(null)
  }

  const handleOpenZoom = (src: string, alt: string) => {
    setLightboxImage({ src, alt })
  }

  return (
    <div
      className="min-h-screen bg-[#ECE8DC] text-[#242522] flex flex-col items-center justify-between selection:bg-[#B7AD62] selection:text-[#242522]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* PERSISTENT TOP APP BAR */}
      <header className="sticky top-0 z-40 w-full border-b border-[#E3E1D9] bg-[#F7F6F1]/95 backdrop-blur-md px-4 sm:px-8 py-2.5 transition-all">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => goToPage(0)}
              className="group flex items-center gap-2 text-left focus:outline-none"
              title="Return to Cover"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-[#242522] font-serif text-xs font-bold text-[#F7F6F1] transition-transform group-hover:scale-105">
                KG
              </span>
              <span className="hidden sm:inline font-serif text-sm font-bold tracking-tight text-[#242522]">
                Kishore Kumar G
              </span>
            </button>

            <span className="hidden md:inline text-[#85857D] text-xs">/</span>

            {/* Current Chapter Indicator */}
            <span className="hidden md:inline font-mono text-[11px] tracking-wider text-[#7E7638] uppercase">
              {currentChapter.number} · {currentChapter.title}
            </span>
          </div>

          {/* Right Header Navigation & Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 1-Click Recruiter Overview Button */}
            <button
              type="button"
              onClick={() => setIsRecruiterOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#242522] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#383a33]"
              title="Open Recruiter Overview (30s Briefing)"
            >
              <Briefcase size={13} className="text-[#B7AD62]" />
              <span>Recruiter View</span>
            </button>

            {/* Page Counter */}
            <div className="hidden sm:flex items-center rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] px-2.5 py-1 font-mono text-xs text-[#85857D]">
              <span className="font-bold text-[#242522]">
                {String(currentPage + 1).padStart(2, '0')}
              </span>
              <span className="mx-1">/</span>
              <span>{String(totalPages).padStart(2, '0')}</span>
            </div>

            {/* Chapter Navigator Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] text-[#242522] transition-colors hover:bg-[#242522] hover:text-[#F7F6F1]"
              aria-label="Open Chapter Index"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* MAIN BOOK STAGE */}
      <main className="w-full max-w-6xl flex-1 px-3 py-5 sm:px-6 sm:py-8 flex flex-col justify-center">
        <div className="relative">
          {/* Subtle Outer Drop Shadow and Paper Stack Effect */}
          <div className="absolute inset-x-2 -bottom-2 h-4 rounded-[3px] bg-[#D6D0C2] opacity-70 blur-[1px]" />
          <div className="absolute inset-x-4 -bottom-3.5 h-3 rounded-[3px] bg-[#C5BEAE] opacity-40 blur-[2px]" />

          {/* Book Wrapper */}
          <div
            className={`relative rounded-[3px] border border-[#DDD8CB] bg-[#F7F6F1] p-4 sm:p-8 md:p-12 shadow-xl transition-all duration-200 ${isTurning ? 'scale-[0.99] opacity-80' : 'scale-100 opacity-100'
              }`}
          >
            {/* Center spine gutter shading */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 -ml-6 hidden w-12 bg-gradient-to-r from-transparent via-[#000000]/[0.025] to-transparent lg:block" />

            {/* Clickable Left Edge Zone */}
            {currentPage > 0 && (
              <button
                type="button"
                onClick={() => goToPage(currentPage - 1)}
                className="group absolute inset-y-0 left-0 hidden w-14 items-center justify-start pl-2 transition-all hover:bg-[#000000]/[0.02] md:flex focus:outline-none"
                aria-label="Previous Page"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3E1D9] bg-[#F7F6F1] text-[#85857D] shadow-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ChevronLeft size={18} />
                </div>
              </button>
            )}

            {/* Clickable Right Edge Zone */}
            {currentPage < totalPages - 1 && (
              <button
                type="button"
                onClick={() => goToPage(currentPage + 1)}
                className="group absolute inset-y-0 right-0 hidden w-14 items-center justify-end pr-2 transition-all hover:bg-[#000000]/[0.02] md:flex focus:outline-none"
                aria-label="Next Page"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E3E1D9] bg-[#F7F6F1] text-[#85857D] shadow-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <ChevronRight size={18} />
                </div>
              </button>
            )}

            {/* Book Page Content */}
            <BookSpread
              currentPage={currentPage}
              onJumpToPage={goToPage}
              onSelectProject={setSelectedProject}
              onOpenRecruiter={() => setIsRecruiterOpen(true)}
              onZoomImage={handleOpenZoom}
            />

            {/* Bottom Folio Stamp within Paper */}
            {currentPage > 0 && (
              <div className="mt-8 flex items-center justify-between border-t border-[#E3E1D9] pt-4 font-mono text-[10px] uppercase tracking-widest text-[#85857D]">
                <span>
                  Kishore Kumar G · Monograph 2026
                </span>
                <span>
                  Page {String(currentPage + 1).padStart(2, '0')} of {String(totalPages).padStart(2, '0')}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM READER CONTROLS */}
        <nav
          aria-label="Book page navigation"
          className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-[2px] border border-[#E3E1D9] bg-[#F7F6F1] px-4 py-3 shadow-sm"
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
              className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[#242522] transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F4F1E8]"
            >
              <ArrowLeft size={14} />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={() => goToPage(1)}
              className="inline-flex items-center gap-1.5 rounded-[2px] border border-[#E3E1D9] bg-[#FFFFFF] px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-[#242522] hover:bg-[#F4F1E8]"
            >
              <BookOpen size={13} />
              <span className="hidden sm:inline">Index</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#85857D]">
              Ch. {currentChapter.number} ({currentPage + 1}/{totalPages})
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsRecruiterOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-[2px] border border-[#B7AD62] bg-[#F4F1E8] px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-[#7E7638] hover:bg-[#B7AD62] hover:text-[#242522]"
            >
              <Briefcase size={13} />
              <span>Recruiter Dossier</span>
            </button>

            <button
              type="button"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className="inline-flex items-center gap-1.5 rounded-[2px] bg-[#242522] px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] transition-colors disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#383a33]"
            >
              <span>Next</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </nav>
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-[#E3E1D9] bg-[#ECE8DC] px-4 py-4 text-center text-xs font-mono text-[#85857D]">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between gap-2">
          <span>© 2026 Kishore Kumar G. All rights reserved.</span>
          <span>Built with Next.js, React 19 &amp; Tailwind CSS</span>
        </div>
      </footer>

      {/* CHAPTER NAVIGATOR DRAWER */}
      <ChapterMenu
        isOpen={isMenuOpen}
        currentPage={currentPage}
        onClose={() => setIsMenuOpen(false)}
        onSelectChapter={goToPage}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
      />

      {/* RECRUITER 60S MODAL */}
      <RecruiterModal
        isOpen={isRecruiterOpen}
        onClose={() => setIsRecruiterOpen(false)}
        onSelectProject={(project) => {
          setSelectedProject(project)
        }}
        onJumpToChapter={goToPage}
      />

      {/* PROJECT DEEP DIVE MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onZoomImage={handleOpenZoom}
      />

      {/* HIGH-RES LIGHTBOX */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Expanded Image View"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#171814]/90 p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-h-[90vh] max-w-[94vw] overflow-hidden rounded-[2px] border-4 border-[#F7F6F1] bg-[#242522] shadow-2xl">
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-[2px] bg-[#242522]/80 text-[#F7F6F1] hover:bg-[#242522] transition-colors"
              aria-label="Close zoomed image"
            >
              <X size={18} />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-h-[85vh] max-w-[92vw] object-contain"
            />
            <div className="bg-[#242522] px-4 py-2 font-mono text-xs text-[#F7F6F1]">
              {lightboxImage.alt}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
