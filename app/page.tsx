"use client"

import { useEffect, useRef, useState } from "react"
import VideoIntro from "@/pages/video-intro"
import ShanghaiPage from "@/pages/shanghai-page"
import LeftTableOfContents from "@/pages/table-of-contents-left"
import BookIntroductionPage from "@/pages/book-introduction-page-left"
import HistoryLeftPage from "@/pages/history-page-left"
import HistoryLeftPage2 from "@/pages/history-page-2-left"
import PeopleCultureLeftPage from "@/pages/people-culture-page-left"
import type { PageFlip } from 'page-flip';

// import HTMLFlipBook from 'react-pageflip';
import HTMLFlipBook, { HTMLFlipBookElement } from 'react-pageflip';
import SinglePage from '@/pages/singlepage';

import styles from './page.module.css'
import sidebarStyle from '@/styles/sidebar.module.css'

import PeopleCultureRightPage from "@/pages/people-culture-page-right"
import HistoryRightPage2 from "@/pages/history-page-2-right"
import HistoryRightPage from "@/pages/history-page-right"
import RightTableOfContents from "@/pages/table-of-contents-right"
import BookIntroductionRightPage from "@/pages/book-introduction-page-right"
import BookIntroductionLeftPage from "@/pages/book-introduction-page-left"
import PageControls from "@/components/pagecontroller"
import AsianEscapesLeftPage from "@/pages/asian-escape-page-left"
import AsianEscapesRightPage from "@/pages/asian-escape-page-right"
import EducationLeftPage from "@/pages/education-page-left"
import EducationRightPage from "@/pages/education-page-right"
import MapLeftPage from "@/pages/map-page-left"
import MapRightPage from "@/pages/map-page-right"
import MapPage from "@/pages/map-page"

