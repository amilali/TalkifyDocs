import {PDFLoader} from 'langchain/document_loaders/fs/pdf';
import { Pinecone, PineconeRecord} from '@pinecone-database/pinecone';
import { downloadFormS3 } from './s3-server';
import {
  Document,
  RecursiveCharacterTextSplitter,
} from "@pinecone-database/doc-splitter";
import { getEmbeddings } from '../embeddings';
import md5 from 'md5';
import { convertToAscii } from '../utils';

export const getPineconeClient = () => {
  return new Pinecone({
    environment: process.env.NEXT_PUBLIC_PINECONE_ENVIRONMENT ?? " ",
    apiKey: process.env.NEXT_PUBLIC_PINECONE_KEY ?? " ",
  });
};
// This is the nullish coalescing operator (??). It returns the right-hand operand if the left-hand operand is null or undefined
type PDFpage ={
pageContent:string;
metadata:{
  loc:{pageNumber:number};
}
}

export async function loadS3IntoPinecone(fileKey:string){
    // console.log('downloading s3 files from system');
    const file_name = await downloadFormS3(fileKey);    
    if(!file_name){
    throw new Error('file not found');
    }
    console.log("loading pdf into memory" + file_name);
    const loader = new PDFLoader(file_name);
    const pages = (await loader.load()) as PDFpage[];
    
    // split the docs into segmetns
    const document = await Promise.all(pages.map(prepareDocument));

    // vectorize the docs and embed them
    const vectors = await Promise.all(document.flat().map(enbedDocument));

    // upload the vectors to pinecone
  
    const client =  getPineconeClient();
    // client ? console.log("working pincone") : console.log("not working pinecone");
    const pineconeIndex = client.Index('talkify-docs');

    // console.log('inserting vector into pinecone');
    const namespace = pineconeIndex.namespace(convertToAscii(fileKey));

    // console.log("inserting vectors into pinecone");
    await namespace.upsert(vectors);

    return document[0];
}

async function enbedDocument(doc: Document) {
  try {

    const embeddings = await getEmbeddings(doc.pageContent);
    const hash = md5(doc.pageContent);

    return {
      id: hash,
      values: embeddings,
      metadata: {
        text: doc.metadata.text,
        pageNumber: doc.metadata.pageNumber,
      },
    } as PineconeRecord;
  } catch (error) {
    console.log("error embedding document", error);
    throw error;
  }
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