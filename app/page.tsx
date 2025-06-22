"use client"

import { useEffect, useRef, useState } from "react"
import VideoIntro from "@/pages/video-intro"
import ShanghaiPage from "@/pages/shanghai-page"
import LeftTableOfContents from "@/pages/table-of-contents-left"
import BookIntroductionPage from "@/pages/book-introduction-page-left"
import HistoryLeftPage from "@/pages/history-page-left"
import HistoryLeftPage2 from "@/pages/history-page-2-left"
import PeopleCultureLeftPage from "@/pages/people-culture-page-left"

import HTMLFlipBook from 'react-pageflip';
import SinglePage from '@/pages/singlepage';

import styles from './page.module.css'
import PeopleCultureRightPage from "@/pages/people-culture-page-right"
import HistoryRightPage2 from "@/pages/history-page-2-right"
import HistoryRightPage from "@/pages/history-page-right"
import RightTableOfContents from "@/pages/table-of-contents-right"
import BookIntroductionRightPage from "@/pages/book-introduction-page-right"
import BookIntroductionLeftPage from "@/pages/book-introduction-page-left"
import PageControls from "@/components/buttonbar"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"video" | "shanghai" | "next" | "contents" | "history" | "history2" | "culture" | "reading" | "introduction">("video")
  const  [width, setWidth] = useState(300)
  const  [height, setHeight] = useState(300)
  const [pageFlip, setPageFlip] = useState()

  const handleVideoEnd = () => {
    setCurrentPage("shanghai")
  }

  const handlePowerButtonClick = () => {
    setCurrentPage("next")
  }

  const handleViewContents = () => {
    setCurrentPage("introduction")
  }

  if (currentPage === "video") {
    return <VideoIntro onVideoEnd={handleVideoEnd} />
  }

  if (currentPage === "shanghai") {
    return <ShanghaiPage onPowerButtonClick={handlePowerButtonClick} />
  }

  const handleIntroductionBack = () => {
    setCurrentPage("contents")
  }

  const handleViewHistory = () => {
    setCurrentPage("history")
  }

  const handleIntroductionNext = () => {
    setCurrentPage("history2")
  }

  const handleHistoryBack = () => {
    setCurrentPage("introduction")
  }

  const handleHistory2Back = () => {
    setCurrentPage("history")
  }

  const handleHistory2Next = () => {
    setCurrentPage("culture")
  }

  const handleCultureBack = () => {
    setCurrentPage("history2")
  }

  const handleCultureNext = () => {
    setCurrentPage("culture")
  }

  if (currentPage === "introduction") {
    return <BookIntroductionPage onBackClick={handleIntroductionBack} onNextClick={handleViewHistory} />
  }
  if (currentPage === "history") {
    return <HistoryLeftPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
  }

  if (currentPage === "history2") {
    return <HistoryLeftPage2 onBackClick={handleHistory2Back} onNextClick={handleHistory2Next} />
  }

  if (currentPage === "culture") {
    return <PeopleCultureLeftPage onBackClick={handleCultureBack} onNextClick={handleCultureNext} />
  }

  // return <RightTableOfContents onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
    // return <HistoryLeftPage2 onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />

  return (
    // <BookIntroductionLeftPage onBackClick={handleCultureBack} onNextClick={handleCultureNext}  />
    <div className="overflow-hidden">
      <div className="w-full py-[30px] px-[100px] h-full">
        <div className="mx-auto">
          <HTMLFlipBook
            width={550}
            height={1000}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            mobileScrollSupport={true}
            className="mx-auto"
          >
            <SinglePage number="1">
              <div>
                <LeftTableOfContents onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
              </div>
            </SinglePage>
            <SinglePage number="2">
              <div>
                <RightTableOfContents onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
              </div>
            </SinglePage>
            <SinglePage number="3">
              <div>
                <BookIntroductionLeftPage onBackClick={handleIntroductionBack} onNextClick={handleViewHistory} />
              </div>
            </SinglePage>
            <SinglePage number="4">
              <div>
                <BookIntroductionRightPage onBackClick={handleIntroductionBack} onNextClick={handleViewHistory} />
              </div>
            </SinglePage>
            <SinglePage number="5">
              <div>
                <HistoryLeftPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
              </div>
            </SinglePage>
            <SinglePage number="6">
              <div>
                <HistoryRightPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
              </div>
            </SinglePage>
            <SinglePage number="7">
              <div>
                <HistoryLeftPage2 onBackClick={handleHistory2Back} onNextClick={handleHistory2Next} />
              </div>
            </SinglePage>
            <SinglePage number="8">
              <div>
                <HistoryRightPage2 onBackClick={handleHistory2Back} onNextClick={handleHistory2Next} />
              </div>
            </SinglePage>
            <SinglePage number="9">
              <div>
                <PeopleCultureLeftPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
              </div>
            </SinglePage>
            <SinglePage number="10">
              <div>
                <PeopleCultureRightPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
              </div>
            </SinglePage>
          </HTMLFlipBook>
        </div>
        <div  className="container mt-3" style={{backgroundColor: "white", zIndex: 10}}>
          <PageControls />
        </div>
      </div>
      <div className={styles.bookForMob}>
        <HTMLFlipBook width={300} height={800} size="stretch" mobileScrollSupport={true}
          minWidth={300} maxWidth={1000} minHeight={600} maxHeight={1800} disableFlipByClick={true} useMouseEvents={false}
        >
          <SinglePage number="1">
            <div>
              <LeftTableOfContents onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
            </div>
          </SinglePage>
          <SinglePage number="2">
            <div>
              <RightTableOfContents onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
            </div>
          </SinglePage>
          <SinglePage number="3">
            <div>
              <BookIntroductionLeftPage onBackClick={handleIntroductionBack} onNextClick={handleViewHistory} />
            </div>
          </SinglePage>
          <SinglePage number="4">
            <div>
              <BookIntroductionRightPage onBackClick={handleIntroductionBack} onNextClick={handleViewHistory} />
            </div>
          </SinglePage>
          <SinglePage number="5">
            <div>
              <HistoryLeftPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
            </div>
          </SinglePage>
          <SinglePage number="6">
            <div>
              <HistoryRightPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
            </div>
          </SinglePage>
          <SinglePage number="7">
            <div>
              <HistoryLeftPage2 onBackClick={handleHistory2Back} onNextClick={handleHistory2Next} />
            </div>
          </SinglePage>
          <SinglePage number="8">
            <div>
              <HistoryRightPage2 onBackClick={handleHistory2Back} onNextClick={handleHistory2Next} />
            </div>
          </SinglePage>
          <SinglePage number="9">
            <div>
              <PeopleCultureLeftPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
            </div>
          </SinglePage>
          <SinglePage number="10">
            <div>
              <PeopleCultureRightPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
            </div>
          </SinglePage>
        </HTMLFlipBook>
      </div>
    </div>
  )
}
