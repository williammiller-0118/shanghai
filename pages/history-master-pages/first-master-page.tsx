"use client"

import { splitTextByLetterCount } from "@/lib/text-split";
import styles from "@/styles/first-master-page.module.css"
import { BookOpen } from "lucide-react"
import { useEffect, useRef, useState } from "react";

const text = `hina is one of the world's oldest civilizations, with thousands of years of continuous history. The
first concrete evidence of civilization, dating back to the Neolithic era, was discovered in various
regional centres along the Yangtze River and Yellow River valleys, although the Yellow River is said to
be the cradle of Chinese civilization.
In between eras of multiple kingdoms and warlords, Chinese dynasties, or more recently republics, have
ruled a China of varying shapes and sizes. This began with the Qin Dynasty in 221 BC, when Qinshihuang
united the various warring kingdoms, thus creating the first Chinese empire and beginning construction
of the Great Wall.
The Han Dynasty (202 BC-220 AD) was the first to embrace the philosophy of Confucianism, the tenets of
which are still pervasive throughout modern Chinese society.
The Han Dynasty (202 BC-220 AD) was the first to embrace the philosophy of Confucianism, the tenets of
which are still pervasive throughout modern Chinese society. Political and cultural influences from
many parts of Asia, brought by waves of immigration, periods of expansion and cultural assimilation,
formed the modern culture of China.
The Qing Dynasty (1644-1911), founded by the Manchus, was the last dynasty and only the second not
dominated by ethnic Hans, although the Manchus adopted the Confucian norms of traditional Chinese
government. By the 19th century, the Qing empire had economically stagnated and was threatened by
Western imperial powers.
The Qing were soundly defeated in the First Opium War (1842) by the British, resulting in the ceding of
Hong Kong and the legalization of opium imports. By 1870, opium accounted for over 40 percent of all
goods imported to China.
Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
China under his control, eventually turning on the Communist Party.
This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
party to this day.
Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
allies launched the Cultural Revolution, which sought to eradicate all traditional and capitalist elements from Chinese society.
After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
blossom under open market reforms and the welcoming of foreign investment.
Shanghai emerged as a popular export center for the British East India Company in the 18th century as
Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
had no desire for Western goods, thus creating an unsustainable trade imbalance.
had no desire for Western goods, thus creating an unsustainable trade imbalance.
had no desire for Western goods, thus creating an unsustainable trade imbalance.`

const secondText = `
hanghai's historical evolution from a sleepy fishing and textile port on the Yangtze Delta to a fully
fledged world-class city has been formed by lucrative Chinese-Western trading relationships, cheap and
plentiful labor from impoverished rural areas and the city's relative peace compared with the rest of
China in the 19th and 20th centuries.
Shanghai emerged as a popular export center for the British East India Company in the 18th century as
Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
had no desire for Western goods, thus creating an unsustainable trade imbalance.
Shanghai emerged as a popular export center for the British East India Company in the 18th century as
Chinese silk, porcelain and tea became popular in Great Britain. However, the isolationist Qing Dynasty
had no desire for Western goods, thus creating an unsustainable trade imbalance.After Mao's death in 1976, reformers led by Deng Xiaoping gained prominence and most of the Maoist
'reforms' associated with the Cultural Revolution had been abandoned by 1978. The economy proceeded to
blossom under open market reforms and the welcoming of foreign investment. Subsequent civil wars and military defeats to outsiders continually weakened the government until it was
overthrown by several factions united under the revolutionary ideas of Sun Yat-sen. After Sun's death in
1925, Chiang Kai-shek seized control of the Kuomintang (Nationalist Party or KMT) and brought most of
China under his control, eventually turning on the Communist Party.
This drove them across China's most desolate terrain to Yan'an on the Long March. From there, the
Communist Party regrouped under the leadership of a young Mao Zedong, returned north and succeeded in
toppling the KMT and forcing them to the island of Taiwan in 1949 where they remain an active political
party to this day.
Chairman Mao's original social and economic plan, the Great Leap Forward, was a complete disaster for
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
the country. It resulted in an estimated 45 million deaths, mostly from starvation. In 1966, Mao and his
allies launched`


