'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Trash2 } from "lucide-react"
  import { TabContext } from "@/provider/tabProvider"
  import { useContext, useEffect } from "react"
  import { useFrappeDeleteDoc, useFrappeGetDocList } from "frappe-react-sdk"
import { cn } from "@/lib/utils"
  

export default function DeleteModal ({custom = false, children, className} : {custom? : boolean, children? : any, className? : string}) {
    const tabContext = useContext(TabContext);
    const {deleteDoc, loading} = useFrappeDeleteDoc()
    var doctype = 'Blog Post'
    var fields = ['name', 'title']
    switch (tabContext.variable)
    {
        case 'Post' :
            doctype = 'Blog Post';
            break;
        case 'Blogger':
            doctype = 'Blogger';
            fields = ['name', 'full_name']
            break;
        case 'Categories':
            doctype = 'Blog Category';
            break;
        case 'Page' :
            doctype = 'BlogPage';
            break;
        case 'SystemPage':
            doctype = 'SystemPage';
            break;
    }
    const {data} = useFrappeGetDocList(doctype,{fields : fields});
    
    const deleteDocHandler = () => {
        let names : string[] = []
        if (data)
        {
            tabContext.rows.forEach((id) => {
                const filteredItems = data.filter((item) => {
                    if (tabContext.variable === 'Blogger') {
                        return item.full_name === id;
                    } else {
                        return item.title === id;
                    }
                });
                filteredItems.forEach((item) => {
                    names.push(item.name);
                });
            });
            names.forEach((name) => {
                deleteDoc(doctype, name).then(() => {tabContext.toggleMutate()})
            })
        }
    }

    return (
        <>
            {loading && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                <div className="flex items-center space-x-2 bg-white rounded p-2">

                <span>Loading...</span>
                </div>
            </div>
            )}
        <AlertDialog>
            {!custom && (<AlertDialogTrigger className={cn(className,"rounded-[6px] bg-[#EF4444] text-[#FAFAFA] flex h-[40px] p-2 justify-center items-center gap-2")}><Trash2 className="w-[16px] h-[16px]"></Trash2><span>Delete</span></AlertDialogTrigger>) }
            {children && (<AlertDialogTrigger>{children}</AlertDialogTrigger>)}
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your item
                and remove your data from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => deleteDocHandler()}>Continue</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
        </>
    )
}   