import aws from 'aws-sdk';
import {PDFLoader} from 'langchain/document_loaders/fs/pdf';
import { Pinecone, PineconeConfiguration } from '@pinecone-database/pinecone';
import { downloadFormS3 } from './s3-server';

export const getPineconeClient = () => {
    return new Pinecone({
        environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT!,
        apiKey: process.env.NEXT_PUBLIC_PINECONE_KEY!,
    } as PineconeConfiguration);
};

export async function loadS3IntoPinecone(fileKey:string){
    console.log('downloading s3 files from system');
    const file_name = await downloadFormS3(fileKey);    
}