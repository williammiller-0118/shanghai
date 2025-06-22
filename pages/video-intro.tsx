"use client"

import React from "react";
import { useEffect, useRef } from "react"
interface VideoIntroProps {
  onVideoEnd: () => void
}
export default function VideoIntro({ onVideoEnd }: VideoIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.play().catch(console.error)

      const handleEnded = () => {
        setTimeout(() => {
          onVideoEnd()
        }, 2000)
      }

      video.addEventListener("ended", handleEnded)

      return () => {
        video.removeEventListener("ended", handleEnded)
      }
    }
  }, [onVideoEnd])

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-contain"
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src="/videos/going-global-intro.mp4" media="(min-width: 769px)" type="video/mp4" />
        <source src="/videos/going_global_mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
