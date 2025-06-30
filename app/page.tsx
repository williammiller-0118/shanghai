"use client"

import React, { ComponentType, ReactNode, useEffect, useRef, useState } from "react"
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
import Footer from "@/components/footer"
import EducationListLeftPage from "@/pages/educationlist-page-left"
import EducationListRightPage from "@/pages/educationlist-page-right"
import Header from "@/components/header"

const BookList = [
  { page: LeftTableOfContents, sectionTitle: "PREPARATIONS", subTitle: "Table of contents", pageNubmer: "86" },
  { page: RightTableOfContents, sectionTitle: "PREPARATIONS", subTitle: "Table of contents", pageNubmer: "87" },
  { page: BookIntroductionLeftPage, sectionTitle: "PREPARATIONS", subTitle: "", pageNubmer: "28" },
  { page: BookIntroductionRightPage, sectionTitle: "PREPARATIONS", subTitle: "", pageNubmer: "29" },
  { page: HistoryLeftPage, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "30" },
  { page: HistoryRightPage, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "31" },
  { page: HistoryLeftPage2, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "32" },
  { page: HistoryRightPage2, sectionTitle: "PREPARATIONS", subTitle: "History", pageNubmer: "33" },
  { page: PeopleCultureLeftPage, sectionTitle: "PREPARATIONS", subTitle: "People and culture", pageNubmer: "36" },
  { page: PeopleCultureRightPage, sectionTitle: "PREPARATIONS", subTitle: "People and culture", pageNubmer: "37" },
  { page: AsianEscapesLeftPage, sectionTitle: "LIVING THE LIFE", subTitle: "Asian escapes", pageNubmer: "412" },
  { page: AsianEscapesRightPage, sectionTitle: "LIVING THE LIFE", subTitle: "Asian escapes", pageNubmer: "413" },
  { page: EducationLeftPage, sectionTitle: "PREPARATIONS", subTitle: "Education", pageNubmer: "86" },
  { page: EducationRightPage, sectionTitle: "PREPARATIONS", subTitle: "Education", pageNubmer: "87" },
  { page: EducationListLeftPage, sectionTitle: "PREPARATIONS", subTitle: "Education Listing", pageNubmer: "222" },
  { page: EducationListRightPage, sectionTitle: "PREPARATIONS", subTitle: "Education Listing", pageNubmer: "223" },
  // { page: MapLeftPage, sectionTitle: "SOFT LANDING", subTitle: "Former French Concession", pageNubmer: "220" },
  // { page: MapRightPage, sectionTitle: "SOFT LANDING", subTitle: "Former French Concession", pageNubmer: "221" },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"video" | "shanghai" | "next" | "contents" | "history" | "history2" | "culture" | "reading" | "introduction">("video")
  const [next, setNext] = useState(false);
  const [fastnext, setFastNext] = useState(false);
  const [previous, setPrevious] = useState(false);
  const [fastprevious, setFastPrevious] = useState(false);
  const [previous10, setPrevious10] = useState(false);
  const [next10, setNext10] = useState(false);
  const [viewmode, setViewMode] = useState("");
  const [contentColor, setContentColor] = useState("");

  const bookRef = useRef<HTMLFlipBookElement | null>(null);
  const bookRef1 = useRef<HTMLFlipBookElement | null>(null);

  useEffect(() => {
    let mobPageNum = 0;
    let lapPageNum = 0;

    if (!bookRef1.current?.pageFlip()) return;

    if (bookRef1.current?.pageFlip()) {
      lapPageNum = bookRef1.current.pageFlip().getCurrentPageIndex();
    }

    if (next === true) {
      bookRef1.current?.pageFlip().flipNext();
      setNext(false)
    }
    if (fastnext === true) {
      setFastNext(false)
      bookRef1.current?.pageFlip().turnToPage(lapPageNum + 4);
    }
    if (previous === true) {
      bookRef1.current?.pageFlip().flipPrev();
      setPrevious(false)
    }
    if (fastprevious === true) {
      if (lapPageNum > 3) bookRef1.current?.pageFlip().turnToPage(lapPageNum - 3);
      setFastPrevious(false)
    }
    // if (previous10 === true) {
    //   if (lapPageNum > 10) bookRef1.current?.pageFlip().turnToPage(lapPageNum - 9);
    //   setPrevious10(false)
    // }
    if (next10 === true) {
      console.log("fast10Next", mobPageNum, lapPageNum)
      bookRef1.current?.pageFlip().turnToPage(lapPageNum + 8);
      setNext10(false)
    }
  }, [next, fastnext, previous, fastprevious, next10, previous10])

  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    // console.log("Current theme:", theme);
    // console.log("Resolved theme:", resolvedTheme);
  }, []);

  const handleVideoEnd = () => {
    setCurrentPage("shanghai")
  }

  const handlePowerButtonClick = () => {
    setCurrentPage("next")
  }

  const handleNavigateToContents = () => {
    if (bookRef.current) bookRef.current?.pageFlip().turnToPage(0);
    if (bookRef1.current) bookRef1.current?.pageFlip().turnToPage(0);
  };

  if (currentPage === "video") {
    return <VideoIntro onVideoEnd={handleVideoEnd} />
  }

  if (currentPage === "shanghai") {
    return <ShanghaiPage onPowerButtonClick={handlePowerButtonClick} />
  }

  const PageLayout = (Page: ComponentType<any>, sectionTitle: string, subTitle: string, pageNubmer: string, part: string) => {

    // return <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc" }} className="sm:h-[100vh] md:h-[100vh] lg:h-[100vh] xs:h-[100vh] h-[calc(100vh-50px)]">
    return <div style={{ display: "flex", flexDirection: "column", border: "1px solid #ccc", height: "100dvh" }} className="h-dvh">
      <div style={{ height: "8dvh"}}>
        <Header sectionTitle={sectionTitle} subTitle={subTitle} pageNumber={pageNubmer} part={part} />
      </div>
      <div style={{ height: "84dvh" }}>
        <Page />
      </div>
      <div style={{ height: "8dvh", overflow: "hidden", display: "flex", backgroundColor: "black", justifyContent: "center"}}>
        <Footer
          part={part}
          clickNext={setNext}
          clickFastNext={setFastNext}
          clickPrevious={setPrevious}
          clickFastPrevious={setFastPrevious}
          click10Previous={setPrevious10}
          click10Next={setNext10}
        />
      </div>
    </div>
  }

  return (
    // <RightTableOfContents colorMode={""} />
    // <HistoryLeftPage />
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
            <div className={`w-full h-full`}>
              <div className="mx-auto">
                <HTMLFlipBook
                  width={400}
                  height={1500}
                  size="stretch"
                  minWidth={315}
                  maxWidth={1000}
                  minHeight={400}
                  maxHeight={1533}
                  mobileScrollSupport={true}
                  disableFlipByClick={false}
                  className="mx-auto"
                  onChangeOrientation={e => setViewMode(e.data)}
                  flippingTime={1000}
                  usePortrait={true}
                  useMouseEvents={false}
                  ref={bookRef1}
                >
                  {
                    BookList.map((page, index) => {
                      console.log(page)
                      return <SinglePage number={`${index + 1}`} key={index}>
                        {index % 2 == 0 ? PageLayout(page.page, page.sectionTitle, page.subTitle, page.pageNubmer, "left") : PageLayout(page.page, page.sectionTitle, page.subTitle, page.pageNubmer, "right")}
                      </SinglePage>
                    })
                  }
                </HTMLFlipBook>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
