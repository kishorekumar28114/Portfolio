'use client'

import React, { useEffect } from 'react'
import { X, ArrowRight, Briefcase } from 'lucide-react'
import { CHAPTERS } from '@/lib/portfolio-data'

interface ChapterMenuProps {
  isOpen: boolean
  currentPage: number
  onClose: () => void
  onSelectChapter: (pageIndex: number) => void
  onOpenRecruiter: () => void
}

export function ChapterMenu({
  isOpen,
  currentPage,
  onClose,
  onSelectChapter,
  onOpenRecruiter,
}: ChapterMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <aside
      role="dialog"
      aria-label="Chapter Navigator"
      className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-[#E3E1D9] bg-[#F7F6F1] shadow-2xl animate-in slide-in-from-right duration-200"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E3E1D9] px-6 py-4 bg-[#F4F1E8]">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#7E7638] uppercase">
            Navigation Index
          </span>
          <h2 className="font-serif text-lg font-bold text-[#242522]">Book Chapters</h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-8 w-8 items-center justify-center rounded-[2px] border border-[#E3E1D9] text-[#242522] hover:bg-[#242522] hover:text-[#F7F6F1]"
          aria-label="Close chapter menu"
        >
          <X size={16} />
        </button>
      </div>

      {/* Recruiter Shortcut in Menu */}
      <div className="p-4 border-b border-[#E3E1D9] bg-[#FFFFFF]">
        <button
          type="button"
          onClick={() => {
            onClose()
            onOpenRecruiter()
          }}
          className="flex w-full items-center justify-between rounded-[2px] bg-[#242522] px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[#F7F6F1] transition-transform hover:-translate-y-0.5"
        >
          <span className="flex items-center gap-2">
            <Briefcase size={14} className="text-[#B7AD62]" />
            <span>Open Recruiter View</span>
          </span>
          <ArrowRight size={13} />
        </button>
      </div>

      {/* Chapter List */}
      <div className="flex-1 overflow-y-auto divide-y divide-[#E3E1D9] px-6 py-2">
        {CHAPTERS.map((ch) => {
          const isActive = currentPage === ch.pageIndex
          return (
            <button
              key={ch.id}
              type="button"
              onClick={() => {
                onSelectChapter(ch.pageIndex)
                onClose()
              }}
              className={`flex w-full items-center justify-between py-3 text-left transition-colors ${
                isActive
                  ? 'font-bold text-[#7E7638]'
                  : 'text-[#242522] hover:text-[#7E7638]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-[#85857D]">{ch.number}</span>
                <span className="font-serif text-sm">{ch.title}</span>
              </div>
              <span className="font-mono text-[10px] text-[#7E7638]">
                p.{String(ch.pageIndex + 1).padStart(2, '0')}
              </span>
            </button>
          )
        })}
      </div>

      {/* Footer Return to Cover */}
      <div className="border-t border-[#E3E1D9] p-4 bg-[#F4F1E8]">
        <button
          type="button"
          onClick={() => {
            onSelectChapter(0)
            onClose()
          }}
          className="w-full text-center font-mono text-xs uppercase tracking-wider text-[#85857D] hover:text-[#242522]"
        >
          Return to Front Cover
        </button>
      </div>
    </aside>
  )
}

