"use client"

import React from "react";
import { useEffect, useRef } from "react"
import style from "@/styles/video-intro.module.css"

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
    <section style={{width: "200%"}}>
      <video
        ref={videoRef}
        className={style.fullscreenVideo}
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
      >
        <source src="/videos/World Logo Reveal Version 03.mp4" media="(min-width: 769px)" type="video/mp4" />
        <source src="/videos/World Logo Reveal Version 03.mp4" media="(max-width: 768px)" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}
