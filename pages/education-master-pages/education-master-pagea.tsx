"use client"

import styles from "@/styles/first-master-page.module.css"
import { BookOpen } from "lucide-react"

export default function EducationMasterPageA() {
    return (
        <div className="lg:text-base md:text-lg sm:text-sm flex flex-row h-screen p-[1rem] gap-[2rem] h-[100%]">
            {/* Left Column */}
            <div className="flex flex-col justify-between w-1/2 gap-[1rem]">
                <div className="flex flex-col h-[60%]  gap-[1rem]">
                    <div>
                        <h1 className="pt-[0.5rem] pb-[0.5rem]" style={{ fontSize: "1.5rem", color: "black", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid black", borderBottom: "1px solid black" }}>
                            Education
                        </h1>
                    </div>
                    <div>
                        <div className="text-2xl text-center">
                            Article Title
                        </div>
                        <div className="text-justify" style={{ lineHeight: "200%" }}>
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                            arrived children adapt to their new environment.
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                            arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                            programs are specifically designed to meet the challenges of moving to an international environment.
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly

                        </div>
                    </div>
                </div>
                <div className="flex flex-row h-[40%]  gap-[1rem]">
                    <div className="flex flex-row w-[50%] text-justify">
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                        arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                        programs are specifically designed to meet the challenges of moving to an international environment.
                    </div>
                    <div className="flex flex-row w-[50%] text-justify">
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                        arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                        programs are specifically designed to meet the challenges of moving to an international environment.
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col justify-between w-1/2 gap-[1rem]">
                <div className="flex flex-row h-[50%]  gap-[1rem]">
                    <div className="flex flex-col w-[50%] gap-[1rem]">
                        <div className="h-[70%] border-t-4 border-b-4 border-r-0 border-l-0 p-[1.5rem]">
                            <div className={`flex-1 relative text-center`} style={{ position: "relative" }}>
                                <p
                                    style={{
                                        position: "absolute",
                                        top: "60%",
                                        left: "50%",
                                        fontFamily: "fantasy",
                                        transform: "translate(-50%, -30%)",  // centers the element exactly in the middle
                                        fontSize: "240px",  // big size for background effect
                                        color: "rgba(0,0,0,0.2)",  // light and subtle
                                        zIndex: 1,
                                        margin: 0,
                                        userSelect: "none",
                                        pointerEvents: "none",
                                        fontWeight: "bold",
                                        lineHeight: 1,
                                    }}
                                >
                                    ”
                                </p>
                                <p
                                    className={styles.sectionText}
                                    style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "10%", fontWeight: "600" }}
                                >
                                    THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SHANGHAI VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
                                </p>
                            </div>
                        </div>
                        <div className="h-[30%] text-justify">
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                            arrived children adapt to their.
                            especially when combined with a move abroad. It should be noted, however, that international
                        </div>
                    </div>
                    <div className="flex flex-col w-[50%] text-justify">
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        As a result, children often experience less culture shock than their parents in many cases as school
                        programs are specifically designed to meet the challenges of moving to an international environment.
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        As a result, children often experience less culture shock than their parents in many cases as school
                        programs are specifically designed to meet the challenges of moving.
                    </div>
                </div>
                <div className="flex flex-row h-[50%]   gap-[1rem]">
                    <div className={`${styles.videoArea} ${styles.videoArea1}`}>
                        <div className="bg-black w-[100dvh]" style={{ height: "100%" }}>
                            <video src="videos/cover.mp4" style={{ height: "100%", width: "70%", margin: "auto" }} controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
