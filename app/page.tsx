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

  useEffect(() => {
    let mobPageNum = 0;
    let lapPageNum = 0;

    if (!bookRef.current?.pageFlip() && !bookRef1.current?.pageFlip()) return;

    if (bookRef.current?.pageFlip() && bookRef1.current?.pageFlip()) {
      mobPageNum = bookRef.current.pageFlip().getCurrentPageIndex();
      lapPageNum = bookRef1.current.pageFlip().getCurrentPageIndex();
    }

    if (next === true) {
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
  }, [next, fastnext, previous, fastprevious, next10, previous10])

  const [contentColor, setContentColor] = useState("");
  const { theme, resolvedTheme } = useTheme();

  // const divref = useRef<any>(null)
  const bookRef = useRef<HTMLFlipBookElement | null>(null);
  const bookRef1 = useRef<HTMLFlipBookElement | null>(null);

  useEffect(() => {
    // console.log("Current theme:", theme);
    // console.log("Resolved theme:", resolvedTheme);
  }, []);

  const handleNavigateToContents = () => {
    if (bookRef.current) bookRef.current?.pageFlip().turnToPage(0);
    if (bookRef1.current) bookRef1.current?.pageFlip().turnToPage(0);
  };

  return (
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
                  height={1000}
                  size="stretch"
                  minWidth={315}
                  maxWidth={1000}
                  minHeight={400}
                  maxHeight={1533}
                  mobileScrollSupport={true}
                  className="mx-auto"
                  disableFlipByClick={false}
                  // flippingTime={10000}
                  // usePortrait={true}
                  useMouseEvents={true}
                  ref={bookRef1}
                >
                  <SinglePage number="1">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <LeftTableOfContents colorMode={contentColor} />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="2">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <RightTableOfContents colorMode={contentColor} />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="3">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <BookIntroductionLeftPage />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="4">
                    <div  style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <BookIntroductionRightPage />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="5">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <HistoryLeftPage />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="6">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <HistoryRightPage />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="7">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <HistoryLeftPage2 />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="8">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <HistoryRightPage2 />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="9">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <PeopleCultureLeftPage />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="10">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <PeopleCultureRightPage />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="11">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <AsianEscapesLeftPage />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="12">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <AsianEscapesRightPage />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="13">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <EducationLeftPage />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="14">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <EducationRightPage />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="15">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <MapLeftPage />
                      <Footer 
                        part="left"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                  <SinglePage number="16">
                    <div style={{display: "flex", flexDirection: "column", height: "100vh"}}>
                      <MapRightPage />
                      <Footer 
                        part="right"
                        clickNext={setNext}
                        clickFastNext={setFastNext}
                        clickPrevious={setPrevious}
                        clickFastPrevious={setFastPrevious}
                        click10Previous={setPrevious10}
                        click10Next={setNext10} 
                      />
                    </div>
                  </SinglePage>
                </HTMLFlipBook>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  )
}
