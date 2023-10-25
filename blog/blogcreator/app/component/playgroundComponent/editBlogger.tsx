'use-client'
import "@blocknote/core/style.css";
import { useFrappeGetDoc, useFrappeUpdateDoc, useFrappeFileUpload } from 'frappe-react-sdk'
import React, { useEffect, useState } from 'react'
import Composer from './composer'
import { useFormik } from 'formik';
import { Button } from '@/components/ui/button';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { BloggerContext } from "@/provider/BloggerProvider";
import { Blogger } from "@/typing";
import { Checkbox } from "@/components/ui/checkbox";





export default function EditBlogger () {
    const bloggerContext = useContext(BloggerContext)
    let data = bloggerContext.data? bloggerContext.data : {} as Blogger;
    const [file, setFile] = useState<File>()
    const { updateDoc, loading : docLoading, isCompleted } = useFrappeUpdateDoc()
    const {upload,progress, loading} = useFrappeFileUpload()
    const router = useRouter()
    const [url , setUrl] = useState('')

    const handleFile = (target : FileList | null) => {
        if(target)
        {
            setFile(target[0])
        }
    }

    useEffect(() => {
        if(url != '' && bloggerContext.update == 1)
        {
            formik.setFieldValue('meta_image',url);
            formik.handleSubmit()
        }
    },[url])

    useEffect(() => {
        if(isCompleted && bloggerContext.update == 1)
        {
            bloggerContext.changeSubmit(2)
            router.push('/pages/blog')
        }
    },[isCompleted])

    useEffect(() =>{

        if(bloggerContext.update == 1)
        {
            if(file)
            {
                upload(file,{
                    /** If the file access is private then set to TRUE (optional) */
                    "isPrivate": false,
                    "doctype" : "Blog Blogger",
                    "docname" : data.name,
                    "fieldname" : "meta_image"
                  }).then((response) => {setUrl(response.file_url)})
            }
            else{
                formik.handleSubmit()
            }
        }
    },[bloggerContext.update])

    const formik = useFormik<Blogger>({
        initialValues: {
        name :  data?.name ?? '',
        full_name : data?.full_name ?? '',
        bio : data?.bio ?? '',
        avatar : data?.avatar ?? '',
        disabled : data?.disabled ?? false,
        short_name : data?.short_name ?? ''
        },
        onSubmit: (values) => updateDoc("Blog Blogger", data.name , {
            ...values,
        }).then(() => {}),
    })

    return (
        <>
            {docLoading ? 'loading ...' :             
            <form className="flex h-full flex-col space-y-4" onSubmit={formik.handleSubmit}>
                <div className='flex h-full flex-col space-y-4 '>
                    <div className="flex flex-column gap-2 items-start ">
                        <label htmlFor="name">name</label>
                        <input id='name' className="border rounded " type="text" value={data?.full_name} onChange={(e ) => formik.setFieldValue('full_name', e.target.value,  )}/>
                    </div>
                    <div>
                        <label htmlFor="bio">bio</label>
                        <input id='bio' type='text' className="border rounded " value={data?.bio} onChange={(e ) => formik.setFieldValue('bio', e.target.value,  )}/>
                    </div>
                    <div>
                        <label htmlFor="avatar">avatar</label>
                        <input id='avatar' type='file' className="border rounded "  onChange={(e ) => handleFile(e.target.files)}/>
                        {file && <img className="w-10 h-10" src={URL.createObjectURL(file)} alt="Selected File" />}
                    </div>
                    <div>
                        <label htmlFor="disbled">disabled</label>
                        <Checkbox id='disabled'></Checkbox>
                    </div>

                </div>
            </form>}
        
        </>
    );
}


