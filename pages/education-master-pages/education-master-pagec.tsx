"use client"

import styles from "@/styles/education-master-page.module.css"
import { BookOpen } from "lucide-react"

export default function EducationMasterPageC() {
    return (
        <div className="lg:text-base md:text-lg sm:text-sm flex lg:flex-row flex-col lg:p-[1rem] p-[2rem] gap-[2rem]">
            {/* Left Column */}
            <div className="flex lg:flex-row flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                <div className={`flex flex-col lg:w-[50%]  gap-[1rem] ${styles.bottomFixedParent}`}>
                    <div>
                        <h1 className="pt-[0.5rem] pb-[0.5rem]" style={{ fontSize: "1.5rem", color: "black", fontWeight: "700", textTransform: "uppercase", borderTop: "5px solid black", borderBottom: "1px solid black" }}>
                            Education
                        </h1>
                    </div>
                    <div>
                        <div className="text-2xl text-center">
                            Article Title
                        </div>
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

                        </div>
                    </div>
                    <div className="flex flex-row h-[calc(10dvw * 9 / 16)] gap-[1rem]">
                        <div className={`${styles.videoArea} ${styles.videoArea1} ${styles.bottomFixed}`}>
                            <div className="bg-black" style={{ height: "", bottom: 0 }}>
                                <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:w-[50%]  gap-[1rem] text-justify">
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                    especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                    arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                    programs are specifically designed to meet the challenges of moving to an international environment.
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                    especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                    arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                    programs are specifically designed to meet the challenges of moving to an international environment.
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                    especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                    arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                    programs are specifically designed to meet the challenges of moving to an international environment.
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                    especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                </div>
            </div>

            {/* Right Column */}
            <div className="flex lg:flex-row flex-col flex-1 justify-between lg:w-1/2 gap-[1rem]">
                <div className="flex flex-col flex-1 gap-[1rem] text-justify">
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                    especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                    arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                    programs are specifically designed to meet the challenges of moving to an international environment.
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                    especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                    arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                    programs are specifically designed to meet the challenges of moving to an international environment.
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                    especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                    arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                    programs are specifically designed to meet the challenges of moving to an international environment.
                    Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                </div>
                
                <div className="flex flex-col lg:w-[50%]  gap-[1rem]" style={{ position: "relative" }}>
                    <div className="flex flex-row h-[calc(25dvw * 9 / 16)] gap-[1rem]">
                        <div className={`${styles.videoArea} ${styles.videoArea1}`}>
                            <div className="bg-black" style={{ height: "100%" }}>
                                <video src="videos/cover.mp4" style={{ width: "100%", height: "100dvw * 9 / 16", margin: "auto" }} controls></video>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col h-[calc(100% - 25dvw * 9 / 16)] gap-[1rem]">
                        <div className="flex flex-1 text-justify overflow-auto">
                            Concerns about your child's happiness are certainly warranted, as the adjustment to a new school is often stressful and challenging,
                            especially when combined with a move abroad. It should be noted, however, that international schools are uniquely skilled in helping newly
                            arrived children adapt to their new environment. As a result, children often experience less culture shock than their parents in many cases as school
                            programs are specifically designed to meet the challenges of moving to an international environment.
                        </div>
                        <div className={`border-t-4 border-b-4 border-r-0 border-l-0 ${styles.bottomFixed}`}>
                            <div className={`flex-1 text-center`} style={{ position: "relative" }}>
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
                                <p className={`${styles.quoteSection}`}>
                                    THE STANDARD OF EDUCATION AT INTERNATIONAL SCHOOLS IN SHANGHAI VARIES FROM INSTITUTION TO INSTITUTION WITHIN A VERY NARROW BANDWIDTH AT THE TOP OF THE SCALE
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
