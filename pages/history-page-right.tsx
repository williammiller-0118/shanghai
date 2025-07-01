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

export default function HistoryRightPage() {
  return (
    <div className={styles.historyWrapper} style={{padding: "1rem", paddingBottom: "0"}}>
      <div className={styles.contentLayout}>
        <div className={styles.textContent} style={{ columnCount: 2, columnFill: "auto" }}>
          <div className={styles.mainBody}>

            After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
            'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
            blossom under open market reforms and the welcoming of foreign investment.
            <br /><br />

            Shanghai emerged as a popular export center for the British East India Company in the 18th century as
            Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
            had no desire for Western goods, thus creating an unsustainable trade imbalance.
            <br /><br />

            To rectify the situation, the British took advantage of the Chinese penchant for opium smoking by
            cultivating and importing a superior product from India. When China resisted by seizing the opium and
            restricting trade access, the industrialized British army overpowered the Chinese in what became known
            as the First Opium War.
            <br /><br />


            <h2 className={styles.paragraphSubheading}>A Brief History of Shanghai</h2>
            <div className={styles.dropCap}>
              <span className={styles.firstLetter}>S</span>
              hanghai's historical evolution from a sleepy fishing and textile port on the Yangtze Delta to a fully
              fledged world-class city has been formed by lucrative Chinese-Western trading relationships, cheap and
              plentiful labor from impoverished rural areas and the city's relative peace compared with the rest of
              China in the 19th and 20th centuries.
            </div>
            <br /><br />

            In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
            five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
            River the Bund, which was later consolidated with the American community to form the International
            Settlement.
            <br />

            <div style={{}}>
              In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
              five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
              <div className={styles.infoSection}>
                <div className={styles.infoButtonContainer}>
                  <button className={styles.infoButton} aria-label="Information">
                    <Info size={50} />
                  </button>
                  <div className={styles.infoBoxContainer}>
                    <div className={styles.infoBoxContent}>
                      <div className={styles.infoIcon}>
                        <Info size={20} />
                      </div>
                      <p className={styles.infoBoxText}>
                        The Chinese are extremely proud of their history, though in Shanghai that history is fast being
                        replaced by modern architecture.
                      </p>
                      <div className={styles.infoIcon}>
                        <Info size={20} />
                      </div>
                      <p className={styles.infoBoxText}>
                        Erring on the side of caution when discussing Chinese history with locals is advisable, as Western
                        interpretations of Chinese history are not always welcome.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              River the Bund, which was later consolidated with the American community to form the International
              Settlement.
              <br />
            </div>

            In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
            five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
            River the Bund, which was later consolidated with the American community to form the International
            Settlement.
            <br />
            
            <div className={`${styles.videoArea} ${styles.videoArea2}`} style={{marginTop: "20rem"}}>
              <div className={styles.videoOverlay}>
                <h1 className={styles.videoTitle}>Shanghai History</h1>
                <div className={styles.videoControls}>
                  <button className={styles.playButton}>
                    <Play size={16} fill="white" />
                  </button>
                  <span className={styles.timeDisplay}>0:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
