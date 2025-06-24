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

const PageControls = ({  clickNext, clickFastNext, clickPrevious, clickFastPrevious, click10Previous, click10Next, part }: PageControllerProps) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 transition-opacity duration-300 bg-black bg-opacity-40 hover:bg-opacity-80 rounded-full px-6 py-2 flex gap-3 z-50">
      <div className={part === "left" ? "" : "hidden"}>
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
      </div>
      <div className={part === "right" ? "" : "hidden"}>
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
      </div>
    </div>
  );
};

export default PageControls;
