import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useFrappeGetDocList } from 'frappe-react-sdk'
import { DataDocList } from '@/typing';
import { Task, CategoryTab } from '@/typing';
import { useFrappeDeleteDoc} from 'frappe-react-sdk'
import { useToast } from "@/components/ui/use-toast"
import { useContext } from "react"
import { TabContext } from "@/provider/tabProvider"
import { PostContext } from "@/provider/postProvider"
import { TypeContext } from "@/provider/typeProvider"


interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}


export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const router = useRouter();
  const {toast} = useToast();
  const postContext = useContext(PostContext)
  const typeContext = useContext(TypeContext)
  const tabType = useContext(TabContext);
  var doctype = 'Blog Post';
  type field = keyof DataDocList
  var fields : field[] = ['name', 'title', 'blog_category' , 'content_type', 'published']
  switch(tabType.variable)
  {
    case 'Categories':
      doctype = 'Blog Category'
      fields = ['name', 'title', 'published']
      break;
    case 'Post':
      doctype = 'Blog Post'
      fields = ['name', 'title', 'blog_category', 'content_type', 'published']
      break;
  }
  let {data , isLoading, mutate, error} = useFrappeGetDocList<DataDocList>(doctype,{ fields: fields });
  let tasks : any = [];
  if (data) {
    if (tabType.variable == 'Categories')
    {
      tasks = data.reduce((acc: CategoryTab [], item) => {
        acc.push({ 
          id: item.name,
          title: item.title,
          status: item.published == 1 ? "Published" : "Drafted",
        });
        return acc;
      }, []);
    }else{
      tasks = data.reduce((acc: Task [], item) => {
        acc.push({ 
          id: item.name,
          title: item.title,
          status: item.published == 1 ? "Published" : "Drafted",
          contentType: item.content_type,
        });
        return acc;
      }, []);
    }
  }


  let targetNumber = Number(row.id);
  let task = tasks[targetNumber];
  const {deleteDoc,loading,} =  useFrappeDeleteDoc()
  const [state, setState] = useState(false);
  const [page, setPage] = useState('default')


  useEffect(() => {
    if(state){
      if(tabType.variable == 'Categories')
      {
        deleteDoc('Blog Category', task.id).then(() => {mutate(),toast({title: "Information : file deleted successfully"})})
      }else{
        deleteDoc('Blog Post', task.id).then(() => {mutate(),toast({title: "Information : file deleted successfully"})})
      }
    }
  },[state])

  useEffect(() => {
    if (page !='default')
    {
      if(tabType.variable == 'Categories')
      {
        typeContext.ChangeVariable(page)
        router.push('/pages/editCategory')
      }else{
        postContext.ChangeVariable(page);
        router.push('/pages/editBlog')
      }
 
    }

  },[page])
  return (
    <>
    {loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex items-center space-x-2 bg-white rounded p-2">

          <span>Loading...</span>
        </div>
      </div>
    )}
    
     <DropdownMenu >
    <DropdownMenuTrigger asChild>
      <Button
        variant="ghost"
        className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
      >
        <DotsHorizontalIcon className="h-4 w-4" />
        <span className="sr-only">Open menu</span>
      </Button> 
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-[160px]">
      <DropdownMenuItem onClick={() => {setPage(row.id)}}>Edit</DropdownMenuItem>
      <DropdownMenuItem>Make a copy</DropdownMenuItem>
      <DropdownMenuItem>Favorite</DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuSub>
        <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
            SubContent
        </DropdownMenuSubContent>
      </DropdownMenuSub>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={() => {setState(true)}}>
        Delete
      <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut> 
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
    </>
  )
}