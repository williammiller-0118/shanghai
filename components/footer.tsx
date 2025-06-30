"use client"

import styles from "@/styles/footer.module.css"
import PageControls from "./pagecontroller"

interface FooterProps {
  part: string
  clickNext: (value: boolean) => void
  clickFastNext: (value: boolean) => void
  clickPrevious: (value: boolean) => void
  clickFastPrevious: (value: boolean) => void
  click10Previous: (value: boolean) => void
  click10Next: (value: boolean) => void
}

export default function Footer({part, clickNext, clickPrevious, clickFastPrevious, click10Previous, click10Next, clickFastNext} : FooterProps) {
  return (
      <div style={{height: "10dvh"}}>
        <PageControls 
          part={part}
          clickNext={clickNext}
          clickFastNext={clickFastNext}
          clickPrevious={clickPrevious}
          clickFastPrevious={clickFastPrevious}
          click10Previous={click10Previous}
          click10Next={click10Next}
        />
      </div>
  )
}
