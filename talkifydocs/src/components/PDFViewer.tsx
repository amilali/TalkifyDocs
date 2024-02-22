import React from 'react'

type Props = {pdf_url:string}

const PDFViewer = ({pdf_url}: Props) => {
  return (
    <iframe src={`https://docs.google.com/gview?url=${pdf_url}&embedded=true`} className='w-full h-full rounded-sm bg-[#ffffff25]'>
    </iframe>
  )
}

export default PDFViewer