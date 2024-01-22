import { db } from "@/lib/db";
import { loadS3IntoPinecone } from "@/lib/db/pinecone";
import { chats } from "@/lib/db/schema";
import { getS3Url } from "@/lib/s3";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req:Request, res:Response) {
    const {userId} = await auth();
    if(!userId){
        return NextResponse.json({error: "Unauthorized"}, {status: 401});
    }
    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name); 
        await loadS3IntoPinecone(file_key); 
        const chat_id = await db.insert(chats).values({
            FileKey: file_key,
            pdfName: file_name,    
            pdfUrl: getS3Url(file_key),
            userId,
        }).returning({
            insetedId: chats.id,
        });

        return NextResponse.json({
            chat_id: chat_id[0].insetedId,
        }, {status: 200});

    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Internal Server Error rt"}, {status: 500});
    }
}