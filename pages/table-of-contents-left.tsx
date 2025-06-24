"use client"

import PageLayout from "../components/page-layout"
import styles from "@/styles/table-of-contents.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
// import { ChevronLeft, ChevronRight, SkipBack, SkipForward, Play, Volume2, Maximize, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Volume2, Maximize, MoreHorizontal } from "lucide-react"
import Footer from "@/components/footer"
import Header from "@/components/header"
import PageControls from "@/components/pagecontroller"

interface TableOfContentsProps {
  // onBackClick: () => void
  // onStartReading: () => void
  colorMode: string
}

const tableOfContentsData = {
  preparations: [
    { title: "History", page: 30 },
    { title: "People and culture", page: 36 },
    { title: "Language", page: 48 },
    { title: "Geography", page: 50 },
    { title: "Cityscape", page: 51 },
    { title: "Climate", page: 54 },
    { title: "Police and crime", page: 56 },
    { title: "Books and films", page: 58 },
    { title: "Health preparations", page: 60 },
    { title: "Financial preparations", page: 62 },
    { title: "Visas", page: 64 },
  ],
  relocationItems: [
    { title: "Relocation checklist", page: 70 },
    { title: "Pet relocation", page: 74 },
    { title: "Look-see trip", page: 82 },
    { title: "Pre-move survey", page: 84 },
    { title: "Shipping and packing", page: 85 },
    { title: "Education", page: 86 },
  ],
  softLanding: [
    { title: "When you arrive", page: 146 },
    { title: "Health care", page: 148 },
    { title: "Getting around", page: 166 },
    { title: "Money and banking", page: 174 },
    { title: "Getting connected", page: 180 },
    { title: "Culture shock", page: 184 },
    { title: "Hotels", page: 188 },
    { title: "Serviced apartments", page: 198 },
    { title: "Serviced offices", page: 206 },
    { title: "Finding housing", page: 210 },
    { title: "Former French Concession", page: 214 },
    { title: "Jing'an and Zhongshan Park", page: 222 },
  ],
  livingTheLife1: [
    { title: "Xintiandi and People's Square", page: 230 },
    { title: "Xujiahui", page: 238 },
    { title: "Hongqiao and Gubei", page: 244 },
    { title: "Huacao and Xujing", page: 252 },
    { title: "Jinqiao and Kangqiao", page: 260 },
    { title: "Lujiazui and Century Park", page: 268 },
    { title: "Establishing your home", page: 276 },
    { title: "Food shopping", page: 280 },
    { title: "Eating and drinking", page: 292 },
    { title: "Nightlife", page: 316 },
    { title: "Shopping", page: 322 },
  ],
  livingTheLife2: [
    { title: "Fitness and recreation", page: 342 },
    { title: "Day trips", page: 360 },
    { title: "Family activities", page: 370 },
    { title: "Health and wellness", page: 378 },
    { title: "Shanghai attractions", page: 386 },
    { title: "Community", page: 390 },
    { title: "Dating and marriage", page: 400 },
    { title: "Pets", page: 402 },
    { title: "Language courses", page: 406 },
    { title: "Asian escapes", page: 412 },
  ],
  maps: [
    { title: "Shanghai map", page: 12 },
    { title: "Education", page: 138 },
    { title: "Former French Concession", page: 220 },
    { title: "Jing'an and Zhongshan Park", page: 226 },
    { title: "Xintiandi and People's Square", page: 234 },
    { title: "Xujiahui", page: 240 },
    { title: "Hongqiao and Gubei", page: 248 },
    { title: "Huacao and Xujing", page: 256 },
    { title: "Jinqiao and Kangqiao", page: 264 },
    { title: "Lujiazui and Century Park", page: 272 },
    { title: "Subway map", page: 432 },
  ],
}

export default function LeftTableOfContents({ colorMode }: TableOfContentsProps) {
  const renderSection = (title: string, entries: Array<{ title: string; page: number }>, pageNumber?: string) => (
    <div className={styles.section}>
      <div className={styles.sectionHeader}>
        <span>{title}</span>
        {pageNumber && <span className={styles.sectionNumber}>{pageNumber}</span>}
      </div>
      <ul className={styles.entryList}>
        {entries.map((entry, index) => (
          <li key={index} className={styles.entry}>
            <span className={styles.entryTitle}>{entry.title}</span>
            <span className={styles.entryPage}>{entry.page}</span>
          </li>
        ))}
      </ul>
    </div>
  )

  return (
    <PageLayout>
      <div className={originstyles.bookLayout}>
        {/* Navigation Header */}
        {/* <Header sectionTitle={"PREPARATIONS | Table of contents"} pageNumber={8} part="left" /> */}
        <div style={{display:"flex"}}>
          <div style={{backgroundColor: "#ccc"}}>
            <p style={{fontSize: "20px", padding: "0.1rem", paddingTop: "30px", paddingLeft: "40px", paddingRight: "20px", color: "white"}}>
              8
            </p>
          </div>
          <div style={{flex: "1", backgroundColor: "black", color: "white", padding: "0.1rem", paddingTop: "30px", paddingLeft: "10px"}}>
            <span style={{fontSize: "larger", fontWeight: "400", textDecoration: "underline"}}>
              PREPARATIONS
            </span>
            <span style={{paddingLeft: "10px", paddingRight: "10px"}}>|</span>
            <span>
                 Table of contents
            </span>
          </div>
        </div>
        {/* <PageControls /> */}
        <div className={`${styles.contentArea} ${colorMode === "dark" ? "bg-[#222]" : "bg-white"}`}>
          <div className={styles.leftpage}>
            {/* Featured Image - Spans columns 1-2 */}
            <div className={styles.responsiveMediaWrapper}>
              <Image
                src="/images/shanghai-skyline-night.png"
                alt="Shanghai skyline at night"
                fill
              />
              <div className={styles.imageOverlay}>
                <h1 className={styles.contentsTitle}>CONTENTS</h1>
              </div>

              {/* Video Controls */}
              <div className={styles.videoControls}>
                <div className={styles.playButton}>
                  <Play size={20} fill="white" />
                </div>
                <span className={styles.timeDisplay}>1:19 / 1:19</span>
                <div className={styles.progressBar}>
                  <div className={styles.progressFill}></div>
                </div>
                <Volume2 size={20} />
                <Maximize size={20} />
                <MoreHorizontal size={20} />
              </div>
            </div>
            <div className={styles.dividerow}>
              {/* Column 1 - Below image */}
              <div className={styles.column1}>{renderSection("PREPARATIONS", tableOfContentsData.preparations, "26")}</div>

              {/* Column 2 - Below image */}
              <div className={styles.column2}>
                {renderSection("", tableOfContentsData.relocationItems)}

                {/* Globe Logo */}
                <div className={styles.globeLogo}>
                  <img
                    src="images/globe.png"
                    alt="Fantasy Globe"
                    style={{
                      height: '100px',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <Footer part="left" /> */}
      </div>
    </PageLayout>
  )
}
