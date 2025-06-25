
"use client"

import { useRef, useState } from "react"
import Image from "next/image"

import styles from "@/styles/educationlist-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"

import Header from "@/components/header"
import {
  Info, DollarSign, Film, FileText, Landmark, Calendar,
  Facebook, Twitter, Linkedin, Youtube, Instagram, Star
} from 'lucide-react';

interface AsianEscapesPageProps {
  onBackClick?: () => void
  onNextClick?: () => void
}

function InfoRow({ label, value, isLink = false, isRange = false }: { label: string; value: string; isLink?: boolean; isRange?: boolean }) {
  return (
    <div className="flex items-start">
      <span className="font-semibold w-40">{label}:</span>
      {isLink ? (
        <a href="#" className="text-blue-600 underline">{value}</a>
      ) : isRange ? (
        <span>
          <span className="text-blue-600">from: </span>元170,500<br />
          <span className="text-blue-600">to: </span>元275,600
        </span>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}

export default function EducationListRightPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={originstyles.bookLayout}>
      <Header sectionTitle={"PREPARATIONS | Education"} pageNumber={86} part="left" />
      <div className={styles.mainContent}>
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded" />
              <h1 className="text-xl font-semibold text-pink-600">
                Western International School of Shanghai
              </h1>
            </div>

            {/* Icons Row */}
            <div className="grid grid-cols-6 gap-4 text-pink-600 text-2xl mb-6">
              <div className={styles.iconBox}><Info size={20} /></div>
              <div className={styles.iconBox}><DollarSign size={20} /></div>
              <div className={styles.iconBox}><Film size={20} /></div>
              <div className={styles.iconBox}><FileText size={20} /></div>
              <div className={styles.iconBox}><Landmark size={20} /></div>
              <div className={styles.iconBox}><Calendar size={20} /></div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm text-gray-800">
              <InfoRow label="City" value="Shanghai" />
              <InfoRow label="Curriculum" value="IB" isLink />
              <InfoRow label="Leaving qualification" value="IB Diploma" isLink />
              <InfoRow label="Language of instruction" value="English" />
              <InfoRow label="Age Range" value="Ages 2 to 18" />
              <InfoRow label="Yearly fees" value="元170,500 to 元275,600" isRange />
              <div className="flex items-center">
                <span className="font-semibold w-40">Reviews:</span>
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" strokeWidth={1} size={16} />
                  ))}
                  <span className="text-blue-500 text-sm">4.8</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Visit website</a>
              <a href="#" className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 text-center">Contact the school</a>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex space-x-4 text-gray-700 text-xl">
              <Facebook size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
              <Youtube size={20} />
              <Instagram size={20} />
            </div>

            {/* Footer */}
            <div className="mt-4 text-pink-600 font-medium">
              Accreditations & Memberships
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Header */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded" />
              <h1 className="text-xl font-semibold text-pink-600">
                Western International School of Shanghai
              </h1>
            </div>

            {/* Icons Row */}
            <div className="grid grid-cols-6 gap-4 text-pink-600 text-2xl mb-6">
              <div className={styles.iconBox}><Info size={20} /></div>
              <div className={styles.iconBox}><DollarSign size={20} /></div>
              <div className={styles.iconBox}><Film size={20} /></div>
              <div className={styles.iconBox}><FileText size={20} /></div>
              <div className={styles.iconBox}><Landmark size={20} /></div>
              <div className={styles.iconBox}><Calendar size={20} /></div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 text-sm text-gray-800">
              <InfoRow label="City" value="Shanghai" />
              <InfoRow label="Curriculum" value="IB" isLink />
              <InfoRow label="Leaving qualification" value="IB Diploma" isLink />
              <InfoRow label="Language of instruction" value="English" />
              <InfoRow label="Age Range" value="Ages 2 to 18" />
              <InfoRow label="Yearly fees" value="元170,500 to 元275,600" isRange />
              <div className="flex items-center">
                <span className="font-semibold w-40">Reviews:</span>
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" strokeWidth={1} size={16} />
                  ))}
                  <span className="text-blue-500 text-sm">4.8</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Visit website</a>
              <a href="#" className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 text-center">Contact the school</a>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex space-x-4 text-gray-700 text-xl">
              <Facebook size={20} />
              <Twitter size={20} />
              <Linkedin size={20} />
              <Youtube size={20} />
              <Instagram size={20} />
            </div>

            {/* Footer */}
            <div className="mt-4 text-pink-600 font-medium">
              Accreditations & Memberships
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}