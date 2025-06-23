"use client"

import styles from "@/styles/header.module.css"
import React from "react"

import { ThemeProvider } from "next-themes";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/app-sidebar";

interface HeaderProps {
    sectionTitle: React.ReactNode,
    pageNumber: React.ReactNode,
    part: React.ReactNode
}

export default function Header({sectionTitle, pageNumber, part}: HeaderProps) {
    return (
        <div className={styles.pageHeader}>
        {
            part == "left" ? <div className={styles.leftTitle}>
                <span className={styles.pageNumber}>{pageNumber}</span>
                <span className={styles.sectionTitle}>{sectionTitle}</span>
            </div> : 
            <div className={styles.rightTitle}>
                <span className={styles.sectionTitle}>{sectionTitle}</span>
                <span className={styles.pageNumber}>{pageNumber}</span>
            </div>
        }
        </div>
    )
}
