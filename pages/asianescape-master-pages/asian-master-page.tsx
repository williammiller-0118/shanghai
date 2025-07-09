import styles from "@/styles/asian-master-page.module.css";
import { splitTextByLetterCount } from "@/lib/text-split";
import { useEffect, useRef, useState } from "react";

const text = `
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.`

export default function AsianMasterPage() {
    const divref = useRef<HTMLDivElement>(null);
    const hiddenRef = useRef<HTMLDivElement>(null);
    const [part, setPart] = useState([""])
    const [part2, setPart2] = useState([""])

    useEffect(() => {
        if (!hiddenRef.current) return;

        const hidden = hiddenRef.current;

        // Set styling (optional)
        hidden.style.width = `${500}px`;

        const measure = (testText: string): number => {
            hidden.textContent = testText;
            return hidden.scrollHeight;
        };

        let result = splitTextByLetterCount(text, 570);
        let text1 = result[1];
        // setPart([result[0]])
        
        let res1 = splitTextByLetterCount(text1, 1820);
        let text2 = res1[1];
        // setPart([result[0], res1[0]])

        let res2 = splitTextByLetterCount(text2, 570);
        setPart([result[0], res1[0], res2[0]])

        // console.log("part1: ", result[0], "\npart2: ", res1[0])
        // console.log(result)
    }, [])

    return (
        <div className={styles.pageContainer}>
            {/* Left Column */}
            <div className={`${styles.leftpage} flex flex-row flex-1 gap-[1.5rem]`}>
                <div className={styles.leftColumn}>
                    <div className={styles.leftTitle}>
                        <h1 style={{ fontSize: "3rem", color: "black", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid black", borderBottom: "1px solid black" }}>
                            Asian Escape
                        </h1>
                    </div>
                    <div className={styles.leftText}>
                        <div>
                            <div className={`${styles.dropCap}`}>
                                <span className={styles.firstLetter}>
                                    O
                                </span>
                                <p style={{ fontSize: "1.2rem" }}>
                                    <strong>ne of the best fringe benefits of moving to Hong Kong is its proximity to some of the best vacation spots and most exotic adventure destinations in the world.</strong>
                                </p>
                            </div>
                            <div className="overflow-hidden border rounded bg-white text-black" id="textdiv" ref={divref}>
                                {/* The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
                                The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
                                The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
                                The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
                                The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
                                The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
                                The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times. */}
                                {part[0]}
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.leftVideo} ${styles.aspect16x9}`}>
                        <div className={`${styles.videoArea} ${styles.bottomFixed}`}>
                            <div className="bg-black" style={{ height: "", bottom: 0 }}>
                                <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Center Column */}
                <div className={styles.centerColumn}>
                    <div className="overflow-hidden border rounded bg-white text-black">
                        {/* We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet.
                        <br />
                        We chose our primary sponsor carefully and with our reader in mind. <strong>Banyan Tree offers</strong>
                        <br />
                        We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet.
                        <br />
                        We chose our primary sponsor carefully and with our reader in mind. <strong>Banyan Tree offers</strong>
                        <br />
                        We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet.
                        <br />
                        We chose our primary sponsor carefully and with our reader in mind. Banyan Tree offers
                        We chose our primary sponsor carefully and with our
                        We chose our primary sponsor carefully and with our
                        We chose our primary sponsor carefully and with our
                        We chose our primary sponsor carefully and with our */}
                        {part[1]}
                    </div>
                </div>
            </div>
            {/* Right Column */}
            <div className={styles.rightColumn}>
                <div className={styles.rightTop}>
                    <div className={styles.rightText}>
                        {/* <p>
                            We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet. extreme destinations on the planet.
                        </p> */}
                        {part[2]}
                    </div>
                    <div className={`${styles.rightVideo} ${styles.aspect16x9}`}>
                        <div className={`${styles.videoArea} ${styles.bottomFixed}`}>
                            <div className="bg-black" style={{ height: "", bottom: 0 }}>
                                <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rightBottomVideo} ${styles.aspect16x9}`}>
                    <div className={`${styles.videoArea} ${styles.bottomFixed}`}>
                        <div className="bg-black" style={{ height: "", bottom: 0 }}>
                            <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
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
    );
}