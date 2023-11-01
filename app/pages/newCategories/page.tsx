import PlaygroundPage from "@/app/component/playground"
import { Suspense } from "react"

export default function EditBlog () {
    return(
        <Suspense fallback={'Loading...'}>
        <PlaygroundPage state={'new'} page={'Categories'}></PlaygroundPage >
        </Suspense>
    )
}