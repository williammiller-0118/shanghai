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
        <div style={{marginRight: "1rem", display: "flex", gap: "0.5rem"}}>
          <div style={{ cursor: "pointer"}} onClick={() => clickPrevious(true)}>
            <img src="images/btn/previous.png" style={{width: "50px"}} />
          </div>
          <div style={{cursor: "pointer"}} onClick={() => clickNext(true)}>
            <img src="images/btn/next.png" style={{width: "50px"}} />
          </div>
        </div>
        <div style={{marginRight: "1rem", display: "flex", gap: "0.5rem"}}>
          
          <div style={{cursor: "pointer"}} onClick={() => clickFastPrevious(true)}>
            <img src="images/btn/-5.png" style={{width: "50px"}} />
          </div>
          
          <div style={{cursor: "pointer"}} onClick={() => clickFastNext(true)}>
            <img src="images/btn/+5.png" style={{width: "50px"}} />
          </div>
          
          <div style={{cursor: "pointer"}} onClick={() => click10Next(true)}>
            <img src="images/btn/+10.png" style={{width: "50px"}} />
          </div>
        </div>
      </div>
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
