import AWS from 'aws-sdk';
import {PDFLoader} from 'langchain/document_loaders/fs/pdf';
import { Pinecone, PineconeConfiguration } from '@pinecone-database/pinecone';
import { downloadFormS3 } from './s3-server';
import {
  Document,
  RecursiveCharacterTextSplitter,
} from "@pinecone-database/doc-splitter";

export const getPineconeClient = () => {
    return new Pinecone({
        environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT!,
        apiKey: process.env.NEXT_PUBLIC_PINECONE_KEY!,
    } as PineconeConfiguration);
};

type PDFpage ={
pageContent:string;
metadata:{
    loc:{pageNumber:number};
}
}

export async function loadS3IntoPinecone(fileKey:string){
    console.log('downloading s3 files from system');
    const file_name = await downloadFormS3(fileKey);    
    if(!file_name){
    throw new Error('file not found');
    }
    const loader = new PDFLoader(file_name);
    const pages = (await loader.load()) as PDFpage[];
    
    // split the docs into segmetns
    const document = await Promise.all(pages.map(prepareDocument));

    // vectorize the docs and embed them
    const vectorizedDocuments = await Promise.all(
}
 
export const truncateStringByBytes = (str: string, bytes: number) => {
  const enc = new TextEncoder();
  return new TextDecoder("utf-8").decode(enc.encode(str).slice(0, bytes));
};

async function prepareDocument(page: PDFpage) {
  let { pageContent, metadata } = page;
  pageContent = pageContent.replace(/\n/g, "");
  // split the docs
  const splitter = new RecursiveCharacterTextSplitter();
  const docs = await splitter.splitDocuments([
    new Document({
      pageContent,
      metadata: {
        pageNumber: metadata.loc.pageNumber,
        text: truncateStringByBytes(pageContent, 36000),
      },
    }),
  ]);
  return docs;
}