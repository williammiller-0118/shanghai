"use client"

import styles from "@/styles/education-master-page.module.css"
import { BookOpen } from "lucide-react"

export default function EducationMasterPageA() {
    return (
        <div className="lg:text-base md:text-lg sm:text-sm flex lg:flex-row flex-col lg:p-[1rem] p-[2rem] gap-[2rem] lg:h-[100%]">
            {/* Left Column */}
            <div className="flex flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                <div className="flex flex-col h-[60%]  gap-[1rem]">
                    <div>
                        <h1 className="pt-[0.5rem] pb-[0.5rem]" style={{ fontSize: "2rem", color: "black", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid black", borderBottom: "1px solid black" }}>
                            Education
                        </h1>
                        <div className={`${styles.dropCap}`}>
                            <span className={styles.firstLetter}>
                                A
                            </span>
                            <p style={{ fontSize: "1.2rem" }}>
                                s a soon-to-be expat, one of the most important and difficult decisions you will make is where your child will go to school. While there will be a host of concerns and questions that 
                                arise during your search for a school for your child in Shanghai, generally speaking, international assignees have three main concerns: the safety of their children; the happiness of 
                                their children; and the quality of their children's education.
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="text-justify">
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                            arrived children adapt to their new environment.
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                            arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                            programs are specifically designed to meet the challenges of moving to an international environment.
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        </div>
                    </div>
                </div>
                <div className="flex lg:flex-row h-[40%] flex-col gap-[1rem]">
                    <div className="flex flex-row lg:w-[50%] text-justify">
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                        arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                        programs are specifically designed to meet the challenges of moving to an international environment.
                    </div>
                    <div className="flex flex-row lg:w-[50%] text-justify">
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                        arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                        programs are specifically designed to meet the challenges of moving to an international environment.
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                <div
                    className="flex lg:flex-row flex-col gap-[1rem]"
                    style={{ height: "calc(100% - 50dvw * 9 / 16)" }}
                >
                    <div className="flex flex-col lg:w-[50%] gap-[1rem]">
                        <div className="border-t-4 border-b-4 border-r-0 border-l-0">
                            <div className={`flex-1 relative text-center`} style={{ position: "relative", fontFamily: "auto" }}>
                                <p
                                    style={{
                                        position: "absolute",
                                        top: "60%",
                                        left: "50%",
                                        transform: "translate(-50%, -40%)",  // centers the element exactly in the middle
                                        fontSize: "450px",  // big size for background effect
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
                                <p className={styles.quoteSection}>
                                    THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SHANGHAI VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:w-[50%] text-justify">
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        As a result, children often experience less culture shock than their parents in many cases as school
                        programs are specifically designed to meet the challenges of moving to an international environment.
                        Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                        As a result, children often experience less culture shock than their parents in many cases as school

                    </div>
                </div>
                <div className="flex lg:flex-row flex-col h-[calc(50dvw * 9 / 16)] gap-[1rem]">
                    <div className={`${styles.videoArea}`}>
                        <div className="bg-black" style={{ height: "100%" }}>
                            <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