export default function FirstMasterPage() {
    const hiddenRef = useRef<HTMLDivElement>(null);
    const [part, setPart] = useState([""])
    const [part2, setPart2] = useState([""])
    const [part3, setPart3] = useState([""])

    useEffect(() => {
        if (!hiddenRef.current) return;

        const hidden = hiddenRef.current;

        // Set styling (optional)
        hidden.style.width = `${500}px`;

        const measure = (testText: string): number => {
            hidden.textContent = testText;
            return hidden.scrollHeight;
        };

        let result = splitTextByLetterCount(text, 990);
        let text1 = result[1];
        // setPart([result[0]])

        let res1 = splitTextByLetterCount(text1, 1750);
        let text2 = res1[1];
        // setPart([result[0], res1[0]])

        let res2 = splitTextByLetterCount(text2, 1750);
        let text3 = res2[1]

        let res3 = splitTextByLetterCount(secondText, 720);
        let text4 = res3[1]

        let res4 = splitTextByLetterCount(text4, 1110);
        setPart([result[0], res1[0], res2[0], res3[0], res4[0]])

        // console.log("part1: ", result[0], "\npart2: ", res1[0])
        // console.log("part1: ", result[0], "\npart3: ", res3[0])
        // console.log(result)
    }, [])

    return (
        <div className="flex lg:flex-row flex-col h-[100%] p-[2rem] gap-[2rem]" style={{ height: "100%", overflowY: "auto", fontSize: "1rem" }}>
            {/* Left Column */}
            <div className="flex lg:flex-row flex-col flex-1 lg:w-1/2 gap-[2rem]">
                <div className="flex flex-col flex-1 justify-between text-2xl text-center" style={{ gap: "1rem", textAlign: "left" }}>
                    <div className={styles.sectionHeader}>
                        <h1 style={{ fontSize: "1.5rem", color: "black", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid black", borderBottom: "1px solid black" }} className={styles.sectionHeaderTitle}>History</h1>
                    </div>
                    <div className="flex items-center justify-center lg:h-[calc(25dvw * 9 / 16)] md:h-[dvh)]">
                        <div className={`${styles.videoArea} ${styles.videoArea1}`}>
                            <div>
                                <div className="videoWrapper" style={{ height: "100%" }}>
                                    <video src="shanghai_master/videos/cover.mp4" style={{ height: "100%", margin: "auto", bottom: "1rem" }} controls></video>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-center" style={{ height: "calc(100% - 25dvw * 9 / 16)" }}>
                        <div className={styles.mainBody}>
                            <div className={styles.dropCap}>
                                <span className={styles.firstLetter}>
                                    C
                                </span>
                                {part[0]}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row flex-1 text-justify">
                    <div style={{ height: "100%", gap: "2rem", fontSize: "1rem" }}>
                        {part[1]}
                    </div>
                </div>
            </div>
            {/* Right Column */}
            <div className="flex lg:flex-row flex-col flex-1 lg:w-1/2 gap-[1rem]">
                <div className="flex flex-1 flex-row text-justify">
                    <div style={{ height: "100%", gap: "2rem", fontSize: "1rem" }}>
                        <div className="h-[50%]">
                            {part[2]}
                        </div>
                        <h2 className={`${styles.paragraphSubheading} pb-[3rem]`}>A Brief History of Shanghai</h2>
                        <div className="h-[40%]">
                            <div className={styles.dropCap}>
                                <span className={styles.firstLetter}>
                                    S
                                </span>
                                {part[3]}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 text-justify gap-[1rem]" style={{ gap: "1rem" }}>
                    <div className="text-sm text-center" style={{ height: "calc(100% - 25dvw * 9 / 16)" }}>
                        <div className={styles.mainBody}>
                            {part[4]}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className={`${styles.videoArea} ${styles.videoArea1}`}>
                            <div>
                                <div className="videoWrapper" style={{ height: "100%" }}>
                                    <video src="shanghai_master/videos/cover.mp4" style={{ height: "100%", margin: "auto", bottom: "1rem" }} controls></video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Hidden div for measuring text height */}
            <div
                ref={hiddenRef}
                className="invisible absolute whitespace-pre-wrap p-4 leading-normal text-black"
                style={{
                    height: '0px',
                    padding: '0px',
                    position: 'absolute',
                    visibility: 'hidden',
                    zIndex: -1,
                    pointerEvents: 'none',
                }}
            />
        </div>
    )
}
