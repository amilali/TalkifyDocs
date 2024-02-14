'use client';
import { uploadFileToS3 } from '@/lib/s3'
import { useMutation } from '@tanstack/react-query'
import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Loader } from '../Loader'
import { useRouter } from 'next/navigation';


const FileUpload = () => {
    const router = useRouter();
    const [uploading, setUploading] = React.useState(false);
    
    const { mutate, isPending } = useMutation({
        mutationFn: async ({ file_key, file_name }: { file_key: string, file_name: string }) => {
            // console.log("mutationFn");
            try {
            const response = await axios.post('/api/create-chat', { file_key, file_name });
            console.log(response);
            return response.data; 
            } catch (error) {
                console.log(error);
            }
        }
    });

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'application/pdf': ['.pdf'] },
        maxFiles: 1,
        multiple: false,
        onDrop: async (acceptedFiles) => {
            // console.log(acceptedFiles)
            const file = acceptedFiles[0];
            if (file.size > 10 * 1024 * 1024) {
                toast.error("File size is too big!");
                return
            }

            try {
                setUploading(true);
                const data = await uploadFileToS3(file);
                // console.log('data=>'+data);
                if (!data?.file_key || !data.file_name) {
                    toast.error("Something went wrong!");
                    return;
                }
                mutate(data, {
                    onSuccess: ({ chatid }) => {
                        // console.log(chatid);
                        toast.success("Scanned successfully!");
                        router.push(`/chat/${chatid}`);
                    },
                    onError: (error) => {   
                        toast.error("Error creating chat");
                        console.log(error);
                    }
                });
            } catch (error) {
                console.log(error);
            }
            finally {
                setUploading(false);
            }
        },
    })
    return (
        <div className='p2 bg-white rounded-xl w-96'>
            <div {...getRootProps({
                className: 'border-dashed border-2 border-blue-300 p-8 rounded-xl justify-center text-center cursor-pointer bg-gray-100',
            })}>
                <input {...getInputProps()} />
                <div className='flex flex-col justify-center items-center m-5'>
                    {(uploading || isPending) ? (<><Loader color="#2779e4" />            
                    <p className="mt-2 text-sm text-slate-400">
                        Spilling Tea to GPT...
                    </p></>) : (<><Inbox className="w-10 h-10 text-blue-500" /> <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p></>)}
                </div>
            </div>
        </div>
    )
}

export default FileUpload