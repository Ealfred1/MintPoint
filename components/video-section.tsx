"use client"

import { useEffect, useRef, useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

// Helper to format time in mm:ss
function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s < 10 ? "0" : ""}${s}`
}

function useVideoInView(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  containerRef: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return

    let observer: IntersectionObserver | null = null

    const handlePlayPause = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (!videoRef.current) return
        if (entry.isIntersecting) {
          videoRef.current.style.filter = "grayscale(0)"
          videoRef.current.style.transform = "scale(1)"
          videoRef.current.style.borderRadius = "2.2rem"
          videoRef.current.play().catch(() => {})
        } else {
          videoRef.current.style.filter = "grayscale(1)"
          videoRef.current.style.transform = "scale(0.97)"
          videoRef.current.style.borderRadius = "2.2rem"
          videoRef.current.pause()
        }
      })
    }

    observer = new window.IntersectionObserver(handlePlayPause, {
      threshold: 0.5,
    })

    observer.observe(containerRef.current)

    return () => {
      if (observer && containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [videoRef, containerRef])
}

function CustomVideoPlayer({
  src,
  rounded = "2.2rem",
  width = 320,
  height = 640,
  className = "",
  autoPlay = true,
  loop = true,
  mobile = false,
}: {
  src: string
  rounded?: string
  width?: number
  height?: number
  className?: string
  autoPlay?: boolean
  loop?: boolean
  mobile?: boolean
}) {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [isSeeking, setIsSeeking] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useVideoInView(videoRef, containerRef)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleTimeUpdate = () => setCurrentTime(video.currentTime)
    const handleLoadedMetadata = () => setDuration(video.duration)
    const handleEnded = () => setIsPlaying(false)

    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("ended", handleEnded)

    // If metadata is already loaded (e.g. cached), set duration immediately
    if (video.readyState >= 1 && video.duration) {
      setDuration(video.duration)
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  const handlePlay = () => {
    setIsOverlayVisible(false)
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

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

  // Seek functionality for progress bar
  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!videoRef.current || !progressBarRef.current || !duration) return
    const rect = progressBarRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percent = Math.max(0, Math.min(1, x / rect.width))
    videoRef.current.currentTime = percent * duration
    setCurrentTime(videoRef.current.currentTime)
  }

  // Style for the phone-like video container
  const phoneStyle = {
    width: mobile ? 320 : 600,
    height: mobile ? 440 : height,
    borderRadius: rounded,
    boxShadow: "0 4px 32px 0 rgba(0,0,0,0.18)",
    background: "#181818",
    overflow: "hidden",
    margin: "0 auto",
    position: "relative" as const,
    aspectRatio: "9/19.5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "2px solid #222",
    touchAction: "manipulation",
  }

  // Style for the video element
  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    borderRadius: rounded,
    background: "black",
    transition: "transform 0.5s, border-radius 0.5s",
    transform: isOverlayVisible ? "scale(0.97)" : "scale(1)",
    pointerEvents: "auto" as const,
    userSelect: "none" as const,
  }

  // Custom progress bar
  const progress = duration ? (currentTime / duration) * 100 : 0

  return (
    <div ref={containerRef} style={phoneStyle} className={className}>
      <video
        ref={videoRef}
        src={src}
        style={videoStyle}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline
        controls={false}
        onPlay={handlePlay}
        onPause={handlePause}
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
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center z-20 pb-3 px-3">
        {/* Progress Bar */}
        <div
          ref={progressBarRef}
          className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2 cursor-pointer relative"
          onClick={handleProgressBarClick}
        >
          <div
            className="h-full bg-white/80 transition-all"
            style={{ width: `${progress}%` }}
          />
          {/* Progress thumb */}
          <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{
              left: `calc(${progress}% - 8px)`,
              transition: "left 0.1s",
              pointerEvents: "none",
            }}
          >
            <div className="w-4 h-4 bg-white/80 rounded-full shadow" />
          </div>
        </div>
        {/* Timer and Play/Pause */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlayPause}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
              aria-label={isPlaying ? "Pause" : "Play"}
              tabIndex={0}
              style={{ outline: "none", border: "none" }}
            >
              {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
            </button>
            <button
              onClick={toggleMute}
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
              aria-label={isMuted ? "Unmute" : "Mute"}
              tabIndex={0}
              style={{ outline: "none", border: "none" }}
            >
              {isMuted ? <VolumeX className="w-6 h-6 text-white" /> : <Volume2 className="w-6 h-6 text-white" />}
            </button>
          </div>
          <span className="text-xs text-white/80 font-mono select-none">
            {formatTime(currentTime)} <span className="opacity-60">/</span> {formatTime(duration)}
          </span>
        </div>
      </div>
    </div>
  )
}

function VideoSectionMobile() {
  return (
    <section className="block md:hidden py-10 bg-black">
      <div className="px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 leading-tight">EXPERIENCE A NEW WAY FORWARD</h2>
        <p className="text-base font-medium text-white/80 mb-8 max-w-xs mx-auto">
          No hardware? No problem. No hardware required, just download the Mintpoint App to start accepting contactless payments.
        </p>
        {/* App Store Buttons */}
        <div className="flex gap-3 justify-center items-center mb-10 w-full max-w-xs mx-auto">
          <img src="/images/appstore-btn.svg" alt="Download on the App Store" className="h-8 w-auto transition-all hover:brightness-200 hover:scale-105 cursor-pointer" draggable="false" />
          <img src="/images/playstore-btn.svg" alt="Download on Play Store" className="h-8 w-auto transition-all hover:brightness-200 hover:scale-105 cursor-pointer" draggable="false" />
        </div>
        {/* Video Placeholder */}
        <div className="flex justify-center">
          <CustomVideoPlayer
            src="/video/video.mp4"
            mobile
            width={220}
            height={440}
            rounded="2.2rem"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default function VideoSection() {
  return (
    <>
      {/* Desktop version: hidden on mobile */}
      <section className="py-20 bg-black animate-on-scroll hidden md:flex flex-col items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-[37px] font-bold mb-6">EXPERIENCE A NEW WAY FORWARD</h2>
          <p className="text-lg font-medium text-white/80 mb-12 max-w-3xl mx-auto">
            No hardware? No problem. No hardware required, just download the Mintpoint App to start accepting contactless payments.
          </p>
          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <img src="/images/appstore-btn.svg" alt="Download on the App Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />
            <img src="/images/playstore-btn.svg" alt="Download on Play Store" className="transition-all hover:brightness-200 hover:scale-[1.1] cursor-pointer" draggable="false" />
          </div>
          {/* Video Placeholder */}
          <div className="flex justify-center">
            <CustomVideoPlayer
              src="/video/video.mp4"
              width={306}
              height={612}
              rounded="2.2rem"
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      {/* Mobile version: only on mobile */}
      <VideoSectionMobile />
    </>
  )
}