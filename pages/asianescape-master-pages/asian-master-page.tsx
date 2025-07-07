import styles from "@/styles/asian-master-page.module.css";

export default function AsianMasterPage() {
    return (
        <div className={styles.pageContainer}>
            {/* Left Column */}
            <div className={`${styles.leftpage} flex flex-row flex-1 gap-[1.5rem]`}>
                <div className={styles.leftColumn}>
                    <div className={styles.leftTitle}>
                        <h1 className="pt-[0.5rem] pb-[0.5rem]" style={{ fontSize: "3rem", color: "black", paddingLeft: "0", padding: "1rem", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid black", borderBottom: "1px solid black" }}>
                            Asian Escape
                        </h1>
                    </div>
                    <div className={styles.leftText}>
                        <div className={`${styles.dropCap}`}>
                            <span className={styles.firstLetter}>
                                O
                            </span>
                            <p style={{ fontSize: "1.3rem" }}>
                                <strong>ne of the best fringe benefits of moving to Hong Kong is its proximity to some of the best vacation spots and most exotic adventure destinations in the world.</strong>
                            </p>
                        </div>
                        <div className={styles.textContent}>
                            <p>
                            </p>
                            <br />
                            <p>
                                The fact that the cost you a lot of time and money had you decided to make the trip from your home country can be expensive, but it doesn't have to break in travel times.
                            </p>
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
                    <div className={styles.centerText}>
                        <p>
                            We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet.
                        </p>
                        <br />
                        <p>
                            We chose our primary sponsor carefully and with our reader in mind. <strong>Banyan Tree offers</strong>
                        </p>
                        <br />
                        <p>
                            We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet.
                        </p>
                        <br />
                        <p>
                            We chose our primary sponsor carefully and with our reader in mind. <strong>Banyan Tree offers</strong>
                        </p>
                        <br />
                        <p>
                            We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet.
                        </p>
                        <br />
                        <p>
                            We chose our primary sponsor carefully and with our reader in mind. <strong>Banyan Tree offers</strong>
                        </p>
                        <p>
                            We chose our primary sponsor carefully and with our
                        </p>
                    </div>
                </div>
            </div>
            {/* Right Column */}
            <div className={styles.rightColumn}>
                <div className={styles.rightTop}>
                    <div className={styles.rightText}>
                        <p>
                            We also have a few recommendations for people who want the experience of a lifetime in Asia. In fact, if you follow our suggestions exactly, you'll probably arrive back at home in better shape than you were before you departed. Asia has some of the most remote and extreme destinations on the planet. extreme destinations on the planet.
                        </p>
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
        </div>
    );
}