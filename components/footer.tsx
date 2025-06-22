"use client"

import styles from "@/styles/footer.module.css"

interface FooterProps {
    part: React.ReactNode
}

export default function Footer({part} : FooterProps) {
    return (
        <div className={styles.pageFooter}>
          {
            part === "left" ? <span className={styles.footerBrand}>Going Global</span> :
            <span className={styles.footerBrand}>Going Global</span>
          }
        </div>
    )
}
