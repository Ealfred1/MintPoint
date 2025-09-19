"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import Image from "next/image"

interface OptimizedVideoProps {
  src: string
  poster?: string
  width?: number
  height?: number
  className?: string
  autoPlay?: boolean
  loop?: boolean
  mobile?: boolean
}

export default function OptimizedVideo({
  src,
  poster = "/images/video-poster.jpg",
  width = 320,
  height = 640,
  className = "",
  autoPlay = true,
  loop = true,
  mobile = false,
}: OptimizedVideoProps) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.style.filter = "grayscale(0)"
            videoRef.current.style.transform = "scale(1)"
            if (autoPlay) {
              videoRef.current.play().catch(() => {})
            }
          } else if (videoRef.current) {
            videoRef.current.style.filter = "grayscale(1)"
            videoRef.current.style.transform = "scale(0.97)"
            videoRef.current.pause()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [autoPlay])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => {
      setDuration(video.duration)
      setIsLoaded(true)
    }
    const handleEnded = () => setIsPlaying(false)
    const handlePlay = () => {
      setIsOverlayVisible(false)
      setIsPlaying(true)
    }
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("ended", handleEnded)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("ended", handleEnded)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const phoneStyle = {
    width: mobile ? "220px" : "306px",
    height: mobile ? "440px" : "612px",
    borderRadius: "2.2rem",
    overflow: "hidden",
    position: "relative" as const,
    backgroundColor: "#000",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  }

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    borderRadius: "2.2rem",
    filter: "grayscale(1)",
    transform: "scale(0.97)",
    transition: "all 0.3s ease",
  }

  return (
    <div ref={containerRef} style={phoneStyle} className={className}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      )}
      
      <video
        ref={videoRef}
        src={src}
        style={videoStyle}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline
        controls={false}
        preload="none"
        poster={poster}
        tabIndex={-1}
        draggable={false}
      />
      
      {/* Overlay Play Button */}
      {isOverlayVisible && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center pointer-events-none z-10">
            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10"></div>
        </>
      )}
      
      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20">
        <div className="flex items-center justify-between">
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center space-x-2 text-white text-sm">
            <span>{Math.floor(currentTime / 60)}:{(currentTime % 60).toFixed(0).padStart(2, '0')}</span>
            <span>/</span>
            <span>{Math.floor(duration / 60)}:{(duration % 60).toFixed(0).padStart(2, '0')}</span>
          </div>
          
          <button
            onClick={toggleMute}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  )
}
