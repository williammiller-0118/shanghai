"use client"

import Header from "@/components/header"
import PageLayout from "../components/page-layout"
import styles from "@/styles/history-page.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import { ChevronLeft, ChevronRight, Share, Info } from "lucide-react"
import Footer from "@/components/footer"

interface HistoryPage2Props {
  // onBackClick: () => void
  // onNextClick: () => void
}

export default function HistoryLeftPage2() {
  return (
    <PageLayout>
      <div className={originstyles.bookLayout}>
        <Header sectionTitle={"PREPARATIONS | History"} pageNumber={32} part="left" />
      
        <div className={styles.history2Page}>
          <div>
            <div className={styles.globeLogo}>
              <div style={{position: 'relative', left: '15%'}}>
                <img
                  src="images/globe.png"
                  alt="Fantasy Globe"
                  style={{
                    height: '40px',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
          {/* Main Content Layout - 4 Columns */}
          <div className={styles.contentLayout}>
            {/* Column 1 - Text content */}
            <div className={styles.column1}>
              <div className={styles.textContent}>
                <p className={styles.mainBody}>
                  its first gaslights, electric power, telephones and trams. The city continued to prosper throughout the
                  first decade of the 20th century, welcoming Japanese, Russians and other Europeans, each bringing their
                  own customs and culture. By the 1920s and 30s, Shanghai had grown into the wealthiest and most
                  cosmopolitan city in all of Asia. It wasn't just British financiers and Japanese industrialists that
                  were getting rich; smugglers and thugs from all nationalities were able to establish a foothold. The
                  city became legendary for debauchery. At one time the International Settlement alone boasted nearly 700
                  brothels, earning Shanghai the dubious titles of 'City of Sin' and the 'Whore of the Orient'.
                </p>

                <p className={styles.mainBody}>
                  The Japanese invaded the International Settlement in 1942 and interned Allied nationals in detention
                  centers until the Japanese surrendered to the Americans in 1945. Soon after, the Communists liberated
                  Shanghai in 1949, and ensured that the party was over. The city immediately became considerably grayer.
                  During the Cultural Revolution (1966-1976), Shanghai was the headquarters of the Gang of Four, who
                  purged the city of the 'Four Olds': old habits, old culture, old customs and old ways of thinking. By
                  the time they were finished, the only evidence of Shanghai's earlier prosperity and decadence was the
                  crumbling infrastructure left behind.
                </p>

              </div>
            </div>
            {/* Column 2 - Text content */}
            <div className={styles.column2}>
              <div className={styles.textContent}>
                
                <p className={styles.mainBody}>
                  While at times spectacularly Shanghai's richly varied rise can make it feel like the latest thing, a
                  city about to here and now rather than place with its own character; and at times it just feels like a
                  giant construction site.
                </p>
                
                <p className={styles.mainBody}>
                  When Richard Nixon visited Shanghai for his historic meeting with Premier Zhou Enlai in 1972, the city
                  was completely dark after nightfall. Even in 1988, ten years after Deng Xiaoping launched the economic
                  reform era, the tallest building in the city was the Park Hotel, built in 1934.
                </p>

                <p className={styles.mainBody}>
                  In 1990, however, the government in Beijing decreed that Shanghai was to be the epicenter of China's
                  ambitions of becoming a global economic powerhouse, allocating national revenue to ramp up neglected
                  infrastructure and subsidize business development. Pudong, consisting of rice paddies, was designated a
                  Special Economic Zone. The city quickly changed beyond recognition as it rushed to make up for the 40
                  years it had lost during Communism. Tens of thousands of foreign and Chinese investors poured money into
                  new enterprises and infrastructure, while hundreds of thousands of Chinese laborers migrated from their
                  homes across the country to Shanghai to build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
