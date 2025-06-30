"use client"

import PageLayout from "../components/page-layout"
import styles from "@/styles/history-page.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import { ChevronLeft, ChevronRight, Play, BookOpen, Info } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface HistoryPageProps {
  // onBackClick: () => void
  // onNextClick: () => void
}

export default function HistoryLeftPage() {
  return (
      <div>
        <div>
          <div className={styles.globeLogo}>
            <img
              src="images/newGlobe.jpeg"
              alt="Fantasy Globe"
              style={{
                height: '40px',
                objectFit: 'cover',
                left: '15%',
                position: 'relative'
              }}
            />
          </div>
        </div>
        <div className={styles.contentLayout}>
          {/* Column 1 - Video at top, text below */}
          <div className={styles.column1}>
            {/* First Video */}
            <div className={`${styles.videoArea} ${styles.videoArea1}`}>
              <div className={styles.videoOverlay}>
                <h1 className={styles.videoTitle}>History of China</h1>
                <div className={styles.videoControls}>
                  <button className={styles.playButton}>
                    <Play size={16} fill="white" />
                  </button>
                  <span className={styles.timeDisplay}>0:00</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className={styles.textContent}>
              {/* Section Header */}
              <div className={styles.sectionHeader}>
                <div className={styles.sectionIcon}>
                  <BookOpen size={16} />
                </div>
                <h1 className={styles.sectionHeaderTitle}>History</h1>
              </div>

              {/* Info Boxes */}
              {/* <div className={styles.infoBox}>
                <div className={styles.infoIcon}>
                  <Info size={10} />
                </div>
                <p className={styles.infoText}>
                  The Chinese are extremely proud of their history, though in Shanghai that history is fast being
                  replaced by modern architecture.
                </p>
              </div> */}

              {/* <div className={styles.infoBox}>
                <div className={styles.infoIcon}>
                  <Info size={10} />
                </div>
                <p className={styles.infoText}>
                  
                </p>
              </div> */}
              

              {/* Paragraph Subheading */}
              <h2 className={styles.paragraphSubheading}>A Brief history of China</h2>

              {/* Main Body Content */}
              <p className={styles.mainBodyIntro}>
                China is one of the world's oldest civilizations, with thousands of years of continuous history. The
                first concrete evidence of civilization, dating back to the Neolithic era, was discovered in various
                regional centres along the Yangtze River and Yellow River valleys, although the Yellow River is said to
                be the cradle of Chinese civilization.
              </p>

              <p className={styles.mainBody}>
                In between eras of multiple kingdoms and warlords, Chinese dynasties, or more recently republics, have
                ruled a China of varying shapes and sizes. This began with the Qin Dynasty in 221 BC, when Qinshihuang
                united the various warring kingdoms, thus creating the first Chinese empire and beginning construction
                of the Great Wall.
              </p>

              <p className={styles.mainBody}>
                The Han Dynasty (202 BC-220 AD) was the first to embrace the philosophy of Confucianism, the tenets of
                which are still pervasive throughout modern Chinese society. Emperor Wu, the seventh of the Han
              </p>
            </div>
          </div>
          {/* Column 2 - Text content */}
          <div className={styles.column2}>
            <div className={styles.textContent}>
              <p className={styles.mainBody}>
                
                emperors, extended the Chinese empire by pushing the invading Huns back into what is now Inner Mongolia.
                This enabled the first opening of trade connections between China and the West along the Silk Road.
              </p>

              <p className={styles.mainBody}>
                Successive Chinese dynasties used their sophisticated bureaucratic systems to control vast territories.
                In alternating periods of disunity, China was occasionally dominated by inner Asian peoples, most of
                whom were eventually assimilated into the Han Chinese population. Political and cultural influences from
                many parts of Asia, brought by waves of immigration, periods of expansion and cultural assimilation,
                formed the modern culture of China.
              </p>

              <p className={styles.mainBody}>
                The Qing Dynasty (1644-1911), founded by the Manchus, was the last dynasty and only the second not
                dominated by ethnic Hans, although the Manchus adopted the Confucian norms of traditional Chinese
                government. By the 19th century, the Qing empire had economically stagnated and was threatened by
                Western imperial powers.
              </p>

              <p className={styles.mainBody}>
                The Qing were soundly defeated in the First Opium War (1842) by the British, resulting in the ceding of
                Hong Kong and the legalization of opium imports. By 1870, opium accounted for over 40 percent of all
                goods imported to China.
              </p>

              <p className={styles.mainBody}>
                Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
                overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
              </p>
            </div>
          </div>
        </div>
      </div>
  )
}
