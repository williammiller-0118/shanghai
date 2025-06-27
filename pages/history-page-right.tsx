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
    <PageLayout>
      <div className={originstyles.bookLayout}>
        <div className={styles.historyPage}>
          {/* Main Content Layout - 4 Columns */}
          <div>
            <div className={styles.infoSection}>
              <div className={styles.infoButtonContainer}>
                <button className={styles.infoButton} aria-label="Information">
                  <Info size={20} />
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
          </div>
          <div className={styles.contentLayout}>
            {/* Column 3 - Text content */}
            <div className={styles.column3}>
              <div className={styles.textContent}>
                <p className={styles.mainBody}>
                  
                  1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
                  China under his control, eventually turning on the Communist Party.
                </p>

                <p className={styles.mainBody}>
                  This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
                  Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
                  toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
                  party to this day.
                </p>

                <p className={styles.mainBody}>
                  Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
                  the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
                  allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist
                  elements from Chinese society.
                </p>

                <p className={styles.mainBody}>
                  After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
                  'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
                  blossom under open market reforms and the welcoming of foreign investment.
                </p>

                <p className={styles.mainBody}>
                  Shanghai emerged as a popular export center for the British East India Company in the 18th century as
                  Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
                  had no desire for Western goods, thus creating an unsustainable trade imbalance.
                </p>
              </div>
            </div>
            {/* Column 4 - Video at top, text below */}
            <div className={styles.column4}>
              {/* Second Video */}
              <div className={`${styles.videoArea} ${styles.videoArea2}`}>
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

              {/* Text Content */}
              <div className={styles.textContent}>
                

                <p className={styles.mainBody}>
                  To rectify the situation, the British took advantage of the Chinese penchant for opium smoking by
                  cultivating and importing a superior product from India. When China resisted by seizing the opium and
                  restricting trade access, the industrialized British army overpowered the Chinese in what became known
                  as the First Opium War.
                </p>

                <h2 className={styles.paragraphSubheading}>A Brief History of Shanghai</h2>

                <p className={styles.mainBody}>
                  Shanghai's historical evolution from a sleepy fishing and textile port on the Yangtze Delta to a fully
                  fledged world-class city has been formed by lucrative Chinese-Western trading relationships, cheap and
                  plentiful labor from impoverished rural areas and the city's relative peace compared with the rest of
                  China in the 19th and 20th centuries.
                </p>

                <p className={styles.mainBody}>
                  In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
                  five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
                  River the Bund, which was later consolidated with the American community to form the International
                  Settlement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
