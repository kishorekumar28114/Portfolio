'use client'

import React, { useState } from 'react'
import { ZoomIn, ImageOff } from 'lucide-react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  isConcept?: boolean
  conceptLabel?: string
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto' | 'editorial'
  onZoom?: (src: string, alt: string) => void
  priority?: boolean
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  isConcept = false,
  conceptLabel = 'Concept illustration',
  aspectRatio = 'auto',
  onZoom,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const aspectClass =
    aspectRatio === 'video'
      ? 'aspect-[16/10]'
      : aspectRatio === 'square'
        ? 'aspect-square'
        : aspectRatio === 'portrait'
          ? 'aspect-[3/4]'
          : aspectRatio === 'editorial'
            ? 'aspect-[4/3]'
            : ''

  return (
    <div
      className={`group relative overflow-hidden rounded-[2px] border border-[#E3E1D9] bg-[#F4F1E8] ${aspectClass} ${className}`}
    >
      {isConcept && (
        <div className="absolute top-2.5 left-2.5 z-10 rounded-[2px] border border-[#B7AD62]/40 bg-[#242522]/90 px-2 py-0.5 text-[9px] font-mono tracking-widest text-[#F7F6F1] uppercase backdrop-blur-sm">
          {conceptLabel}
        </div>
      )}

      {onZoom && !hasError && (
        <button
          type="button"
          onClick={() => onZoom(src, alt)}
          className="absolute top-2.5 right-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-[2px] border border-[#E3E1D9] bg-[#F7F6F1]/90 text-[#242522] opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100 hover:bg-[#B7AD62] hover:text-[#242522]"
          aria-label={`Enlarge image: ${alt}`}
        >
          <ZoomIn size={14} />
        </button>
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setHasError(true)}
          onClick={onZoom ? () => onZoom(src, alt) : undefined}
          className={`h-full w-full object-cover transition-all duration-300 ${loaded ? 'opacity-100' : 'opacity-0'
            } ${onZoom ? 'cursor-zoom-in' : ''}`}
        />
      ) : (
        <div className="flex h-full min-h-[160px] w-full flex-col items-center justify-center gap-2 p-6 text-center">
          <ImageOff size={22} className="text-[#85857D]" />
          <span className="font-mono text-[10px] tracking-wider text-[#85857D] uppercase">
            Image Archive Offline
          </span>
          <span className="text-xs text-[#85857D]">{alt}</span>
        </div>
      )}

      {!loaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#F4F1E8] animate-pulse">
          <span className="font-mono text-[9px] tracking-widest text-[#85857D] uppercase">
            Loading exhibit...
          </span>
        </div>
      )}
    </div>
  )
}

