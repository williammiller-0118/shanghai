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
    part: React.ReactNode,
    subTitle: React.ReactNode
}

export default function Header({sectionTitle, subTitle, pageNumber, part}: HeaderProps) {
    return (
        <div>
            { part === "left" ? <div style={{display:"flex"}}>
                <div style={{backgroundColor: "#ccc"}}>
                    <p style={{fontSize: "20px", padding: "0.1rem", paddingTop: "30px", paddingLeft: "40px", paddingRight: "20px", color: "white"}}>
                    {pageNumber}
                    </p>
                </div>
                <div style={{flex: "1", backgroundColor: "black", color: "white", padding: "0.1rem", paddingTop: "30px", paddingLeft: "10px"}}>
                    <span style={{fontSize: "larger", fontWeight: "400", textDecoration: "underline"}}>
                    {sectionTitle}
                    </span>
                    <span style={{paddingLeft: "10px", paddingRight: "10px", display:`${subTitle == "" ? "none" : ""}`}}>|</span>
                    <span>
                        {subTitle}
                    </span>
                </div>
            </div> :
            <div style={{display:"flex"}}>
              <div style={{flex: "1", backgroundColor: "black", color: "white", padding: "0.1rem", paddingTop: "30px", paddingRight: "20px", textAlign: "right"}}>
                <span>
                     {subTitle}
                </span>
                <span style={{paddingLeft: "10px", paddingRight: "10px", display:`${subTitle == "" ? "none" : ""}`}}>|</span>
                <span style={{fontSize: "larger", fontWeight: "400", textDecoration: "underline"}}>
                  {sectionTitle}
                </span>
              </div>
              <div style={{backgroundColor: "#ccc"}}>
                <p style={{fontSize: "20px", padding: "0.1rem", paddingTop: "30px", paddingLeft: "40px", paddingRight: "20px", color: "white"}}>
                  {pageNumber}
                </p>
              </div>
            </div>
            }
        </div>
    )
}
