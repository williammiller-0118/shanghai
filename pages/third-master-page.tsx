"use client"

import PageLayout from "../components/page-layout"
import styles from "@/styles/third-master-page.module.css"
import contentstyles from "@/styles/table-of-contents.module.css"
import originstyles from "@/styles/responsive-layout.module.css"
import { ChevronLeft, ChevronRight, Play, BookOpen, Info } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

interface HistoryPageProps {
    // onBackClick: () => void
    // onNextClick: () => void
}

export default function ThirdMasterPage() {
    return (
        <div className="flex lg:flex-row flex-col h-screen p-[2rem] gap-[1rem]" style={{ height: "100%", overflowY: "auto" }}>
            {/* Left Column */}
            <div className="flex flex-col justify-between lg:w-1/4 text-2xl text-center" style={{ gap: "1rem" }}>
                <div className="text-sm text-center" style={{ height: "calc(100% - 25dvw * 9 / 16)", overflow: "auto" }}>
                    <div className={styles.mainBody}>
                        <div className={styles.dropCap}>
                            <span className={styles.firstLetter}>
                                C
                            </span>
                            hina is one of the world's oldest civilizations, with thousands of years of continuous history. The
                            first concrete evidence of civilization, dating back to the Neolithic era, was discovered in various
                            regional centres along the Yangtze River and Yellow River valleys, although the Yellow River is said to
                            be the cradle of Chinese civilization.
                        </div>
                        <br />

                        In between eras of multiple kingdoms and warlords, Chinese dynasties, or more recently republics, have
                        ruled a China of varying shapes and sizes. This began with the Qin Dynasty in 221 BC, when Qinshihuang
                        united the various warring kingdoms, thus creating the first Chinese empire and beginning construction
                        of the Great Wall.
                        <br /><br />

                        The Han Dynasty (202 BC-220 AD) was the first to embrace the philosophy of Confucianism, the tenets of
                        which are still pervasive throughout modern Chinese society. Emperor Wu, the seventh of the Han
                        emperors, extended the Chinese empire by pushing the invading Huns back into what is now Inner Mongolia.
                        This enabled the first opening of trade connections between China and the West along the Silk Road.
                        <br /><br />

                        Successive Chinese dynasties used their sophisticated bureaucratic systems to control vast territories.

                    </div>
                </div>
                <div className="flex items-center justify-center lg:h-[calc(25dvw * 9 / 16)] md:h-[dvh)]">
                    <div className={`${styles.videoArea} ${styles.videoArea1}`}>
                        <div>
                            <div className="videoWrapper" style={{ height: "100%" }}>
                                <video src="videos/cover.mp4" style={{ height: "100%", margin: "auto", bottom: "1rem" }} controls></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 items-center justify-center text-2xl text-center">
                <div className={`${styles.mainBody} lg:columns-2`} style={{ height: "100%", gap: "2rem", columnFill: "auto" }}>
                    Political and cultural influences from
                    many parts of Asia, brought by waves of immigration, periods of expansion and cultural assimilation,
                    formed the modern culture of China.
                    The Qing Dynasty (1644-1911), founded by the Manchus, was the last dynasty and only the second not
                    dominated by ethnic Hans, although the Manchus adopted the Confucian norms of traditional Chinese
                    government. By the 19th century, the Qing empire had economically stagnated and was threatened by
                    Western imperial powers.
                    <br /><br />
                    The Qing were soundly defeated in the First Opium War (1842) by the British, resulting in the ceding of
                    Hong Kong and the legalization of opium imports. By 1870, opium accounted for over 40 percent of all
                    goods imported to China.
                    <br /><br />
                    Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
                    overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
                    1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
                    China under his control, eventually turning on the Communist Party.
                    <br /><br />
                    This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
                    Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
                    toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
                    party to this day.
                    <br /><br />
                    Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
                    the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
                    allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist elements from Chinese society.
                    <br /><br />
                    After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
                    'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
                    blossom under open market reforms and the welcoming of foreign investment.
                    <br /><br />

                    Shanghai emerged as a popular export center for the British East India Company in the 18th century as
                    Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
                    had no desire for Western goods, thus creating an unsustainable trade imbalance.
                    <br />

                    <h2 className={styles.paragraphSubheading}>A Brief History of Shanghai</h2>
                    <div className={styles.dropCap}>
                        <span className={styles.firstLetter}>S</span>
                        hanghai's historical evolution from a sleepy fishing and textile port on the Yangtze Delta to a fully
                        fledged world-class city has been formed by lucrative Chinese-Western trading relationships, cheap and
                        plentiful labor from impoverished rural areas and the city's relative peace compared with the rest of
                        China in the 19th and 20th centuries.
                    </div>
                    <br />

                    In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
                    five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
                    River the Bund, which was later consolidated with the American community to form the International
                    Settlement.
                    <br /><br />

                    In the resulting 1842 Treaty of Nanking, the Chinese ceded Hong Kong and extraterritorial concessions in
                    five cities, including Shanghai. The British named their new autonomous settlement along the Huangpu
                    River the Bund, which was later consolidated with the American community to form the International
                    Settlement.
                    <br />

                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between lg:w-1/4" style={{ gap: "1rem" }}>
                <div className="flex items-center justify-center lg:h-[calc(25dvw * 9 / 16)] md:h-[calc(100dvw * 9 / 16)]">
                    <div className={`${styles.videoArea} ${styles.videoArea1}`}>
                        <div>
                            <div className="videoWrapper" style={{ height: "100%" }}>
                                <video src="videos/cover.mp4" style={{ height: "100%", margin: "auto", bottom: "1rem" }} controls></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-center" style={{ height: "calc(100% - 25dvw * 9 / 16)", overflow: "auto" }}>
                    <div className={styles.mainBody}>
                        Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
                        overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
                        1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
                        China under his control, eventually turning on the Communist Party.
                        <br /><br />
                        This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
                        Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
                        toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
                        party to this day.
                        <br /><br />
                        Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
                        the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
                        allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist elements from Chinese society.
                        In 1966, Mao and his
                        allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist elements from Chinese society.
                        <br /><br />
                        In 1966, Mao and his
                        allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist elements from
                        <br /><br />
                    </div>
                </div>
            </div>
        </div>
    )
}
