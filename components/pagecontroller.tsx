import React from 'react';
import { ChevronLeft, List, ChevronsLeft, ChevronsRight } from "lucide-react"
import styles from '@/styles/page-controller.module.css'

interface PageControllerProps {
  clickNext: (value: boolean) => void
  clickFastNext: (value: boolean) => void
  clickPrevious: (value: boolean) => void
  clickFastPrevious: (value: boolean) => void
  click10Previous: (value: boolean) => void
  click10Next: (value: boolean) => void
  part: string
}

const PageControls = ({ clickNext, clickFastNext, clickPrevious, clickFastPrevious, click10Previous, click10Next, part }: PageControllerProps) => {
  return (
    <div 
      className={`${styles.barPos} ${part === "left" ? `${styles.leftHidden}` : ""} bottom-4 transition-opacity duration-300 bg-white bg-opacity-40 hover:bg-opacity-80 rounded-full px-6 py-1 flex gap-3 z-50`}
    >
      {/* Center Controls */}
      <div className="flex">
        <div style={{marginRight: "1rem"}}>
          <ControlButton onClick={clickPrevious}><ChevronsLeft size={30} /></ControlButton>
          <ControlButton onClick={clickNext}><ChevronsRight size={30} /></ControlButton>
        </div>
        <div>
          <ControlButton onClick={clickFastPrevious}>-5</ControlButton>
          <ControlButton onClick={clickFastNext}>+5</ControlButton>
          <ControlButton onClick={click10Next}>+10</ControlButton>
        </div>
      </div>
        {/* <button
          onClick={() => click10Previous(true)}
          className="text-white text-lg hover:scale-110 transition-transform"
          title="Go back several pages"
        >-10
          <img src="icons/10-left.png" alt="icon" className={styles.btnSize} />
        </button>
        <button
          onClick={() => clickFastPrevious(true)}
          className="text-white text-lg hover:scale-110 transition-transform"
          title="Go back several pages"
        >
          <img src="icons/5-left.png" alt="icon" className={styles.btnSize} />
        </button>
        <button
          onClick={() => clickPrevious(true)}
          className="text-white text-lg hover:scale-110 transition-transform"
          title="Go back one page"
        >
          <img src="icons/1-left.png" alt="icon" className={styles.btnSize} />
        </button>
        <button
          onClick={() => clickNext(true)}
          className="text-white text-lg hover:scale-110 transition-transform"
          title="Go forward one page"
        >
          <img src="icons/1.png" alt="icon" className={styles.btnSize} />
        </button>
        <button
          onClick={() => clickFastNext(true)}
          className="text-white text-lg hover:scale-110 transition-transform"
          title="Go forward several pages"
        >
          <img src="icons/5.png" alt="icon" className={styles.btnSize} />
        </button>
        <button
          onClick={() => click10Next(true)}
          className="text-white text-lg hover:scale-110 transition-transform"
          title="Go forward several pages"
        >
          <img src="icons/10.png" alt="icon" className={styles.btnSize} />
        </button> */}
    </div>
  );
};

function ControlButton({ children, onClick }: { children: React.ReactNode, onClick: (value: boolean) => void }) {
  return (
    <button 
      className={`${styles.btnSize} bg-white text-black px-1.5 py-0.5 rounded-md font-bold text-xl shadow-sm hover:bg-gray-200 transition-all`}
      onClick={() => onClick(true)}
    >
      {children}
    </button>
  );
}

export default PageControls;
