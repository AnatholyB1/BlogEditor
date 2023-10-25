'use client'
import { Metadata } from "next"
import Image from "next/image"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Separator } from "@/components/ui/separator"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Suspense, useState } from "react"
import { ModelSelector } from "./playgroundComponent/model-selector"
import { PresetActions } from "./playgroundComponent/preset-actions"
import { PresetSave } from "./playgroundComponent/preset-save"
import { PresetSelector } from "./playgroundComponent/preset-selector"
import { DatePicker } from "./playgroundComponent/publishdate-selector"
import { presets } from "./playgroundData/presets"
import EditBlog from "./playgroundComponent/editblog"
import NewBlog from "./playgroundComponent/newBlog"
import Blog from "./playgroundComponent/Blog"
import  {useRouter}  from "next/navigation"
import FileSelection from "./playgroundComponent/file-selector"
import { WriterSelector } from "./playgroundComponent/writer-select"
import { PostContext } from "@/provider/postProvider"
import { useContext } from "react"
import { UpdateObject, contextType } from "@/typing"
import Page from "./playgroundComponent/page"
import EditPage from "./playgroundComponent/editPage"
import NewPage from "./playgroundComponent/newPage"
import { TabContextType } from "@/typing"
import EditBlogger from "./playgroundComponent/editBlogger"
import Blogger from "./playgroundComponent/blogger"
import NewBlogger from "./playgroundComponent/newBlogger"
import SystemPage from "./playgroundComponent/systemPage"
import NewSystemPage from "./playgroundComponent/newSystemPage"
import EditSystemPage from "./playgroundComponent/editSystemPage"

export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
}

export default function PlaygroundPage({state, page} : {state : string, page : TabContextType }) {

  const router = useRouter()
  const postContext = useContext(PostContext)
  
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/playground-light.png"
          width={1280}
          height={916}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/playground-dark.png"
          width={1280}
          height={916}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <button onClick={() => {postContext.ChangeObject({} as UpdateObject) ,router.push('/pages/blog')}}><h2 className="text-lg font-semibold">Home</h2></button>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <PresetSelector presets={presets} />
            {state != 'view' ? <PresetSave page={page} /> : null}
            <div className="hidden space-x-2 md:flex">
            </div>
            <PresetActions />
          </div>
        </div>
        <Separator />
        <Tabs defaultValue="complete" className="flex-1">
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                {!page? (<><ModelSelector mode={state} />
                <DatePicker mode={state}></DatePicker>
                <FileSelection mode={state}></FileSelection>
                <WriterSelector mode={state}></WriterSelector></>) : (<></>) }

              </div>
              <div className="md:order-1">
                <div className="mt-0 border-0 p-0">
                    {(() => {
                      switch(page)
                      {
                      case 'Page' :
                        switch (state) {
                          case 'edit':
                            return <EditPage />;
                          case 'new':
                            return <NewPage />;
                          case 'view':
                            return <Page/>;
                          default:
                            return null;
                        }
                      case 'Post' :
                        switch (state) {
                          case 'edit':
                            return <EditBlog />;
                          case 'new':
                            return <NewBlog />;
                          case 'view':
                            return <Blog/>;
                          default:
                            return null;
                        }
                      case 'Blogger':
                        switch (state) {
                          case 'edit':
                            return <EditBlogger />;
                          case 'new':
                            return <NewBlogger />;
                          case 'view':
                            return <Blogger/>;
                          default:
                            return null;
                        }
                      case 'SystemPage':
                        switch (state) {
                          case 'edit':
                            return <EditSystemPage/>;
                          case 'new':
                            return <NewSystemPage />;
                          case 'view':
                            return <SystemPage/>;
                          default:
                            return null;
                        }
                      }
                    })()}
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  )
}