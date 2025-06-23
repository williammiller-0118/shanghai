"use client"

import { useEffect, useRef } from "react"
import { Power } from "lucide-react"
import styles from "@/styles/responsive-layout.module.css"

interface ShanghaiPageProps {
  onPowerButtonClick: () => void
}

export default function ShanghaiPage({ onPowerButtonClick }: ShanghaiPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className={styles.pageLayout}>
      {/* Power Button */}
      <div className={styles.bookLayout}>

        <button onClick={onPowerButtonClick} className={styles.powerButton}>
          <Power className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-700 group-hover:text-gray-800" />
        </button>

        {/* Main Content Area */}
        <div className="relative">
          {/* Background Image */}
          <section className="absolute w-full h-screen overflow-hidden bg-black">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full object-contain mx-auto"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            <source src="/videos/cover_laptop_final.mp4" media="(min-width: 769px)" type="video/mp4" />
            <source src="/videos/cover_mobile_final.mp4" media="(max-width: 768px)" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

          {/* Dark Overlay */}
          <div className={styles.overlay}></div>
        </div>
      </div>
    </div>
  )
}
