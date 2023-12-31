'use client'
import React, { useContext } from "react"
import { ModelSelector } from "./model-selector"
import { DatePicker } from "./publishdate-selector"
import FileSelection from "./file-selector"
import { WriterSelector } from "./writer-select"
import { AnimationContext } from "@/provider/animationProvider"

export default function SideBarRight ({state} : {state : string}) {
    const animation = useContext(AnimationContext)
    return (
        <div className={`SideBarRight ${animation.sidebarRight && ('open')} bg-white boder-r border-grey`}>
                <ModelSelector mode={state} />
                <DatePicker mode={state}></DatePicker>
                <FileSelection mode={state}></FileSelection>
                <WriterSelector mode={state}></WriterSelector>
        </div>
    )
}