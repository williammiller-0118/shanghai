import React from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react"
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
      {/* <div className= {part === "right" ? `${styles.left}` : ""}> */}
        <button
          onClick={() => click10Previous(true)}
          className="text-white text-lg hover:scale-110 transition-transform"
          title="Go back several pages"
        >
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
      {/* </div> */}
      {/* <div className={part === "left" ? `${styles.right}` : ""}> */}
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
        </button>
      {/* </div> */}
    </div>
  );
};

export default PageControls;
