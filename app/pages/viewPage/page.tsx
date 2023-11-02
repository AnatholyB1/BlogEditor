'use client'
import dynamic from 'next/dynamic'

const PlaygroundPage = dynamic(
  () => import('../../component/playground'),
  { ssr: false }
)
import { Suspense } from "react"

export default function ViewPage () {
    return(
        <Suspense fallback={'Loading...'}>
        <PlaygroundPage state={'view'} page={'Page'}></PlaygroundPage>
        </Suspense>
    )
}