import { ThemeProvider, useTheme } from "next-themes";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"video" | "shanghai" | "next" | "contents" | "history" | "history2" | "culture" | "reading" | "introduction">("video")
  const [next, setNext] = useState(false);
  const [fastnext, setFastNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [fastprevious, setFastPrevious] = useState(false);
  const [previous10, setPrevious10] = useState(false);
  const [next10, setNext10] = useState(false);

  const [contentColor, setContentColor] = useState("");
  const { theme, resolvedTheme } = useTheme();

  // const divref = useRef<any>(null)
  const bookRef = useRef<HTMLFlipBookElement | null>(null);
  const bookRef1 = useRef<HTMLFlipBookElement | null>(null);

  const goToNextPage = () => {
    bookRef.current?.pageFlip().flipNext();
  };


  useEffect(() => {
    console.log("Current theme:", theme);
    console.log("Resolved theme:", resolvedTheme);
  }, []);


  useEffect(() => {
    let mobPageNum = 0;
    let lapPageNum = 0;

    if (bookRef.current && bookRef1.current) {
      mobPageNum = bookRef.current.pageFlip().getCurrentPageIndex();
      lapPageNum = bookRef1.current.pageFlip().getCurrentPageIndex();
    }

    if (next === true) {
      console.log("next")
      bookRef.current?.pageFlip().flipNext();
      bookRef1.current?.pageFlip().flipNext();
      setNext(false)
    }
    if (fastnext === true) {
      setFastNext(false)
      bookRef.current?.pageFlip().turnToPage(mobPageNum + 5);
      bookRef1.current?.pageFlip().turnToPage(lapPageNum + 5);
    }
    if (previous === true) {
      bookRef.current?.pageFlip().flipPrev();
      bookRef1.current?.pageFlip().flipPrev();
      setPrevious(false)
    }
    if (fastprevious === true) {
      if (mobPageNum > 5) bookRef.current?.pageFlip().turnToPage(mobPageNum - 5);
      if (lapPageNum > 5) bookRef1.current?.pageFlip().turnToPage(lapPageNum - 5);
      setFastPrevious(false)
    }
    if (previous10 === true) {
      if (mobPageNum > 10) bookRef.current?.pageFlip().turnToPage(mobPageNum - 10);
      if (lapPageNum > 10) bookRef1.current?.pageFlip().turnToPage(lapPageNum - 10);
      setFastPrevious(false)
    }
    if (next10 === true) {
      if (mobPageNum > 10) bookRef.current?.pageFlip().turnToPage(mobPageNum + 10);
      if (lapPageNum > 10) bookRef1.current?.pageFlip().turnToPage(lapPageNum + 10);
      setFastPrevious(false)
    }
  }, [next, fastnext, previous, fastprevious])

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

  const handleNavigateToContents = () => {
    if (bookRef.current) bookRef.current?.pageFlip().turnToPage(0);
    if (bookRef1.current) bookRef1.current?.pageFlip().turnToPage(0);
  };

  // return <RightTableOfContents onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
  // return <HistoryLeftPage2 onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />

  // return (
  //   <HTMLFlipBook
  //     width={300}
  //     height={500}
  //     size="fixed"
  //     showCover={true}
  //     className="demo-book"
  //     style={{}}
  //     startPage={0}
  //     mobileScrollSupport={true}
  //     minWidth={300}
  //     maxWidth={1000}
  //     minHeight={400}
  //     maxHeight={1536}
  //     maxShadowOpacity={0.5}
  //     usePortrait={true}
  //     startZIndex={0}
  //     autoSize={true}
  //     clickEventForward={true}
  //     useMouseEvents={true}
  //     swipeDistance={30}
  //     showPageCorners={true}
  //     disableFlipByClick={false}
  //   >
  //     <div className="page">Page 1</div>
  //     <div className="page">Page 2</div>
  //     <div className="page">Page 3</div>
  //     <div className="page">Page 4</div>
  //   </HTMLFlipBook>
  // )

  return (
    // <RightTableOfContents onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
    // <EducationRightPage />
    // <PeopleCultureLeftPage onBackClick={handleCultureBack} onNextClick={handleCultureNext} />
    // <BookIntroductionLeftPage onBackClick={handleCultureBack} onNextClick={handleCultureNext}  />
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider defaultOpen={false} >
        <AppSidebar onNavigateToContents={handleNavigateToContents} getColorMode={setContentColor} />
        <SidebarInset>
          <div className={`flex h-2 items-center gap-2 px-4 pt-4 absolute ${sidebarStyle.sidebarForMob}`}>
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="overflow-hidden">
            <div className={`w-full pb-[30px] px-[100px] h-full ${styles.Laptop}`}>
              <div className="mx-auto">
                <HTMLFlipBook
                  width={400}
                  height={1000}
                  size="stretch"
                  minWidth={315}
                  maxWidth={1000}
                  minHeight={400}
                  maxHeight={1533}
                  maxShadowOpacity={0.5}
                  mobileScrollSupport={true}
                  className="mx-auto"
                  disableFlipByClick={false}
                  // flippingTime={10000}
                  swipeDistance={10000}
                  useMouseEvents={true}
                  ref={bookRef1}
                >
                  <SinglePage number="1">
                    <div>
                      <Header sectionTitle="LIVING THE LIFE | Asian escapes" pageNumber="412" part="left" />
                      <LeftTableOfContents colorMode={contentColor} onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
                      <Footer part="left" />
                    </div>
                  </SinglePage>
                  <SinglePage number="2">
                    <div>
                      <RightTableOfContents colorMode={contentColor} onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
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
                  <SinglePage number="11">
                    <div>
                      <AsianEscapesLeftPage />
                    </div>
                  </SinglePage>
                  <SinglePage number="12">
                    <div>
                      <AsianEscapesRightPage />
                    </div>
                  </SinglePage>
                  <SinglePage number="13">
                    <div>
                      <EducationLeftPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
                    </div>
                  </SinglePage>
                  <SinglePage number="14">
                    <div>
                      <EducationRightPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
                    </div>
                  </SinglePage>
                  <SinglePage number="15">
                    <div>
                      <MapLeftPage />
                    </div>
                  </SinglePage>
                  <SinglePage number="16">
                    <div>
                      <MapRightPage />
                    </div>
                  </SinglePage>
                </HTMLFlipBook>
              </div>
              <div className="container mt-3" style={{ backgroundColor: "white", zIndex: 10 }}>
                <PageControls
                  clickNext={setNext}
                  clickFastNext={setFastNext}
                  clickPrevious={setPrevious}
                  clickFastPrevious={setFastPrevious}
                  click10Previous={setPrevious10}
                  click10Next={setNext10}
                />
              </div>
            </div>
            <div>
              <div className={styles.bookForMob}>
                <HTMLFlipBook width={300} height={800} size="stretch" mobileScrollSupport={true}
                  minWidth={300} maxWidth={1000} minHeight={600} maxHeight={1800} disableFlipByClick={false} useMouseEvents={false}
                  ref={bookRef}
                >
                  {/* <HTMLFlipBook
                  width={300}
                  height={800}
                  size="stretch"
                  minWidth={300}
                  maxWidth={1000}
                  minHeight={600}
                  maxHeight={1800}
                  disableFlipByClick={true}
                  useMouseEvents={false}
                  mobileScrollSupport={true}
                  ref={bookRef} // ✅ attaches correctly
                > */}
                  <SinglePage number="1">
                    <div>
                      <LeftTableOfContents colorMode={contentColor} onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
                    </div>
                  </SinglePage>
                  <SinglePage number="2">
                    <div>
                      <RightTableOfContents colorMode={contentColor} onBackClick={handleIntroductionBack} onStartReading={handleViewContents} />
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
                  <SinglePage number="11">
                    <div>
                      <AsianEscapesLeftPage />
                    </div>
                  </SinglePage>
                  <SinglePage number="12">
                    <div>
                      <AsianEscapesRightPage />
                    </div>
                  </SinglePage>
                  <SinglePage number="13">
                    <div>
                      <EducationLeftPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
                    </div>
                  </SinglePage>
                  <SinglePage number="14">
                    <div>
                      <EducationRightPage onBackClick={handleHistoryBack} onNextClick={handleIntroductionNext} />
                    </div>
                  </SinglePage>
                  <SinglePage number="15">
                    <div>
                      <MapPage />
                    </div>
                  </SinglePage>
                </HTMLFlipBook>
              </div>
              <div className="container mt-3" style={{ backgroundColor: "white", zIndex: 10 }}>
                <PageControls
                  clickNext={setNext}
                  clickFastNext={setFastNext}
                  clickPrevious={setPrevious}
                  clickFastPrevious={setFastPrevious}
                  click10Previous={setPrevious10}
                  click10Next={setNext10}
                />
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
