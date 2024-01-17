import { NextResponse } from "next/server";

export async function POST(req:Request, res:Response) {
    try {
        const body = await req.json();
        const { file_key, file_name } = body;
        console.log(file_key, file_name);
        return NextResponse.json({success: true});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Internal Server Error rt"}, {status: 500});
    }
}