'use client'
import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {}

const FileUpload = () => {
    const { getRootProps, getInputProps } = useDropzone({
        accept: {'application/pdf': ['.pdf']},
        maxFiles: 1,
        multiple: false,
        onDrop: (acceptedFiles) => {
            console.log(acceptedFiles)
        },
})
    return (
        <div className='p2 bg-white rounded-xl'>
            <div {...getRootProps({
                className: 'border-dashed border-2 border-blue-300 p-8 rounded-xl justify-center text-center cursor-pointer bg-gray-100',
            })}>
                <input {...getInputProps()} />
            <div className='flex flex-col justify-center items-center m-5'>
            <Inbox className="w-10 h-10 text-blue-500" />
            <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
          </div>
            </div>
        </div>
    )
}

export default FileUpload