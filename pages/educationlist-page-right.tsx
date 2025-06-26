
"use client"

import { useRef, useState } from "react"
import Image from "next/image"

import styles from "@/styles/educationlist-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"

import Header from "@/components/header"
import {
  Info, DollarSign, Film, FileText, Landmark, Calendar,
  Facebook, Twitter, Linkedin, Youtube, Instagram, Star, Mail, Globe,
  Flag, Languages, Pencil, GraduationCap, Heart, Clock, Trophy, Building2
} from 'lucide-react';

interface AsianEscapesPageProps {
  onBackClick?: () => void
  onNextClick?: () => void
}

const accordionData = [
  { label: "Nationalities", icon: <Flag color="#000" size={20} />, content: "Nationalities content goes here." },
  { label: "Languages", icon: <Languages color="#000" size={20} />, content: "Languages content goes here." },
  { label: "Classroom", icon: <Pencil color="#000" size={20} />, content: "Classroom content goes here." },
  { label: "Academics", icon: <GraduationCap color="#000" size={20} />, content: "Academics content goes here." },
  { label: "Student support", icon: <Heart color="#000" size={20} />, content: "Student support content goes here." },
  { label: "Admissions", icon: <FileText color="#000" size={20} />, content: "Admissions content goes here." },
  { label: "School day", icon: <Clock color="#000" size={20} />, content: "School day content goes here." },
  { label: "Extracurricular activities", icon: <Trophy color="#000" size={20} />, content: "Extracurricular activities content goes here." },
  { label: "Facilities", icon: <Building2 color="#000" size={20} />, content: "Facilities content goes here." },
  { label: "About the school", icon: <Info color="#000" size={20} />, content: "About the school content goes here." },
];

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
      {/* <Header sectionTitle={"PREPARATIONS | Education"} pageNumber={86} part="left" /> */}
      <div className={styles.mainContent}>
        <div style={{flex: "1"}}>
          <AccordionTable />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded">
                  <a href="#">
                    <img src="/images/westernSchool.png" alt="no image" />
                  </a>
                </div>
                <h1 className="text-l font-semibold">
                  Western International School of Shanghai
                </h1>
              </div>

              {/* Icons Row */}
              <div className="grid grid-cols-6 gap-2 text-2xl mb-3">
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
              </div>

              {/* Buttons */}
              {/* <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Visit website</a>
                <a href="#" className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 text-center">Contact the school</a>
              </div> */}

              {/* Social Media */}
              <div className="mt-2 flex space-x-4 text-gray-700 text-xl">
                <Facebook size={20} />
                <Twitter size={20} />
                <Linkedin size={20} />
                <Youtube size={20} />
                <Instagram size={20} />
                <a href="#">
                    <Mail size={20} />
                  </a>
                  <a href="#">
                    <Globe size={20} />
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div style={{flex: "1"}}>
          <AccordionTable />
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-3">
                <div className="w-12 h-12 rounded">
                  <a href="#">
                    <img src="/images/westernSchool.png" alt="no image" />
                  </a>
                </div>
                <h1 className="text-l font-semibold">
                  Western International School of Shanghai
                </h1>
              </div>

              {/* Icons Row */}
              <div className="grid grid-cols-6 gap-2 text-2xl mb-3">
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
                
              </div>

              {/* Buttons */}
              {/* <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center">Visit website</a>
                <a href="#" className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-700 text-center">Contact the school</a>
              </div> */}

              {/* Social Media */}
              <div className="mt-2 flex space-x-4 text-gray-700 text-xl">
                <Facebook size={20} />
                <Twitter size={20} />
                <Linkedin size={20} />
                <Youtube size={20} />
                <Instagram size={20} />
                <a href="#">
                  <Mail size={20} />
                </a>
                <a href="#">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionTable() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {accordionData.map((item, idx) => (
        <div key={item.label} className="border-b last:border-b-0">
          <button
            className="w-full flex items-center gap-3 py-3 px-2 hover:bg-pink-50 transition-colors"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
          >
            {item.icon}
            <span className="flex-1 text-left font-medium">{item.label}</span>
            <span className="ml-auto">{openIndex === idx ? "▲" : "▼"}</span>
          </button>
          {openIndex === idx && (
            <div className="px-8 pb-3 text-gray-700 text-sm">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}